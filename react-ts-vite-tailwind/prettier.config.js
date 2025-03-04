/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  printWidth: 120,
  endOfLine: "auto",
  arrowParens: "avoid",
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "**/*.svg",
      options: { parser: "html" },
    },
  ],
};
