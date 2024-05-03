# NODE VERSION

- The project uses Node 20.12.2 version, so please ensure you use the same as a good practice.

# INSTALLING THE DEPENDENCIES

- For npm, use the command "npm install" or "npm i" to install the dependencies.
- For yarn, use the command "yarn install" or "yarn i" or "yarn".

# RUNNING THE CODE

- After you have successfully installed the dependencies, run the command "npm run dev" if you are using npm or alternatively, use "yarn run dev" if you are using yarn.

# BUILDING THE PROJECT

- To build the project, use "npm run build" or alternatively you can use "yarn build" if you are using yarn.

# RUNNING THE UNIT TESTS IN JEST/REACT-TESTING LIBRARY

- For executing the unit tests, use the command "npm test" or "npm run test" to run all the unit tests.

We have also added sonarqube report to illustrate code coverage in our codebase.

# RUNNING THE LINTING TEST

- To run the eslint test, use the command "npm run lint" or alternatively use "yarn lint" if you are using yarn.

# THESE ARE ALL AUTO GENERATED PROJECT DETAILS: React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
