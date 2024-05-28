import globals from "globals";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-shadow": "error",
      "prefer-const": "error",
      "sort-imports": [
        "error",
        {
          "memberSyntaxSortOrder": ["all", "multiple", "single", "none"]
        }
      ],
      "import/prefer-default-export": "error",
      "arrow-body-style": ["error", "as-needed"],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          "prefer": "type-imports"
        }
      ],
      "default-param-last": "error",
      "no-console": 1,
    },
  },
  { ignores: ["dist/", "build/"] },
  ...tseslint.configs.recommended,
];
