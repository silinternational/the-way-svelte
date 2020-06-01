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
- [ ] import css
- [ ] import json
- [ ] i18n (custom implementation)
  - [ ] placeholder support
- [ ] routing
  - [ ] external pkg
  - [ ] configs
- [ ] .env vars
- [ ] Google analytics
- [ ] sass in `.svelte` files
  - [ ] `@use`
  - [ ] `@include`
  - [ ] import scss (within `.js` files)
- [ ] MDC
- [ ] test
- [ ] prod deployable
  - [ ] optimized `build`
  - [ ] cache busted assets
- [ ] backend
  - [ ] Bearer token api calls
  - [ ] progress indication for api calls
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
