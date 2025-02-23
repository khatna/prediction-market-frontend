import type { PageLoad } from './$types';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
  const markets: Promise<MarketData[]> = fetch(new URL('/markets', PUBLIC_SERVER_HOST).href).then(
    (res) => res.json()
  );
  return { markets };
};
