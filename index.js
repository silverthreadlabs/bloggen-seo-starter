#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectName = process.argv[2] || 'bloggen-seo-starter';
const projectPath = path.join(process.cwd(), projectName);

console.log(`Creating a new Bloggen SEO Starter in ${projectPath}...`);

// Clone the repository
execSync(`git clone https://github.com/silverthreadlabs/bloggen-seo-starter ${projectPath}`, { stdio: 'inherit' });

// Navigate to the project directory
process.chdir(projectPath);

// Remove .git folder
fs.rmSync(path.join(projectPath, '.git'), { recursive: true, force: true });

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Project setup complete!');
console.log(`To get started, run:\n  cd ${projectName}\n  npm run dev`);
