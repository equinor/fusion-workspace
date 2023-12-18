#!/usr/bin/env node

import { Command } from 'commander';
import { getOctokit, context } from '@actions/github';
import { logInfo } from './utils/logInfo.js';
import { readFileSync } from 'fs';
import { RELEASE_FILE_NAME } from './constants.js';

type Octo = ReturnType<typeof getOctokit>;

async function getPullRequestFromBranch(client: Octo) {
  const branch = context.ref;

  const pullRequests = await client.rest.pulls.list({ owner: context.issue.owner, repo: context.issue.repo });
  const pullRequest = pullRequests.data.find((s) => s.head.ref === branch);

  if (!pullRequest) {
    const msg = `${branch} does not have any associated pull request`;
    logInfo(msg, 'Red');
    throw new Error(msg);
  }
  return pullRequest;
}

async function commentPullRequest(client: Octo, issueNumber: number) {
  const body = parseReleaseJson();
  const comment = await client.rest.issues.createComment({
    issue_number: issueNumber,
    body: body,
    owner: context.issue.owner,
    repo: context.issue.repo,
  });
  if (comment.status === 201) {
    logInfo('Comment created successfully', 'Green');
  }
}

const program = new Command();

program.name('PR');

program.command('comment').action(async (args) => {
  if (!args.token) {
    throw new Error('Missing github token');
  }
  const client = getOctokit(args.token);
  const pr = await getPullRequestFromBranch(args.token);
  commentPullRequest(client, pr.number);
});

await program.parseAsync();

function parseReleaseJson() {
  const packages: string[] = JSON.parse(readFileSync(`./${RELEASE_FILE_NAME}`).toString('utf-8')).packages;

  const isWorkspaceRelease = packages.find((s) => s.includes('workspace-fusion'));

  const workspaceWarning = isWorkspaceRelease
    ? ''
    : '@equinor/workspace-fusion was not published😕❓. Did you forget to bump the package📦?';

  const packageLines = packages.map((s) => s).join('\n');

  const prBody = `Packages published🚀:
\`\`\`
${packageLines}
\`\`\`
${workspaceWarning}

`;
  return prBody;
}
