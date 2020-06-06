import { writable } from 'svelte/store'

export const error = writable({})
export const throwError = (message, code) => { throw {code, message} }
export const dismiss = () => set({})

// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.addEventListenererror
window.addEventListener('error', event => set(event.error))

// https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
// `reason` will be a {message, code} object if `throwError` was used.
window.onunhandledrejection = event => set(event.reason)

function set({code = 0, message = ''}) { 
  error.set({code, message}) 
}