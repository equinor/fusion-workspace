#!/usr/bin/env node

import { Command } from 'commander';
import { getOctokit, context } from '@actions/github';
import { readFileSync } from 'fs';

const program = new Command();
type Octo = ReturnType<typeof getOctokit>;

program.name('PR');

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

  console.log((pullRequests as any).repository.pullRequest.closingIssuesReferences);
}
