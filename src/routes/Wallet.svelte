<script lang="ts">
  import { fade } from 'svelte/transition';
  import wallet from '$lib/images/wallet.svg';
  import type { MouseEventHandler } from 'svelte/elements';

  // Props or stores could be used to manage these states
  let isOpen = false;
  let balance = 500;
  let isLoggedIn = true;

  function handleDeposit() {
    balance += 100;
    // Here you would typically make an API call to update the balance
  }

  function handleClick() {
    if (isLoggedIn) {
      isOpen = !isOpen;
    } else {
      // Here you could redirect to login page or show login modal
      alert('Please log in to view your wallet');
    }
  }

  // Close tooltip when clicking outside
  const handleClickOutside: MouseEventHandler<Window> = (event) => {
    if (isOpen && !event.target.closest('.wallet-container')) {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="wallet-container relative">
  <button on:click={handleClick} class="p-2" aria-label="Wallet">
    <img src={wallet} alt="SvelteKit" />
  </button>

  {#if isOpen && isLoggedIn}
    <div
      class="absolute right-0 z-50 m-4 w-64 rounded-lg border border-gray-200 bg-white shadow-lg"
      transition:fade={{ duration: 150 }}
    >
      <div class="p-4">
        <div class="rounded-lg bg-gray-50 p-4">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="font-medium">Balance</span>
              <span class="text-lg">${balance.toFixed(2)}</span>
            </div>

            <button
              on:click={handleDeposit}
              style="background-color: var(--color-theme-1);"
              class="w-full rounded px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              Deposit $100
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
</style>
