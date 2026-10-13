import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(eslintConfigPrettier).append({
  rules: {
    eqeqeq: ["error", "always"],
    "vue/v-bind-style": ["error", "shorthand", { sameNameShorthand: "always" }],
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSAsExpression, TSTypeAssertion",
        message: "Use a declared type or validate the value instead of asserting its type.",
      },
      {
        selector: "TSAnyKeyword",
        message: "Use a specific type or validate an unknown value.",
      },
    ],
  },
});
