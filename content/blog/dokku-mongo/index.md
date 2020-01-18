---
title: Working with Mongo and Dokku
date: "2020-01-17T19:01"
description: Setting up Mongo to work with your Dokku app, and connect to it from the outside
---

This tutorial assumes you already have Dokku installed on Digital Ocean, and already have an app up and running.

### Installation

1. `dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo`
2. Is plugin installed? `dokku plugin:list`
3. Create a database: `dokku mongo:create budgetdb`
4. Get connection info on db: `dokku mongo:info budgetdb`
5. Connect db to an app called budget: `dokku mongo:link budgetdb budget`
6. That will restart the container, and also create a new var called MONGO_URL. Get MONGO_URL value here: `dokku config budget`
7. Add that URL and ENV_VAR to your Node app locally, also making it the main ENV_VAR you're using.
8. Commit and push changes to your dokku remote.
9. You should now be using that new DB. Double-check that you're connected: `dokku logs budget -t`

### Local issues

-   If your previous Mongo URL was through mLab, connecting to it via localhost:4000/graphql was easy. You can't do that via dokku/mongo. (It's pretty locked down, but maybe there's a way).
-   However, if you connect via a localhost React app, it hits the DB just fine.

### One local solution

-   Using an app, like Robo3T seems to solve the issue.
-   But first, you need to expose some ports to the outside. Do this by entering `dokku mongo:expose budgetdb`
-   This will return some valid ports to try.
-   Here are the two Robo3T screens:

![Robo3T - Connection tab](https://res.cloudinary.com/billpliske/image/upload/v1579315191/blog/robo3t-1.png)

![Robo3T - Authentication tab](https://res.cloudinary.com/billpliske/image/upload/v1579315191/blog/robo3t-2.png)
