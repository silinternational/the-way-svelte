<script>
import AppFooter from './AppFooter.svelte'
import AppHeader from './AppHeader.svelte'
</script>

<style>
:global(body) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  flex: 1 0 auto;
}
</style>

<svelte:head>
	<title>The Way</title>
</svelte:head>

<AppHeader />

<main>
</main>

<AppFooter />
