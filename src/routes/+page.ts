import type { PageLoad } from './$types';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

const baseUrl = PUBLIC_SERVER_HOST ?? 'http://localhost:8000';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const markets: MarketData[] = await fetch(new URL('/markets', baseUrl).href).then((res) =>
      res.json()
    );
    return { markets };
  } catch (error) {
    return { error };
  }
};
