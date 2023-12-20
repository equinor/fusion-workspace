#!/usr/bin/env node

import { Command } from 'commander';
import { getOctokit, context } from '@actions/github';

const program = new Command();
type Octo = ReturnType<typeof getOctokit>;

program.name('PR');

const noLinkedIssueMessage = `
Howdy, wanderer🌵🤠🐴,

Seems you've sauntered into our GitHub saloon with a pull request, but it appears you've forgotten to tie your horse to the hitching post. Now, in this town, we don't take kindly to stray requests, and the GitHub corral is no place for them.

I reckon you best mosey on over and link that pull request to an issue, lest you want the winds of open source trouble blowin' your way. I've got my eye on you, stranger, and a stern warning echoes through these digital canyons.

Now, for those who might be new to these parts or sufferin' from a bout of forgetfulness, fear not. I've rustled up a guide that's as handy as a snake in a boot🐍🥾. Take a peek at [this guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue), and it'll show you the way to tether that pull request like a seasoned rancher🤠.

Don't let the sun set on your unlinked pull request, and remember, in these GitHub lands, the code speaks louder than six-shooters.

Sincerely,
The code patrol👮
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
  const pullRequests = await client.graphql({
    query: `query {
      repository (owner: $owner, repo: $repo){
     pullRequest (pr: $pr) {
       closingIssuesReferences (first: 1){
         totalCount
       }
     }
   }
  }
  `,
    owner: context.repo.owner,
    repo: context.repo.repo,
    pr: pr,
  });

  const linkedIssues: number = (pullRequests as any).repository.pullRequest.closingIssuesReferences.totalCount;

  console.log(JSON.stringify(pullRequests));

  if (linkedIssues === 0) {
    const comment = await client.rest.issues.createComment({
      issue_number: pr,
      body: noLinkedIssueMessage,
      owner: context.issue.owner,
      repo: context.issue.repo,
    });
  }
}
