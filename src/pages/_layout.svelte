<script>
import { Page } from '@silintl/ui-components'
import AppFooter from '../components/AppFooter.svelte'
import AppHeader from '../components/AppHeader.svelte'

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


<Page>

  <AppHeader />
  
  <main>  
    <slot />
  </main>
  
  <AppFooter />
  
</Page>
