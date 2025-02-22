<script lang="ts">
  import MarketCard from './MarketCard.svelte';
  import Chart from './MarketChart.svelte';
</script>

<svelte:head>
  <title>Market Simulator</title>
  <meta name="description" content="Prediction market simulator" />
</svelte:head>

<section>
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <p
      class="mx-auto mt-2 max-w text-center text-4xl font-bold tracking-tight text-[var(--color-text)]"
    >
      Bet on simulated prediction markets
    </p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4 sm:grid-cols-2">
      <MarketCard />
      <MarketCard />
      <MarketCard />
      <MarketCard />
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
