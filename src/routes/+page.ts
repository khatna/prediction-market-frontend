// since there's no dynamic data here, we can prerender

import type { PageLoad } from './$types';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  const markets: Promise<MarketData[]> = fetch(new URL('/markets', PUBLIC_SERVER_HOST).href).then(
    (res) => res.json()
  );
  return { markets };
};
