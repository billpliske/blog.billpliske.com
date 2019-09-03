---
title: From Bluehost (or where ever) to Dreamhost to Netlify
date: "2019-09-02T17:17"
description: Buying your domains cheaply, use Dreamhost as a central HQ, and then run your apps on Netlify.
---

I'm a sucker for a  nice-looking interface, and Dreamhost certainly looked better than Bluehost. So I made this my go-to hosting company back in 2006.

Buying ".com" domains through Dreamhost are $8.99 each, which isn't bad ... but you can find them cheaper.Speaking of cheap, Netlify is free in many cases, and it's super easy to use.

So here's the process for moving my domains to Dreamhost, and then setting them up to run with Netlify:

### Nameservers
Most hosting companies let you easily change your domain's nameservers to where ever you want. For Bluehost, I just needed to use Dreamhost's three nameservers, like so: 

![Nameservers](https://res.cloudinary.com/billpliske/image/upload/v1567470586/blog/nameservers.png)

After clicking on the green "save nameserver settings" button, the change seemed to go pretty quick ... certainly less than 30 minutes. 

### Bringing it into Dreamhost
Of course, Dreamhost wants you to buy hosting from them. The more hosting accounts, the better. So when you're trying to piggyback more domains on to your existing hosting plan? The sorta hide that stuff.

1. Even thought you **aren't** adding hosting to a domain, go to your Manage Domains page, and click on the blue button at the top, which reads "Add Hosting to a Domain / Sub-Domain".
2. Ignore the top part, and scroll all the way to the bottom, to the section that reads DNS Only.

![DNS Only](https://res.cloudinary.com/billpliske/image/upload/v1567471132/blog/dns-only.png)
3. If the nameserver change has had a chance to propagate, you should be able to type the domain in the form field, and then choose Host DNS only!.

### Updating the DNS records to point to Netlify

1. Let's start with the **main domain** — in this case, billpliske.com. I left the Name field blank, chose an A record as the type, and then pasted my free Netlify address into the Value field. Seems like it's available to Netlify within an hour or so.

![DNS Records](https://res.cloudinary.com/billpliske/image/upload/v1567471435/blog/dns-records.png)

2. Once you select Add Record Now!, it appears in the lower section. **Above:** It's the first row item under Custom DNS.

3. So what it you want a subdomain? Those are handled the same way as "www', by the way. This, time you **do** put something in the Name field. As you can see in my Custom DNS area, I had separate entries for *www*, *paintings*, and *blog*.

4. Choose CNAME as the type, and then paste in <a href="/launchings-domains-on-netlify">your Netlify URL</a> into the value field. ***Note***: Sometimes you need to put a '.' at the end of your Netlify URL. I've seen examples of it, but I've yet to notice the specific circumstances when you need it.