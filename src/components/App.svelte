<script>
import t from '../i18n'
import { parse, stringify } from 'qs'
import { Router } from "@sveltech/routify"
import { routes } from "@sveltech/routify/tmp/routes"

// added because of this:  https://github.com/sveltech/routify/issues/201
const queryHandler = {
	parse: params => parse(params, {ignoreQueryPrefix: true}),
	stringify
}
</script>

<svelte:head>
	<title>{t('appname')}</title>
</svelte:head>

<Router {routes} config={{queryHandler}} />
