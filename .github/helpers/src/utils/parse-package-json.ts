import fs from 'fs';

export type PackageJson = {
  name?: string;
  version?: string;
  type?: 'module' | 'commonjs';
} & Record<string, any>;

export function parsePackageJson(path: string = './package.json'): PackageJson {
  const blob = fs.readFileSync(path);
  return JSON.parse(blob.toString('utf-8'));
}
