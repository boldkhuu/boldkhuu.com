# Next.js Upgrade Migration Guide

## Upgraded from Next.js 11.1.3 to 15.5.5

### Major Changes Made

#### 1. **Dependencies Updated**

- **Next.js**: 11.1.3 → 15.5.5
- **React**: 17.0.2 → 19.2.0
- **React DOM**: 17.0.2 → 19.2.0
- **TypeScript**: 4.4.4 → 5.6.0
- **ESLint**: 7 → 8.57.0
- **Other dev dependencies** updated to latest compatible versions

#### 2. **TypeScript Configuration**

- Updated `tsconfig.json` with new recommended settings
- Changed `moduleResolution` from "node" to "bundler"
- Added Next.js plugin configuration
- Added path aliases for better imports
- Added `.next/types/**/*.ts` to includes

#### 3. **Code Changes**

- **Layout.tsx**: Added explicit `children?: React.ReactNode` to props interface
  - React 19 no longer automatically includes children in React.FC
- **\_app.tsx**: Changed `import { AppProps }` to `import type { AppProps }`

#### 4. **Configuration Files**

- **next.config.js**: Created with modern configuration
  - Updated turbo configuration (moved from experimental.turbo to turbopack)
  - Added ESLint and TypeScript build settings

### Breaking Changes to Be Aware Of

1. **React 19 Changes**:
   - `children` prop is no longer automatically included in React.FC
   - Some React APIs have changed (check React 19 migration guide)

2. **Next.js 15 Changes**:
   - `next lint` is deprecated (migrate to ESLint CLI if needed)
   - Some experimental features have been moved or deprecated
   - New caching behavior and performance improvements

3. **TypeScript 5 Changes**:
   - Stricter type checking
   - Better ES module support
   - New bundler module resolution

### Verification Steps Completed

✅ **Build**: `pnpm run build` - Successful  
✅ **Development**: `pnpm run dev` - Starts properly  
✅ **Linting**: `pnpm run lint` - No errors  
✅ **Dependencies**: All installed without conflicts

### Recommendations

1. **Test thoroughly**: Run your app in development and production modes
2. **Update CI/CD**: Ensure your deployment pipeline works with the new versions
3. **Consider migrating to ESLint CLI**: The `next lint` command is deprecated
4. **Review React 19 features**: Take advantage of new React features like Server Components
5. **Update any custom components**: Check for React 19 compatibility

### Next Steps

1. Test all your application features thoroughly
2. Update any custom hooks or components that might use deprecated React APIs
3. Consider using new Next.js 15 features like improved caching and performance optimizations
4. Update your documentation and team about the new versions

All major compatibility issues have been resolved and your application should work seamlessly with the new versions.
