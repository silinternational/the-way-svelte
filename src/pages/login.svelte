<script>
import { getSeed } from '../authn/token'
import { login } from '../authn'
</script>

<p>
  Simulate a <code>POST backend/login?client-id={getSeed()}</code> and it's <code>302</code> back to the app
  <button on:click={login}>login</button>
</p>
