import { useState, useEffect } from "react";

interface UseApiDataState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

interface UseApiDataReturn<T> extends UseApiDataState<T> {
  refetch: () => Promise<void>;
  setData: (data: T) => void;
}

export function useApiData<T>(
  fetchFunction: () => Promise<T>,
  initialData: T,
  dependencies: any[] = []
): UseApiDataReturn<T> {
  const [state, setState] = useState<UseApiDataState<T>>({
    data: initialData,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const data = await fetchFunction();
      setState((prev) => ({ ...prev, data, loading: false }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : "An error occurred",
        loading: false,
      }));
    }
  };

  const setData = (data: T) => {
    setState((prev) => ({ ...prev, data }));
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    ...state,
    refetch: fetchData,
    setData,
  };
}

export function useAdminDashboardData<T>(
  fetchFunction: () => Promise<T>,
  initialData: T
) {
  return useApiData(fetchFunction, initialData);
}

export function useUserDashboardData<T>(
  fetchFunction: () => Promise<T>,
  initialData: T
) {
  return useApiData(fetchFunction, initialData);
}
