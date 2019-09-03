---
title: Styling select dropdowns with svg arrows
date: "2019-09-03T07:15"
description: A cross-browser way to display an svg arrow to a select dropdown (and change the color!).
---

The CSS is below. Here's your starting point.

```css
select {
        display: inline-block;
        font-size: 15px;
        font-weight: 700;
        height: auto;
        color: #444;
        line-height: 1.1;
        padding: .6em 1.4em .5em .8em;
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
        border-radius: .5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%235E72C7%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
          linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;

   
        &::-ms-expand {
            display: none;
        }

        &:hover {
            border-color: #888;
        }
        &:focus {
            border-color: #aaa;
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222; 
            outline: none;
        }
        &:focus::-ms-value {
            background: transparent;
            color: #222;
        }

        option {
            font-weight:normal;
        }

    }

```
Changing the arrow color was odd, mainly because you have to wade through the ASCII gibberish in the background-image above. 
The key is to look for the "5E72C7" in that long ASCII URL. Simply replace those six characters with the hex code you want instead.

Here's the final result:

![Dropdown with custom SVG arrow](https://res.cloudinary.com/billpliske/image/upload/v1567554217/blog/select-dropdown.png)
