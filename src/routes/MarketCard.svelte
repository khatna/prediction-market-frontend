<script lang="ts">
  import { toast } from '@zerodevx/svelte-toast';
  import MarketChart from './MarketChart.svelte';
  import { PUBLIC_SERVER_HOST } from '$env/static/public';
  let { market }: { market: MarketData } = $props();
  let stake = $state();

  const onClick = (isYes: boolean) => () => {
    if (!stake) {
      toast.push('Please stake a valid amount!');
      return;
    }

    const makeRequest = async () => {
      const body: BetRequest = {
        stake: Number(stake),
        is_yes: isYes,
        market_id: market.id
      };

      const response: BetResponse = await fetch(new URL('/bet', PUBLIC_SERVER_HOST).href, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json());

      if (!response?.purchased) toast.push('Something went wrong. Please try again.');
      else toast.push(`Purchased ${response.purchased.toFixed(3)} ${isYes ? 'YES' : 'NO'} tokens!`);
    };

    makeRequest();
  };
</script>

<div class="market-chart relative h-[500px] w-full">
  <div class="absolute inset-px bg-[var(--color-bg-1)] hover:bg-white"></div>
  <div class="relative flex h-full flex-col overflow-hidden">
    <div class="px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-0">
      <p class="text-center text-lg font-[700] tracking-tight sm:text-xl">
        {market.question}
      </p>
    </div>
    <MarketChart
      class="flex flex-1 items-center justify-center px-2 sm:px-4 lg:pb-2"
      history={market.history}
    />
    <div
      class="m-6 {market.probability >= 0.5
        ? 'bg-[var(--color-theme-1)]'
        : 'bg-[var(--color-theme-2)]'} my-2 px-4 py-1 text-center font-[900]"
    >
      {Math.floor(market.probability * 100)}% Chance
    </div>
    <p class="mb-2 text-center font-light">Trading volume: ${market.volume.toFixed(2)}</p>
    <div class="mx-4 mb-2 flex items-center gap-2">
      <div class="bg-white px-4 py-2 text-sm text-black">
        <input
          type="text"
          class="w-full bg-transparent text-center outline-none"
          placeholder="Enter stake"
          bind:value={stake}
        />
      </div>
      <button
        class="rounded-sm bg-[var(--color-theme-1)] px-4 py-2 text-center text-sm font-medium"
        onclick={onClick(true)}
      >
        YES
      </button>
      <button
        class="rounded-sm bg-[var(--color-theme-2)] px-4 py-2 text-center text-sm font-medium"
        onclick={onClick(false)}
      >
        NO
      </button>
    </div>
  </div>
</div>
