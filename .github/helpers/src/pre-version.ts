#!/usr/bin/env node

const defaultReleaseSchema: ReleaseSchema = {
  packages: [],
};

import { Command } from 'commander';
import { execSync } from 'child_process';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { parsePackageJson } from './utils/parse-package-json.js';
import { logInfo } from './utils/logInfo.js';
import { RELEASE_FILE_NAME } from './constants.js';

const program = new Command();

program.name('PR');

program.command('publish').action(async () => {
  createFusionApp();
});

await program.parseAsync();

/**
 * Returns the next patch of packagejson version
 */
function packageJsonNextPatch() {
  const packageJson = parsePackageJson();
  const version = packageJson.version.split('-')[0];

  const splitVersion = version.split('.');

  splitVersion[2] = (parseInt(splitVersion[2]) + 1).toString();
  return splitVersion.join('.');
}

export async function createFusionApp() {
  preparePackageForVerBump();
  bumpPackageJson();
  publishPrPackage();
}

function publishPrPackage() {
  const releaseMessage = execSync('pnpm publish --tag pr --json --no-git-checks');

  const npmRelease: NpmRelease = JSON.parse(releaseMessage.toString('utf-8'));
  logInfo(npmRelease.id, 'Green');
  appendReleaseLog(npmRelease);
}

type ReleaseSchema = {
  packages: string[];
};

function appendReleaseLog(npmRelease: NpmRelease) {
  const fileName = `../../${RELEASE_FILE_NAME}`;
  if (!existsSync(fileName)) {
    writeFileSync(fileName, JSON.stringify(defaultReleaseSchema, null, 2));
  }
  const release = readFileSync(fileName).toString('utf-8');
  const contents: ReleaseSchema = JSON.parse(release);
  contents.packages.push(npmRelease.id);
  writeFileSync(fileName, JSON.stringify(contents));
}

function preparePackageForVerBump() {
  const packageJson = parsePackageJson();
  const nextPatch = packageJsonNextPatch();
  const maybeVersion = execSync(`pnpm show ${packageJson.name} --json dist-tags.pr`).toString('utf-8');

  if (maybeVersion === '') return;

  //There is a pr tag release including the package json ver
  if (maybeVersion.includes(nextPatch)) {
    packageJson.version = maybeVersion.replaceAll(`"`, '');
    writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
  }
}

function bumpPackageJson() {
  execSync('pnpm version prerelease --preid pr');
}

type NpmRelease = {
  id: string;
  name: string;
  version: number;
  unpackedSize: number;
};
