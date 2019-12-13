---
title: Simple Dokku workflow with Digital Ocean
date: "2019-12-09T18:19"
description: Setting things up from scratch, and making use of subdomains for tidier future apps
---

This tutorial assumes you already have a repo ready to go locally. In my case, that's like a Node app. I decided that while I like Netlify for my front-end apps, I wanted something less expensive than Heroku for my back-end apps. Typically, I'm running things like Graphql endpoints — APIs for my client to hit.

### Basic steps
1. Create droplet on DO, choosing dokku from the Marketplace. I'd recommend the $5 a month setting.
2. Before creating Droplet, give your Dokku name something shorter/better than the long one they give you by default.
3. After hitting OK/Create ... wait a bit, then go to the main Digital Ocean IP/URL. After hitting OK, it takes you to docs page.
4. Now you need to SSH in with root. `ssh root@your_server_ip`
6. After SSH'ing in, create your first app in Dokku (replace appname with yours) `dokku apps:create appname`
5. Create a new terminal tab, and CD to your local Node app location and create a git remote: `git remote add dokku dokku@<droplet-ip>:appname`
6. I'd like all of my backends to have names like api.domain1.com, and api.domain2.com. I have some of my domains on Dreamhost, so let's create subdomains for each backend server.
7. In Dreamhost (or whatever you have), Add a new A record for that domain, naming it  api.domainname.com, with a path of your Digital Ocean IP address. That'll take up to a couple of hours to propagate.
8. Back in Dokku CLI in terminal, add the new subdomain: `dokku domains:add appname api.domainname.com`  (I usually make my appname the same as my domainname)
9. Back to your repo tab, and do your normal git commands, adding and committing. Ending with a `git push dokku master`
10. That'll bring up a lot of terminal logging as it goes through the process of creating/updating your Dokku app.


**Quick note:** *Ensure the safety of your droplet, by removing root login and creating a new user who can login via SSH. Tutorial: https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04*


### Setting ENV variables?
- `dokku config:set appname DATABASE_URL='mongodb://username:password.mlab.com..etc'`  (you need the quotes!)

### Setting PORT in Node app?
- You need the environmental port variable. Like this
```app.listen(process.env.PORT || 4000,  () => {
    console.log('now listening for requests on port 4000');
});```

### What’s up? Things aren’t working
- `dokku logs appname` (this is **SUPER** helpful)
- `dokku logs appname -t`  (continually streams logs)
- `dokku logs:failed appname`  (failed deploy logs for any app)

### Good commands to know
- `dokku apps:list` (lists all apps)
- `dokku ssh-keys:list`  (lists all ssh keys)
- `dokku plugin:list` (lists all plugins)
- `dokku plugin:install https://github.com/dokku/dokku-postgres.git` (installing a plugin)
- `dokku plugin:uninstall postgres` (uninstall a plugin)

### Let’s Encrypt
1. `dokku plugin:update letsencrypt`
2. `dokku config:set --no-restart appname DOKKU_LETSENCRYPT_EMAIL=your-email-address`
3. `dokku letsencrypt appname`
4. `dokku letsencrypt:cron-job --add`
