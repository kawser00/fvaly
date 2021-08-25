# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run commands

### Eslint initialization

`npx eslint --init`

> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> React
> Does your project use TypeScript?
> browser, node
> Use a popular style guide
> Standard: https://github.com/standard/standard
> What format do you want your config file to be in? - JSON

"rules": {
"react/react-in-jsx-scope": "off",
"no-use-before-define": "off",
"@typescript-eslint/no-use-before-define": "error",
}

#### Auto fix

- See warning and auto fix - `npx eslint '**/*{.ts,.tsx}' --fix`
- add into scripts -
  `"lint:fix": "npx eslint **/*{.ts,.tsx} --fix"`

### Prettier (for code format)

#### Install

npx - `npm install --save-dev --save-exact prettier` or yarn - `yarn add --dev --exact prettier`

#### Add rules in prettier

create .prettierrc file in src folder and add-
{
"tabWidth": 2,
"semicolon": true,
"singleQuote": true
}

#### Ignore files

create .prettierignore in src folder and add -
.vscode-test/
out/
dist/
test-fixtures/
node_modules/
package.json

#### Ignore files by running command

`npx prettier --write . '!**/*.{json}'`
if prettier is install globally then use `prettier --write . '!**/*.{json}'`

#### Avoid conflict prettier with eslint

go to - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
run - `npm install --save-dev eslint-config-prettier`
goto .eslintrc.json file and add "prettier" in to the extends-
"extends": [
"plugin:react/recommended",
"standard",
"prettier"
],

### Pre-commit Hook Linting Automation (before git commit, will fix warning automatically)

run - `npx mrm@2 lint-staged`
change lint-staged in package.json file-

"lint-staged": {
"_{.tsx,.ts}": "npx eslint '\*\*/_{.ts,.tsx}' --fix",
"\*.{ts,tsx,css,md}": "npx prettier --write"
}
