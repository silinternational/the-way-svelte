import { throwError } from '../error'

export async function CREATE(uri, body) { return await customFetch('post'  , uri, body) }
export async function GET   (uri      ) { return await customFetch('get'   , uri      ) }
export async function UPDATE(uri, body) { return await customFetch('put'   , uri, body) }
export async function DELETE(uri      ) { return await customFetch('delete', uri      ) }

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options
async function customFetch(method, uri, body) {
  const headers = {
    'content-type': 'application/json',
  }

  // when dealing with FormData, i.e., when uploading files, allow the browser to set the request up
  // so boundary information is built properly.
  if (body instanceof FormData) {
    delete headers['content-type']
  } else {
    body = JSON.stringify(body)
  }
  
  const url = includesHost(uri) ? uri : `${process.env.API_HOST}/${uri}`
  const response = await fetch(url, {
    method,
    // credentials: 'include', // ensures the response back from the api will be allowed to "set-cookie"
    headers,
    body,
  })
  
  // reminder: does not throw exceptions for non-200 responses (https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
  if (! response.ok) {
    throwError(response.statusText, response.status)
  }

  return await response.json()
}

const includesHost = uri => uri.match(/(http[s]?:)?\/\//)

export const upload = async formData => await customFetch('post', 'post', formData)