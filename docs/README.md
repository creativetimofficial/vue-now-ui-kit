## Introduction

Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with the Bootstrap CDN and a template starter page.

### Quick Start

1. Make sure you have (Node.js)[https://nodejs.org/en/] installed.
2. Go to project folder.
3. Run `npm install` or `yarn install`
4. Run `npm run serve` or `yarn serve` to start local development server

This template was built with [Vue CLI 3](https://github.com/vuejs/vue-cli). For more details please check out

Vue CLI 3 docs.

Once you have downloaded/forked the archive and opened it, you will find a couple of folders with code and configuration files.
Let's take it one by one. The first folder we want to look at is the [base folder structure]()

### Dependencies

```json
"bootstrap": "4.1.1",
"element-ui": "^2.4.6",
"nouislider": "^11.1.0",
"vue": "^2.5.17",
"vue-lazyload": "^1.2.6",
"vue-router": "^3.0.1",
"vue2-transitions": "^0.2.3"
```


### Starter template

We build a starter page so you can get started really quickly.
By default the archive will open up the presentation pages.
To open the starter page, go to `main.js` and change line **3**

```{3}js
import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";

```

This will use a fresh `router` with only one page located in `src/pages/starter`.
