// src/core/infrastructure/http/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: 2 },
    },
});