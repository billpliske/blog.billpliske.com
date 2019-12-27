---
title: Port already in use error message
date: "2019-12-26T20:24"
description: When you accidentally hit the trash can icon for your VS Code terminal ... and now port 4000 is 'already in use'
---

Here's the error developers often get. I found the solution via this [StackOverflow link](https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt). BUt for Windows WSL2 users, like me, the solution was this handy Linux command (below).

### First, the error
`Error: listen EADDRINUSE: address already in use :::4000`

### Then, the fix
1. `lsof -i tcp:4000`  (replace 4000 with whatever port you were using)
2. When I did that, I got back the following:
```
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node    2457 bill   23u  IPv6  20672      0t0  TCP *:4000 (LISTEN)
```
3. Last step is to **kill the PID** - in this case, **2457**.
4. `sudo kill 2457`
5. Problem fixed!