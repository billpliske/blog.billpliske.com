---
title: Serve local dev site to view on phone
date: "2021-08-12T11:08"
description: Trying to set up localhost and wifi IPs are a pain. When you wanrt to view you dev site on your phone, there's an easier way.
---

This one has driven me crazy for years. Turns out, there are a lot of free solutions to this problem.
The one I'm using now is called <a href="[/launchings-domains-on-netlify](https://localhost.run/docs/)">**localhost.run**</a>.

### Three steps

1. Open a terminal tab, and run your project on localhost. Let's say you're going with **localhost:5000**.
2. In a separate terminal tab, run this command: **`ssh -R 80:localhost:5000 localhost.run`**
3. Done hosting for the moment? Remember to kill that ssh process with a **`Ctrl + c`**.

