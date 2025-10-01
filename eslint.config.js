// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default [
  // Базовые рекомендуемые правила
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React конфигурация
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Основные правила
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      import: importPlugin,
      prettier,
    },
    rules: {
      // Общие правила
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",

      // Import правила
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // TypeScript правила
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // React правила
      "react/jsx-key": "error",
      "react/prop-types": "off",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message:
                "Please use named imports from 'react' instead of default import.",
            },
          ],
        },
      ],
    },
  },

  // Игнорируемые файлы
  {
    ignores: ["node_modules/", "dist/", "build/", "*.config.js", "coverage/"],
  },
];
