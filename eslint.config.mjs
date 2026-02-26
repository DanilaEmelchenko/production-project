import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import i18next from "eslint-plugin-i18next";

export default defineConfig([
  {
    ignores: ["**/build/**", "**/node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      indent: [2, 2],
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "i18next/no-literal-string": "warn",
      "react/display-name": "off",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __IS_DEV__: true,
      },
    },
  },
  ...storybook.configs["flat/recommended"],
]);
