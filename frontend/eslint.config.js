import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist", "node_modules", "app/static", "*.config.js"] },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.es2021 } },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^React$", argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },
];
