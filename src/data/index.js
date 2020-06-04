export async function CREATE(url, body) { return await customFetch('post'  , url, body) }
export async function GET   (url      ) { return await customFetch('get'   , url      ) }
export async function UPDATE(url, body) { return await customFetch('put'   , url, body) }
export async function DELETE(url      ) { return await customFetch('delete', url      ) }

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options
async function customFetch(method, url, body) {
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

      method,
      // credentials: 'include', // ensures the response back from the api will be allowed to "set-cookie"
      headers,
      body,
    })
  return await response.json()
}

export const upload = async formData => await customFetch('post', 'post', formData)