# The way I like my Svelte
The Svelte starter template I _used to_ wish existed for all of my previous projects!

> You will need [Node.js](https://nodejs.org) installed.

## Local development
Install the dependencies...
```bash
npm i
```

...then start [Rollup](https://rollupjs.org):
```bash
npm run local:dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running app _(configured to auto-reload page for any changes)_

### Running in prod mode
```bash
npm run local:prod
```

> this mode will *not* auto-reload when making changes in `src`

### Clean up
```bash
npm run clean
```

## Deployment
Build the optimized app...
```bash
npm run build:prod
```

...then deploy contents of `dist` to your host.

## Features

### Basic layout
Implemented a stacked and centered `header`, `main` and "sticky" `footer` using `flex`

### Import JSON
Installed a plugin...
```bash
npm i -D @rollup/plugin-json
```

...then added it to `rollup.config.js`
```js
import json from '@rollup/plugin-json'
...
plugins: [
  ...
  json(),
  ...
]
```
### i18n
Implemented a basic solution in `i18n/index.js`, example usage can be found in `App.svelte` for the `title`.

> TODO: The current implementation does **NOT** support placeholders (at this time).

### Import CSS
Installed a plugin...
```bash
npm i -D rollup-plugin-postcss
```

...then updated the `rollup.config.js` config
```js
import postcss from 'rollup-plugin-postcss'
...
plugins: [
  ...
  svelte({
    emitCss: true,
  }),

  postcss({
    extract: true,
  }),
  ...
]
```
...and then tweaked some code a little, find example usage in `main.js`

### Routing
Installed a plugin...
```bash
npm i -D @roxi/routify
```

...then updated the `rollup.config.js` config
```js
import routify from '@roxi/routify/plugins/rollup'
...
plugins: [
  ...
  routify({}),
  ...
]
```

...and then added `--single` to the `"serve"` scripts in `package.json` to deal with URL Rewriting
> ⚠️ URL-rewrite configs may be required on your host to ensure all requests are going through `index.html`, see https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html#redirects-for-single-page-web-apps-spa for an example on AWS.

...and then refactored the directory structure in accordance with Routify's convention.

### Environment variables
Installed a plugin...
```bash
npm i -D rollup-plugin-dotenv
```

...then updated the `rollup.config.js` config
```js
import { dotenv } from 'rollup-plugin-dotenv'
...
plugins: [
  ...
  dotenv(),
  ...
]
```
...then added vars to a `.env` file in the project root, see `pages/env.svelte` for example usage.
> `.gitignore` was updated to ensure `.env` never gets committed since it might hold secret keys.  The correspoding `.env.example` is meant to hold supported vars but not necessarily the values unless a default value is not a secret.

### Google analytics
Implemented a custom solution in `analytics/index.js`
Example usage in `pages/_fallback.svelte`
> `.env` would need a real analytics id to work obviously

### SASS
Installed some plugins...
```bash
npm i -D svelte-preprocess sass
```

...then updated the `rollup.config.js` config
```js
import autoPreprocess from 'svelte-preprocess'
...
plugins: [
  svelte({
    ...
    preprocess: autoPreprocess(),
    ...
  }),
  ...
]
```

Example usage in `pages/sass.svelte`

### Typescript
#### Inside .svelte files only
Installed some plugins...
```bash
npm i -D svelte-preprocess typescript
```

...then updated the `rollup.config.js` config
```js
import autoPreprocess from 'svelte-preprocess'
...
plugins: [
  svelte({
    ...
    preprocess: autoPreprocess(),
    ...
  }),
  ...
]
```

Example usage in `pages/index.svelte`

#### Inside the project (excluding .svelte files)
> TODO: Add support for typescript inside any `.ts` or `.js` files within the project.

### Backend
Implemented a custom solution in `data/index.js`

Updated `.env` with an `API_HOST`

Example usage in `pages/backend.svelte`

### Error handling
Implemented a custom solution comprised of `error/index.js` & `components/Error.svelte`

Example usage in `pages/errorhandling.svelte`, `data/index.js`, `components/AppHeader.svelte`

### Progress indicator
Implemented a custom solution in `components/progress`

Example usage in `pages/progress.svelte`, `data/index.js`, `components/AppHeader.svelte`

### Cache-bust bundled assets <span style="color: red">(deprecated)</span>

> <span style="color: red">**ALERT:**</span> with the introduction of a service worker this is not needed anymore because assets will automatically be revved/managed by the service worker via client's browser cache storage.

Installed a plugin...
```bash
npm i -D rollup-plugin-generate-html-template
```
> NOTE: currently using a forked version so bundled css gets cache-busted TODO: needs to be updated when PR's are merged

...then updated the `rollup.config.js` config
```js
import htmlTemplate from 'rollup-plugin-generate-html-template'
...
export default {
	input: 'src/main.js',
	output: {
		file: `dist/bundle.${Date.now()}.js`, // cache bust
...
  plugins: [
    ...
		// injects bundled assets into distributable index.html, needed to do this at build time for cache busting
    htmlTemplate({
      template: 'src/index.html',
    }),
    ...
```
...also updated the project structure slightly and made the corresponding tweaks to npm scripts in `package.json`

### Service worker & PWA
Installed a plugin...
```bash
npm i -D rollup-plugin-workbox
```

... then updated the `rollup.config.js` config
```js
import { generateSW } from 'rollup-plugin-workbox'
...
export default {
  plugins: [
    ...
    generateSW({
			globDirectory: 'dist',
			globPatterns: ['*.{css,html,js,json,png}'],
			navigateFallback: 'index.html',
			swDest: 'dist/service-worker.js',
		}),
    ...
  ]
```

... then added a `manifest.json` and some favicons in `dist/favicons`

... then tweaked `dist/index.html` to register the service worker and link in the favicons/manifest.
```html
<head>
  ...
	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel="manifest" href="/manifest.json">
  ...
</head>

<body>
  ...
  <script>
    'serviceWorker' in navigator && window.addEventListener('load', navigator.serviceWorker.register('/service-worker.js'))
  </script>
  ...
</body>

```

> NOTE: removed previous approach to cache-busting assets since workbox's service worker already manages all of that.

#### Refs
* https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
* https://developers.google.com/web/tools/workbox


#### Local HTTPS
1. install https://github.com/FiloSottile/mkcert (`brew install mkcert` for macOS)
1. `mkcert -install`
1. `mkcert -key-file key.pem -cert-file cert.pem localhost`

...then add `serve:https` where desired in the `package.json`, e.g., `"local:dev": "run-p -l build:dev serve:http serve:https"` (app can then be run at http://localhost:8080 and https://localhost:8443 after doing this)

> NOTE: can't test the installability of the app from your phone on the same network because the cert that enables the required https doesn't have an certificate authority on the phone, only on your dev machine, however an `ngrok` approach should still be an option.

#### Google Analytics (offline)
updated the `rollup.config.js` config
```js
    generateSW({
      ...
			offlineGoogleAnalytics: true,
      ...
		}),
```

#### Backend data (offline)
> TODO:

#### Notifications
> TODO:

### Authentication
Implemented a basic "Bearer token" implementation in `authn` module.  Example usage in `pages/login.svelte`,`pages/home.svelte` and `pages/logged-out.svelte`.  Simple `401` handling implemented in `data/index.js`.

### Material Design Components (MDC)
Installed the material design web components...
```bash
npm i -D material-components-web
```

...then updated the `rollup.config.js` config so the MDC styles would be found
```js
...
  postcss({
    ...
    use: {
      sass: {
        includePaths: ['node_modules']
      }
    },
  }),
```

...then established a pattern in `components/mdc` for using and wrapping MDC

Example usage in `pages/mdc.svelte`

### TODO
- [ ] test
- [ ] mobile view
- [ ] nav menu (with hamburger on mobile)
- [ ] Dockerize
