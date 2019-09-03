---
title: Launching domains on Netlify
date: "2019-09-02T18:22"
description: This is a quick guide for launching your site on Netlify, and also adding your own custom domain.
---

If you know Github, using Netlify to make your website live is super easy.

### Six easy steps

1. Create a Netlify account, and install the Netlify CLI in your terminal, which is 
```javascript
npm install netlify-cli -g
```
2. Log in to Netlify, and click on the "**New site from Git**" button.

![Netlify - new site from Git](https://res.cloudinary.com/billpliske/image/upload/v1567475283/blog/netlify-new-site.png)

3. It'll ask you where your repo is: Github, GitLab, or Bitbucket.

![Netlify - Three Options](https://res.cloudinary.com/billpliske/image/upload/v1567475523/blog/netlify-three-options.png)

4. It'll likely ask you for access.
5. Then just choose the repo. 

![Netlify - Select a repo to launch](https://res.cloudinary.com/billpliske/image/upload/v1567475567/blog/netlify-github-repo-list.png)

6. Many of mine are straightforward React or Gatsby projects, so there's no other set up. So after clicking "Deploy site," you're pretty much good to go.

### You have a URL! (sort of)

Netlify creates a URL for you, but it's their own version. So unless you're happy with your site URL being ***narcissistic-badger-12b0e5.netlify.com***, there are a few more steps.

1. Go to your team, and select the website in need a a custom (non-Netlify) URL.
2. If you've already added your <a href="/bluehost-to-dreamhost">A record or CNAME record</a>, you're ready to move on.