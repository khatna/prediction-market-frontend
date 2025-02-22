<script lang="ts">
  import Chart from './Chart.svelte';
</script>

<svelte:head>
  <title>Market Simulator</title>
  <meta name="description" content="Prediction market simulator" />
</svelte:head>

<section>
  <Chart />
  <Chart />
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    gap: 1em;
  }
</style>
