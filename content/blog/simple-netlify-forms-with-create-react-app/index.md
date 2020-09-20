---
title: Simple Netlify Forms with React (CRA)
date: "2020-09-20T11:14"
description: How to quickly create simple React fors with Netlify, and then send those results to an email address.
---

Forms have been a pain in my ass every since my earlier Wordpress and PHP days. Finally, after all these years, this might be the solution.

I use Netlify for a lot of my client-side apps, so this was a good fit for me.
In this example, I'm creating a **meal plan** form.

### High-level view
The steps are pretty straightforward:
1. Create a simple html form file, and save it in your `public` folder.
2. Create your React form file, making sure to follow some similar naming conventions as the first file.

### Naming conventions
Netlify lets you send form results to an email of your choice. Better yet, they will also send _specific forms_ to specific email addresses. Here's what I did:

#### Public folder form file
Since this was a meal plan form, I decided to make **mealplan** my key word. So I named my form file **`mealplan.html`**, saving it in my `public` folder. All you need in this file are the field names. This file does not actually get presented to the public, so no styling needed.

Notice that within the **form** tag, I used **`name="mealplan"`**. I'll also use this name in the actual React form.

![Public main form file](https://res.cloudinary.com/billpliske/image/upload/v1600626197/blog/forms-public-main.png)



#### React form file
The React version of the form file is the one your user sees. You'll create that however you normally do (hooks, formik, whatever), but there are two key takeaways:

1. No **handleSubmit** is needed.
2. Pay close attention to how you are filling out your **`<form>`** tag, and your outer **`<input>`** tag. You've gotta have that inital input tag.
3.
![React form file](https://res.cloudinary.com/billpliske/image/upload/v1600626197/blog/forms-react-main.png)


## On to Netlify
Assuming your submission went through ok (you'll get a success message, if so), head over to the Overview tab of your Netlify project. If you scroll down to **Recent form submissions, you should see something like this:

![Netlify form submission](https://res.cloudinary.com/billpliske/image/upload/v1600627090/blog/netlify-form-submission.png)

Click on the Form Notification, and add an email address.  Done!

![Netlify form menu](https://res.cloudinary.com/billpliske/image/upload/v1600627189/blog/form-notification-menu.png)