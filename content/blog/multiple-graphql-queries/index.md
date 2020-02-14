---
title: Multiple GraphQL queries in single component
date: "2019-12-28T12:28"
description: Yes, you can combine them, and you can wrap them. But why not take advantage of Hooks, and rename them?
---

This is a dumb one, but can be confusing at first. You're trying to do a query for something, and it works. Then, you realize you need to pull in even more data with a second query. **Error**: You've already called data. Crap.

The solution is simple. Keep using the Apollo Hooks useQuery method, and simply rename your data, error and loading variables.

### The solution

```javascript

 // THE QUERIES
  const {
      data: bothData,
      error: bothError,
      loading: bothLoading
      } = useQuery(GET_BOTH, {});

  const {
      data: totalData,
      error: totalError,
      loading: totalLoading
      } = useQuery(GET_ENTRY_TOTAL_MINUTES, {
    variables: {
      category: 'Code'
    }
  });
```
