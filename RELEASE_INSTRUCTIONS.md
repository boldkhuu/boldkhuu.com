# Release 0.3.0 - Instructions

## What Has Been Done

### 1. Version Update

- Updated `package.json` version from `0.2.2` to `0.3.0`
- All linting and build tests pass successfully

### 2. Release Documentation

- Created `RELEASE_NOTES_0.3.0.md` with comprehensive changelog
- Documented all dependency upgrades and changes since version 0.2.3

### 3. Git Tag

- Created annotated git tag `0.3.0` locally
- Tag includes detailed release notes

## What You Need to Do

### Step 1: Merge the PR

Once this PR is approved and merged to `master`:

### Step 2: Create GitHub Release

1. Go to: https://github.com/boldkhuu/boldkhuu.com/releases/new
2. Fill in the form:
   - **Tag**: `0.3.0` (select "Create new tag: 0.3.0 on publish")
   - **Target**: `master`
   - **Release title**: `0.3.0`
   - **Description**: Copy from `RELEASE_NOTES_0.3.0.md` (sections: Changes Since 0.2.3)
3. Click **"Publish release"**

### Step 3: Automatic Deployment

- When you publish the release, the GitHub Action workflow (`.github/workflows/azure.yml`) will automatically trigger
- The workflow will:
  - Install dependencies
  - Build the project
  - Deploy to Azure App Service

## Alternative: Using GitHub CLI

If you have `gh` CLI installed, you can create the release from command line:

```bash
gh release create 0.3.0 \
  --title "0.3.0" \
  --notes-file RELEASE_NOTES_0.3.0.md \
  --target master
```

## Verification

After deployment, verify:

- [ ] Release appears at https://github.com/boldkhuu/boldkhuu.com/releases
- [ ] Tag `0.3.0` is visible in the repository
- [ ] Azure deployment workflow completed successfully
- [ ] Website at boldkhuu.com is running the new version

## Rollback (if needed)

If any issues occur, you can quickly rollback by:

1. Creating a new release from tag `0.2.3`
2. The Azure workflow will deploy the previous stable version

## Questions?

If you encounter any issues during the release process, please comment on this PR.
