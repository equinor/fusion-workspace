#!/usr/bin/env node

import { Command } from 'commander';
import { getOctokit, context } from '@actions/github';

const program = new Command();
type Octo = ReturnType<typeof getOctokit>;

program.name('PR');

const noLinkedIssueMessage = `⚠👮‍♀️🚔🚨
Looks like you forgot to link an issue!

If you have never linked an issue to a pull request or you just forgot how to. [Read this](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)


Next time this violation occurs your teamlead will be notified🔪🩸
`;

program
  .command('issue')
  .option('-T, --token <token>', 'github token')
  .option('-P, --pr <pr>', 'Pull request number')
  .action(async (args) => {
    if (!args.token) {
      throw new Error('Missing github token');
    }

    if (!args.pr) {
      throw new Error('Missing pr number');
    }

    const client = getOctokit(args.token);
    checkIssues(client, args.pr);
  });

await program.parseAsync();

async function checkIssues(client: Octo, pr: number) {
  console.log(`querying pr: ${pr}`);
  const pullRequests = await client.graphql(
    `query {
    repository (owner: "${context.repo.owner}", name: "${context.repo.repo}"){
   pullRequest (number: ${pr}) {
     closingIssuesReferences (first: 1){
       totalCount
     }
   }
 }
}
`
      .replaceAll('\n', '')
      .trim()
  );

  const linkedIssues: number = (pullRequests as any).repository.pullRequest.closingIssuesReferences.totalCount;

  if (linkedIssues === 0) {
    const comment = await client.rest.issues.createComment({
      issue_number: pr,
      body: noLinkedIssueMessage,
      owner: context.issue.owner,
      repo: context.issue.repo,
    });
  }
}
