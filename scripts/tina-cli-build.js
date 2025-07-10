// scripts/tina-cli-build.js

// Use import for dotenv
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// Use import for child_process
import { execSync } from 'child_process';

console.log('--- Starting TinaCMS Build with Explicit .env Loading ---');

try {
  execSync('npx tinacms build', { stdio: 'inherit' });
  console.log('--- TinaCMS Build Successful! ---');
} catch (error) {
  console.error('--- TinaCMS Build Failed: ---');
  console.error(error.message);
  process.exit(1);
}