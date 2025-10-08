import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useCacheWatcher() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.type === 'updated') {
        const state = event?.query?.state;
        console.log(
          `[${event.query.queryKey}] cache state`,
          'dataUpdatedAt:',
          new Date(state.dataUpdatedAt).toLocaleTimeString(),
          'isStale:',
          event.query.isStale()
        );
      }
    });

    return unsubscribe;
  }, [queryClient]);
}