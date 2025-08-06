import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce named exports only - no default exports
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',
      
      // No console logs in production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      
      // React hooks best practices
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Styling rules
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    },
  },
  // Allow default exports only for Next.js specific files
  {
    files: [
      'src/app/**/page.tsx',
      'src/app/**/layout.tsx',
      'src/app/**/loading.tsx',
      'src/app/**/error.tsx',
      'src/app/**/not-found.tsx',
      'src/middleware.ts',
      'src/i18n/config.ts',
      'next.config.*',
      'tailwind.config.*',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];

export default eslintConfig;
