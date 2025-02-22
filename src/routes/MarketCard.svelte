<script lang="ts">
  import MarketChart from './MarketChart.svelte';
  let price = $state(Math.random());
  let priceColor = $derived(
    price >= 0.5 ? 'bg-[var(--color-theme-1)]' : 'bg-[var(--color-theme-2)]'
  );
</script>

<div
  class="market-chart relative h-[500px] w-full cursor-pointer hover:bg-[rgba(255,255,255,0.06)]"
  onclickcapture={() => {
    console.log('clicked');
  }}
>
  <div class="absolute inset-px bg-[var(--color-bg-1)] hover:bg-white"></div>
  <div class="relative flex h-full flex-col overflow-hidden">
    <div class="px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-0">
      <p
        class="text-center text-lg font-[700] tracking-tight sm:text-xl"
      >
        Will Bitcoin reach $120k in 2025?
      </p>
    </div>
    <MarketChart class="flex flex-1 items-center justify-center px-2 sm:px-4 lg:pb-2" />
    <div class="m-6 {priceColor} px-4 py-2 text-center font-[900]">
      { Math.floor(price * 100) }% Chance
    </div>
  </div>
</div>
