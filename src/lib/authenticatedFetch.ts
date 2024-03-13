import { auth } from '@clerk/nextjs';

export const authenticatedFetch = async (
  input: string,
  init?: RequestInit | undefined
) => {
  const { getToken } = auth();

  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getToken()}`,
    },
  });
};
