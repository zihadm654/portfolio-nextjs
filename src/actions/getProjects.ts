'use server';

import { config } from '@/lib/constant';

export const getData = async () => {
  const URL = config.url;
  const res = await fetch(`${URL}/api/projects`, {
    next: { revalidate: 1060 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
