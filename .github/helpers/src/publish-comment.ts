#!/usr/bin/env node

import { Command } from 'commander';
import { getOctokit, context } from '@actions/github';
import { setSecret } from "@actions/core";
import { logInfo } from './utils/logInfo.js';
import { readFileSync } from 'fs';
import { RELEASE_FILE_NAME } from './constants.js';

type Octo = ReturnType<typeof getOctokit>;

async function getPullRequestFromBranch(client: Octo) {
  const branch = context.ref.replace('refs/heads/', '');

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

program
  .command('comment')
  .option('-T, --token <token>', 'github token')
  .action(async (args) => {
    if (!args.token) {
      throw new Error('Missing github token');
    }

    setSecret(args.token);
    const client = getOctokit(args.token);
    const pr = await getPullRequestFromBranch(client);
    commentPullRequest(client, pr.number);
  });

await program.parseAsync();

function parseReleaseJson() {
  const packages: string[] = JSON.parse(readFileSync(`./${RELEASE_FILE_NAME}`).toString('utf-8')).packages;

  const isWorkspaceRelease = packages.find((s) => s.includes('workspace-fusion'));

  const workspaceWarning = isWorkspaceRelease
    ? ''
    : `Well, I reckon the @equinor/workspace-fusion ain't joinin' the rodeo just yet. Seems like it's taken a rain check on the publication hoedown. Did you happen to forget to give that package a little nudge, like spurrin' a stubborn steer❓`;

  const packageLines = packages
    .map(
      (npmPackage) => `\`\`\`
pnpm i ${npmPackage}
\`\`\``
    )
    .join('\n');

  const prBody = `Howdy, partner,

  Looks like you've got yourself a proper roundup with a posse of packages📦. If you're fixin' to bring 'em into your code corral, just hitch 'em up one by one with a trusty command like a cowboy tamin' a wild mustang.
  
  ${packageLines}
  
  These here commands will have your packages saddled up and ready to hit the open range of your project. Keep those dependencies roped and ride on into the sunset of seamless coding.
  
  ${workspaceWarning}

  Happy trailblazin'
`;
  return prBody;
}
