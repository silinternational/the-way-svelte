<!-- https://material.io/develop/web/components/buttons -->
<script context="module">
import './_index.scss'
</script>

<script>
import { MDCRipple } from '@material/ripple'
import { onMount } from 'svelte'

export let disabled = false
export let prependIcon = undefined
export let appendIcon = undefined
let classes = ''
export {classes as class}

let element = {}
onMount(() => {
  const ripple = new MDCRipple(element)
  return () => ripple.destroy()
})
</script>

<button class="mdc-button mdc-button--raised {classes}" {disabled} on:click bind:this={element}>
  <div class="mdc-button__ripple" />
  
  {#if prependIcon}
    <i class="material-icons mdc-button__icon" aria-hidden="true">{prependIcon}</i>
  {/if}
  
  <span class="mdc-button__label"><slot /></span>
  
  {#if appendIcon}
    <i class="material-icons mdc-button__icon" aria-hidden="true">{appendIcon}</i>
  {/if}
</button>
