/** @type {import("prettier").Config} */

const config = {
  tabWidth: 2,
  printWidth: 120,
  endOfLine: "auto",
  trailingComma: "es5",
  arrowParens: "avoid",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
