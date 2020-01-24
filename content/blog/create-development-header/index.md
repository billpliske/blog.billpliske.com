---
title: Create a special 'development' header for testing
date: "2020-01-23T18:05"
description: When you have both development and production databases, sometimes it's handy to remind yourself where you are
---

While there's likely something to be said for having a solid procedure ... well, we're dealing with mine. So as I build out this budgeting app for my wife and I, my one database was a freebie from <a href="https://mlab.com/" target="new">mLab</a>.

Realizing that this **shouldn't** be the database for my live app, <a href ="https://blog.billpliske.com/dokku-mongo/">I created a second Mongo DB via Dokku</a>. So now I can use mLab while I develop and test, and then use my dokku-mongo DB on Digital Ocean as the real deal.

My developer career is littered with mistakes along the way — So I'll take any extra clues that remind myself which database I'm on while coding in React.

### The Node side

-   I had already pushed my "live" Node server to Digital Ocean via Dokku. So that was already making use of a Dokku-Mongo environmental variable.
-   **Below:** That means when I'm running my **local** node server, I'm just going to point to my mLab URL, substituted here by my `process.env.DATABASE.URL` env variable (line 16).

![node db code](https://res.cloudinary.com/billpliske/image/upload/v1579829396/blog/node-db-config.png)

### The React (client) side

-   First thing I did, was list both GraphQL endpoint paths, one for DEV, and one for PROD in my `index.js` file.
-   **Below:** So the idea, was whenever I'm about to start tweaking my React code (or running the app locally), I'd just comment out either **line 16** or **line 19**.

![dev and prod dbs](https://res.cloudinary.com/billpliske/image/upload/v1579829073/blog/dev-prod-dbs.png)

-   **Above:** I didn't want to go to the trouble of creating some Context in my `index.js` file, and certainly didn't want to pass props "old school" all the way down to my component. While I'm sure there are smarter ways, I decided to make use of the main **root** id.
-   **Above:** Checking to see if the `db` variable was equal to my local GraphQL path .... if so, add a class called "development" to that outer div React is using.
-   **Below:** You'll see I'm just calling that function on line 57.

![running setHeader()](https://res.cloudinary.com/billpliske/image/upload/v1579829802/blog/set-header.png)

-   **Below:** Then in my Home page, right above my Balances header, I create the label I want to display whenever I'm using the dev DB, using a "devlabel" class name on line 18.

![dev header home react](https://res.cloudinary.com/billpliske/image/upload/v1579830710/blog/dev-lavel-home-react.png)

-   Now to style the header. In my `index.js` file, I'm pulling in a file called `DefaultStyles.js`, which I'm using to set some overall styles, via Styled Components.
-   **Below:** You'll see I'm simply styling the component, but hiding it by default, with a `display: none`, on line 127.
-   But if that class has a parent class of "development" ... let's **show** that sucker.

![dev header css](https://res.cloudinary.com/billpliske/image/upload/v1579830458/blog/dev-header-css.png)

-   **Below:** You can just leave the local React server running to test it out. When I comment out the live GraphQL path, and uncomment my dev path, this is what I get! Simple, but a really, really nice reminder what data you're messing with.

<verticalimage-left>
    <img src="https://res.cloudinary.com/billpliske/image/upload/v1579829908/blog/dev-header.png" alt="development header in browser" />
</verticalimage-left>
