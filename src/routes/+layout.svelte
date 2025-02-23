<script lang="ts">
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import Header from './Header.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="app">
  <Header />

  <main>
    {@render children()}
  </main>
</div>
<SvelteToast />

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
