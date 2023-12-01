# 🎄 Advent of Code 2023 - TDD JavaScript 🌟

Welcome to **AdventOfTDD_JS**! 🚀 Get ready to dive into a winter wonderland of coding puzzles with the Advent of Code 2023. This repo is your sleigh ride through the fascinating world of JavaScript and Test-Driven Development (TDD). 🎅🏻❄️

The magic template this repo is based on can be found [here](https://github.com/nlewis84/AdventOfTDD_JS).

### 📚 Prerequisites

- [Node 20](https://nodejs.org) 🎁
- [yarn](https://yarnpkg.com) 🧶
- [VSCode](https://code.visualstudio.com) (Preferred) 🖥️

## 🚀 Getting Started with the Template

Build the project and pull down package dependencies by running `yarn` at the root of the Template.

This Template is organized into two folders: `src` and `tests`.

- `src`: Your stage for creating dazzling creations 🌈
- `tests`: The arena to test your creations 🧪

Note: This setup is not for web or mobile projects, but rather a playground for your JavaScript quests.

### 🔍 Inside `tests` Folder

Here, tests are grouped by type. Currently, it's set up for `unit` tests, but feel free to add `e2e` or `integration` tests. Organize these tests under `unit` to mirror the `src` structure.

Both `jest` and `vitest` are configured for your testing pleasure. Choose your champion and begin the battle against bugs! ⚔️

## 🎁 Creating and Testing a Simple "Hello World" Program with Jest

1. **Craft the "Hello World" Code:**

   - Open `src/helloWorld.js` and let these lines of code bring joy:

     ```javascript
     function helloWorld() {
       return "Hello World";
     }

     module.exports = helloWorld;
     ```

2. **Weave the Test for "Hello World":**

   - Open `tests/unit/helloWorld.test.js` and test your magic:

     ```javascript
     const helloWorld = require("../../src/helloWorld");

     test("says hello", () => {
       expect(helloWorld()).toBe("Hello World");
     });
     ```

3. **Unleash the Tests:**

   - Run them with the mighty `yarn jest`.
   - This will evoke all the test spirits in your realm.

4. **Behold the "Hello World" Program:**
   - Optionally, run it directly with Node.js:
   - Cast `node src/helloWorld.js` into your terminal.

## 🧙‍♂️ Available Scripts

Within this enchanted project directory, you can run:

### `yarn jest`

- Summons all jest tests. 🧪

### `yarn jest:unit`

- Calls forth jest tests under the `unit` folder. 📚

### `yarn vitest`

- Evokes all the vitest tests. 🌌

### `yarn vitest:unit`

- Conjures vitest tests under the `unit` folder. 🔮

### `yarn test:all`

- A grand incantation to run all jest and vitest tests. 🎩

### `yarn format`

- Enchants your code with [prettier](https://prettier.io/) formatting. ✨

### `yarn lint`

- Cleanses your code using the powers of [ESLint](https://eslint.org/). 🧹

Embark on your festive coding journey with AdventOfTDD_JS and unwrap the joy of problem-solving every day! Let's code, test, and celebrate the season of coding! 🌟🎄🚀
