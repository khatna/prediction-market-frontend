<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">About this app</h1>

  <p class="my-2">
    In this app, you can place bets on a simulated prediction market, similar to <a href="https://manifold.markets">Manifold</a>.
    Instead of using a traditional order book system, the backend server implements a <strong>Constant Product Market Maker</strong>
    (CPMM), which is a simple example of an AMM (Automated Market Maker). In this system, when a user places a bet on an event happening,
    the CPMM converts the bettor's stake into <em>YES</em> and <em>NO</em> tokens, and credits the user with an appropriate amount of
    YES tokens, such that:
  </p>

  <strong class="text-center">YES_reserves * NO_reserves = k (constant)</strong>

  <p class="my-2">
    The backend server also maintains a "ground truth probability" that changes randomly, and some trading bots who place bets
    based on the ground truth probability and a personal bias. In this way, even though the ground truth is not known to the
    automated market maker, the probability implied by the AMM will come to resemble the ground truth probability.

    You can see this in action by placing bets on one of the four mocked markets. For instance, if you place successive bets on
    <strong>YES</strong>, you will see that:
  </p>

  <ol class="list-decimal mx-6">
    <li>The price (implied probability) of YES will rise, and you will get fewer tokens with each bet</li>
    <li>The price will eventually go back to ground truth as the bots buy more of the undervalued NO tokens</li>
  </ol>

  <p class="my-2">
    This web app was built using <a href="https://svelte.dev/">SvelteKit</a>.
  </p>
</div>
