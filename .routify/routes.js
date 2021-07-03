
/**
 * @roxi/routify 2.18.0
 * File generated Sat Jul 03 2021 18:36:44 GMT-0400 (Eastern Daylight Time)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-07-03T22:36:44.492Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "backend.svelte",
      "filepath": "/backend.svelte",
      "name": "backend",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/backend.svelte",
      "importPath": "../src/pages/backend.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/backend",
      "id": "_backend",
      "component": () => import('../src/pages/backend.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "env.svelte",
      "filepath": "/env.svelte",
      "name": "env",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/env.svelte",
      "importPath": "../src/pages/env.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/env",
      "id": "_env",
      "component": () => import('../src/pages/env.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "errorhandling.svelte",
      "filepath": "/errorhandling.svelte",
      "name": "errorhandling",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/errorhandling.svelte",
      "importPath": "../src/pages/errorhandling.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/errorhandling",
      "id": "_errorhandling",
      "component": () => import('../src/pages/errorhandling.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "home.svelte",
      "filepath": "/home.svelte",
      "name": "home",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/home.svelte",
      "importPath": "../src/pages/home.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/home",
      "id": "_home",
      "component": () => import('../src/pages/home.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "logged-out.svelte",
      "filepath": "/logged-out.svelte",
      "name": "logged-out",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/logged-out.svelte",
      "importPath": "../src/pages/logged-out.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/logged-out",
      "id": "_loggedOut",
      "component": () => import('../src/pages/logged-out.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "login.svelte",
      "filepath": "/login.svelte",
      "name": "login",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/login.svelte",
      "importPath": "../src/pages/login.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "mdc.svelte",
      "filepath": "/mdc.svelte",
      "name": "mdc",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/mdc.svelte",
      "importPath": "../src/pages/mdc.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/mdc",
      "id": "_mdc",
      "component": () => import('../src/pages/mdc.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "param",
      "filepath": "/param",
      "name": "param",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/param",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[number].svelte",
          "filepath": "/param/[number].svelte",
          "name": "[number]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/param/[number].svelte",
          "importPath": "../src/pages/param/[number].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/param/:number",
          "id": "_param__number",
          "component": () => import('../src/pages/param/[number].svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/param"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "progress.svelte",
      "filepath": "/progress.svelte",
      "name": "progress",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/progress.svelte",
      "importPath": "../src/pages/progress.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/progress",
      "id": "_progress",
      "component": () => import('../src/pages/progress.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "qs.svelte",
      "filepath": "/qs.svelte",
      "name": "qs",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/qs.svelte",
      "importPath": "../src/pages/qs.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/qs",
      "id": "_qs",
      "component": () => import('../src/pages/qs.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "sass.svelte",
      "filepath": "/sass.svelte",
      "name": "sass",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/mwilson/projects/gtis/the-way-svelte/src/pages/sass.svelte",
      "importPath": "../src/pages/sass.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/sass",
      "id": "_sass",
      "component": () => import('../src/pages/sass.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

