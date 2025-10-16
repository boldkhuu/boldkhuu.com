# Release 0.3.0

## Overview

This release includes major dependency upgrades and project modernization.

## Changes Since 0.2.3

### Major Dependency Upgrades

- **Next.js**: Upgraded from 11.1.3 to 15.5.5
- **React**: Upgraded from 17.x to 19.2.0
- **React DOM**: Upgraded from 17.x to 19.2.0
- **TypeScript**: Updated to 5.9.3

### Development Tooling

- **ESLint**: Migrated from JSON config (.eslintrc.json) to flat config (eslint.config.js)
- **ESLint**: Upgraded to 9.37.0
- **Prettier**: Updated to 3.6.2
- **Husky**: Updated to 9.1.7
- **lint-staged**: Updated to 16.2.4

### Build & Package Management

- Added **pnpm** support (pnpm@10.0.0 as packageManager)
- Added pnpm-lock.yaml for reproducible builds
- Maintained backward compatibility with yarn

### Configuration Updates

- Updated TypeScript configuration for better type checking
- Updated Next.js configuration for version 15.x compatibility
- Updated ESLint configuration to use flat config format

## Breaking Changes

None expected for end users. The website functionality remains the same.

## Migration Notes

For developers:

- You can now use `pnpm` for package management
- ESLint configuration has moved from `.eslintrc.json` to `eslint.config.js`
- If you encounter any issues, ensure you're using Node.js 18.x or later

## How to Create the Release

1. **Merge this PR** to the master branch
2. **Create a GitHub Release**:
   - Go to: https://github.com/boldkhuu/boldkhuu.com/releases/new
   - Tag version: `0.3.0`
   - Target: `master`
   - Release title: `0.3.0`
   - Description: Copy the changes section above
3. **Publish the release** - This will trigger the Azure deployment workflow

## Verification

- ✅ Linting passes
- ✅ Build completes successfully
- ✅ All dependencies installed correctly
- ✅ Version bumped in package.json

## Full Changelog

See the commit history from 0.2.3 to master for detailed changes:
https://github.com/boldkhuu/boldkhuu.com/compare/0.2.3...master
