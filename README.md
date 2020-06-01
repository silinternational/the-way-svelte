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
