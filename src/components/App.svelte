<script>
import { Router } from "@sveltech/routify"
import { routes } from "@sveltech/routify/tmp/routes"
import t from '../i18n'
</script>

<svelte:head>
	<title>{t('appname')}</title>
</svelte:head>

<Router {routes} />
