import { QueryClient } from '@tanstack/react-query';

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000, // 1 minute
        retry: (failureCount, error: unknown) => {
          // Don't retry on 4xx errors except 408 (timeout)
          const errorStatus = (error as { status?: number })?.status;
          if (
            errorStatus &&
            errorStatus >= 400 &&
            errorStatus < 500 &&
            errorStatus !== 408
          ) {
            return false;
          }
          // Retry up to 3 times
          return failureCount < 3;
        },
      },
      mutations: {
        retry: false,
      },
    },
  });
