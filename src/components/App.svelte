<script>
import AppFooter from './AppFooter.svelte'
import AppHeader from './AppHeader.svelte'
import t from '../i18n'
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
	<title>{t('appname')}</title>
</svelte:head>

<AppHeader />

<main>
</main>

<AppFooter />
