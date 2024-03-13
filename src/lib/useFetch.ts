import { useAuth } from '@clerk/nextjs';

export default function useFetch() {
  const { getToken } = useAuth();

  const authenticatedFetch = async (
    input: string,
    init?: RequestInit | undefined
  ) => {
    return fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
    });
  };

  return authenticatedFetch;
}
