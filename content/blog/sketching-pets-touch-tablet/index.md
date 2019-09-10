---
title: Setting up a colorful ESLint and Prettier environment
date: "2019-09-09T14:19"
description: Steps to setting up VSCode for Node and Create React App (CRA), to work with ESLint, Prettier, and distinctive color headers
---

### Node and ESLint

We'll start with Node.js projects, since they're the easier of the two.
For the **ESLint** and **Prettier** part, follow these steps:

1. Make sure you have a **package.json** file created. No need to install any dependencies beforehand (it works better if you don't).

2. In terminal, run `npx install-peerdeps --dev eslint-config-wesbos`. If you were using Yarn, it might ask you if you'd like to run the Yarn version of this command.

3. Open up your **package.json** file, and you should see a whole new set of dependencies.

4. Create a **.eslintrc** file at your project root. I've added the following code inside that file:

```javascript
{
  "extends": ["wesbos"],
  "parser": "babel-eslint",
  "rules": {
    "no-console": "off",
    "no-unused-vars": ["error", { "args": "none" }],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 4
      }
    ]
  }
}
```

### React and ESLint (CRA)

This one took a couple hours out of my life, so I'm making sure this blog post will save me (and others) time on the next project. Here are the steps:

1. Run your Create React App commands and create your project. For npm, its `npx create-react-app my-app`, and for yarn, its `yarn create react-app projectname`.

2. Commit what you have so far: `git add -A` then a `git commit -m "some message"`.

3. Unfortunately, you gotta **eject**: `npm run eject` or `yarn eject`.

4. In terminal run `npx install-peerdeps --dev eslint-config-wesbos`.

5. Finally, update your package.json file by replacing `"extends": "react-app"` with `"extends": "wesbos"`.

6. Create a .eslintrc file in your project root, with the same content we used above in the Node example.

### Using color for quicker development

I've found it's often better to have separate windows for your front end and backend. Certainly having a working ESLint/Prettier environment steered me to that conclusion. So being able to quickly see which VS Code window is for Node, and which one is for React was very helpful.

Since the **Node.js** logo is green, I went with that color in my header. Here's how it looks:

![Node.js project in VS Code](https://res.cloudinary.com/billpliske/image/upload/v1568073860/blog/node-green.png)

To make this happen, I did the following:

1. Created a `.vscode` folder at the root of my server repo.
2. Inside it, I created a `settings.json` file, which contained the following code (you'll do the same folder and file approach in your React project):

```json
{
    "workbench.colorCustomizations": {
        "titleBar.activeForeground": "#FFF",
        "titleBar.inactiveForeground": "#FFFFFFCC",
        "titleBar.activeBackground": "#3F8B2E",
        "titleBar.inactiveBackground": "#3F8B2ECC"
    }
}
```

This made the title bar text white, and the background green.
Since React's logo is primarily blue, I'm using that color for my front end header.

Here's how it looks in **React**:

![React project in VS Code](https://res.cloudinary.com/billpliske/image/upload/v1568073860/blog/react-blue.png)

Now when I hover my mouse over the VS Code icon in my Taskbar, at a glance I can see which project I need to click on. In this instance, I have (L-R) Node backend, Gatsby blog, React front end.

![Colors in taskbar](https://res.cloudinary.com/billpliske/image/upload/v1568073860/blog/taskbar.png)

It's subtle, but it saves me time.
