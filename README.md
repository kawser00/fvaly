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