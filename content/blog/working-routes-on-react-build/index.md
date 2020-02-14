---
title: Working routes on React build process
date: "2020-02-13T18:05"
description: Routes breaking after a React build using react-snap? Here are three file updates that remedy this problem.
---

I've built a number of Create React App projects, and many of them made use of React Router. That said, almost all of those projects were deployed to something like Netlify, where your build and deploy processes are taken care of for you. But when trying a simple `yarn build` and testing the files on a server, you'll likely find your routes aren't working.

In addition to developing locally, I needed to move the files created from a build command over to a server **subfolder** that employees could access. The issue I had was the first page launched fine, but _all other routes were broken._

**Here's what I did to fix it.**

### The three main packages (CRA installs many more)

-   react: 16
-   react-router-dom: 5.1.2
-   react-snap: 1.23

    `yarn add -D react-snap`


A quick breakdown of the three files that need updating.

### package.json

-   When installing react-snap, one the main things you'll want to do is tweak your **package.json** file to allow **snap** to integrate with your build process. So in your **scripts** area, you'll want to add:

    `"postbuild": "react-snap"`

- Like I said above, all my routes were broken, **_mainly because they no longer recognized the subfolder as the main root level of the site_**. We'll call that subfolder "employees".
- To help fix this issue, I added the **homepage** item near the top of package.json. The line looks like this:

    `"homepage": "/employees/"`

    Note the forward-slashes before and after.


### index.html
- Only one addition to this file, `<base>`, and it gets added to the the `<head>` area. The way I understand it, this `%PUBLIC_URL%` variable **(below)** gets replaced by your **homepage** value you put in package.json.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="%PUBLIC_URL%/">
        <meta charset="utf-8">
        ...
```


### index.js
Below is my index.js file. Two main items to point out here:
1. The use of **hydrate** and **render** (needed by react-snap).
2. The addition of the **basename** prop in the hydrate method, which helps get the subfolder recognized as your root path.

```javascript
import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './DefaultStyles';

const rootElement = document.getElementById("root");


if (rootElement.hasChildNodes()) {
    hydrate(<BrowserRouter basename="/employee/">
        <GlobalStyle />
        <App />
    </BrowserRouter>, rootElement);
} else {
    render(<BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>, rootElement);
}
```

