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
  .action(async (args) => {
    if (!args.token) {
      throw new Error('Missing github token');
    }

    const client = getOctokit(args.token);
    checkIssues(client, context.issue.number);
  });

await program.parseAsync();

async function checkIssues(client: Octo, pr: number) {
  console.log(`querying pr: ${pr}`);
  const pullRequests = await client.graphql(`query {
    repository (owner: ${context.repo.owner}, name: ${context.repo.repo}){
   pullRequest (number: ${pr}) {
     closingIssuesReferences (first: 1){
       totalCount
     }
   }
 }
}
`);

  console.log(pullRequests);
}
