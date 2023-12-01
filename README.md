# Advent of Code 2023 - TDD Javascript

Advent of Code 2023 is a yearly event where you solve a series of programming puzzles. This is the repo where I will be storing my solutions. The template this repo is based on is [here]().

### Prerequisites

- [Node 20](https://nodejs.org)
- [yarn](https://yarnpkg.com)
- [VSCode](https://code.visualstudio.com) (Preferred)

# Getting Started with the template

Make sure to build the project and pull down package dependencies by running `yarn` under the root of the Template.

This Template is separated into two folders `src` and `tests`.
`src` will be for any features you create and `tests` is where you'll be testing against them. This isn't set up to be a web or mobile project, but it will mimic a similar project structure.

The `tests` folder is separated even further. It has different kinds of tests grouped together. Only `unit` type tests are there at the moment but `e2e` or `integration` tests can be added as well. Notice how the tests are under `unit/features`. For organization, these tests should match the folder structure as they do under `src`.

This Template is already configured to work with both `jest` and `vitest` so feel free to pick your favorite and start testing.

## Creating and Testing a Simple "Hello World" Program with Jest

1. **Create a New Feature File:**
   - First, create a new JavaScript file in the `src` folder. For example, let's create a simple "Hello World" program.
   - Run the following command in your terminal to create the file:
     ```bash
     touch src/helloWorld.js
     ```

2. **Write the "Hello World" Code:**
   - Open `src/helloWorld.js` in your editor and add the following code:
     ```javascript
     function helloWorld() {
       return 'Hello World';
     }

     module.exports = helloWorld;
     ```

3. **Create a Test File for the Feature:**
   - Next, create a test file in the `tests/unit` folder.
   - Ensure the directory exists and create the test file with these commands:
     ```bash
     mkdir -p tests/unit
     touch tests/unit/helloWorld.test.js
     ```

4. **Write the Test for "Hello World":**
   - Open `tests/unit/helloWorld.test.js` in your editor and add the following test code:
     ```javascript
     const helloWorld = require('../../src/helloWorld');

     test('says hello', () => {
       expect(helloWorld()).toBe('Hello World');
     });
     ```

5. **Run the Tests:**
   - To run the tests, use the Jest testing framework with the command `yarn jest`.
   - This command will run all test files in your project, including the new test for your "Hello World" program.

6. **Run the "Hello World" Program:**
   - Optionally, you can run the "Hello World" program directly using Node.js.
   - Run `node src/helloWorld.js` in the terminal. You might need to modify the `helloWorld.js` file to log the output if you want to see it in the console.

## Available Scripts

In the project directory, you can run:

### `yarn jest`

Runs all the jest tests.

### `yarn jest:unit`

Runs all jest tests under the `unit` folder.

### `yarn vitest`

Runs all the vitest tests.

### `yarn vitest:unit`

Runs all the vitests tests under the `unit` folder.

### `yarn test:all`

Runs all jest and vitest tests.

### `yarn format`

 - Format all the files in the project using [prettier](https://prettier.io/) 
 - Targets all files, except those in noted in the `.prettierignore` file
 - Applies the formatting rules in the `.prettierrc` file

### `yarn lint`

 - Lints all the files in the project using [ESLint](https://eslint.org/)
 - It targets all files, except those in noted in the `.eslintignore` file
 - Applies the linting rules in the `.eslintrc` file
 - Includes a caching mechanism to speed up subsequent lint runs
     - Stores the cache in the `./node_modules/.cache/eslint` directory.