<script>
import { error, dismiss } from '../error'

let errContainer = null

$: message = $error.message
$: errContainer && scrollIntoView(errContainer)

const scrollIntoView = element => element.scrollIntoView({behavior: 'smooth'})
</script>

<style>
span {
  background-color: darkred;
  color: whitesmoke;
  border-radius: 0.25rem;
  padding: 1rem;
}
span small {
  position: relative;
  top: -1rem;
  right: -.5rem;
  cursor: pointer;
}
</style>

{#if message}
  <span bind:this={errContainer}>
    {message} <small on:click={dismiss}>⨉</small>
  </span>
{/if}