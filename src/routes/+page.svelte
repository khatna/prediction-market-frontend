<script lang="ts">
  import type { PageProps } from './$types';
  import MarketCard from './MarketCard.svelte';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Market Simulator</title>
  <meta name="description" content="Prediction market simulator" />
</svelte:head>

<section>
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <p
      class="max-w mx-auto mt-2 text-center text-4xl font-bold tracking-tight text-[var(--color-text)]"
    >
      Bet on simulated prediction markets
    </p>
    <div class="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
      {#await data.markets}
        Loading Markets...
      {:then markets}
        {#each markets as market}
          <MarketCard {market} />
        {/each}
      {:catch error}
        <p>Error loading markets.</p>
      {/await}
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    gap: 1em;
  }
</style>
