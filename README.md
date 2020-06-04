# The way I like my Svelte
*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Local development
Install the dependencies...
```bash
npm i
```

...then start [Rollup](https://rollupjs.org):
```bash
npm run local:dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running app _(configured to auto-reload page for any changes)_

> By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

### Running in prod mode
```bash
npm run local:prod
```

> this mode will not auto-reload when making changes in `src`

### Clean up
```bash
npm run clean
```

## Deployment
Build the optimized app...
```bash
npm run build:prod
```

...then deploy contents of `public` to your host.

## Features
These are the features already implemented, configured and ready to be used.

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

> TODO: The current implementation does **NOT** currently support placeholders.

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
npm i -D @sveltech/routify
```

...then updated the `rollup.config.js` config
```js
import { routify } from '@sveltech/routify'
...
plugins: [
  ...
  routify({}),
  ...
]
```

...and then added `--single` to the `"serve"` script in `package.json` to deal with URL Rewriting
```
    "serve": "sirv public --dev --single"
```
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

### Backend
Implemented a custom solution in `data/index.js`

Update `.env` with a `BASE_API_URL`

Example usage in `pages/backend.svelte`

### TODO
- [ ] MDC
- [ ] test
- [ ] prod deployable
  - [ ] optimized `build`
  - [ ] cache busted assets
- [ ] authn
  - [ ] Bearer token api calls
- [ ] progress indicator
- [ ] error handling
  - [ ] client-side runtime, e.g., `x.nonExistent() => undefined (not a function)`
  - [ ] client-side validation, e.g., end date must not be before start date
  - [ ] HTTP non-200, i.e., handled with messages (keyed for i18n)
  - [ ] HTTP non-200, e.g., backend call with no `try-catch`
- [ ] local storage
- [ ] service worker
  - [ ] cached/offline for app assets
  - [ ] cached/offline for backend data
  - [ ] notifications
