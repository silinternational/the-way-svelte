// docs: https://material.io/develop/web
// repo: https://github.com/material-components/material-components-web
// chat: https://discord.com/channels/259087343246508035/278684609783267328
// !! (keep an eye on this):  https://github.com/material-components/material-components-web-components
import './_index.scss'
import Button from './Button/index.svelte'

loadIcons()

export {
  Button,
}

// https://material.io/resources/icons
function loadIcons() {
  const link = document.createElement('link')

  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap'
  link.rel = 'stylesheet'
  
  document.head.appendChild(link)
}
