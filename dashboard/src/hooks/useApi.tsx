import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

type useApiReturnData = {
  data: any;
  loading: boolean;
  hasError: boolean;
  error: {} | null;
};

type useApiReturnType = [useApiReturnData, () => void];

const useApi = (
  func: (...params: any[]) => Promise<AxiosResponse>,
  ...params: any[]
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{} | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const returnDataObject: useApiReturnData = {
    data,
    loading,
    hasError,
    error,
  };

  function init() {
    setLoading(true);
    setHasError(false);
    setError(null);
    setData(null);
  }

  async function callApi() {
    init();
    try {
      const result = await func(...params);
      if (result.data) {
        setData(result.data);
      } else {
        setHasError(true);
        setError("No Result!");
      }
    } catch (e) {
      setHasError(true);
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    callApi();
  }, []);

  const returnTuple: useApiReturnType = [returnDataObject, callApi];
  return returnTuple;
};

export default useApi;
