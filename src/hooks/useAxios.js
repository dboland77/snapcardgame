import { useContext, useMemo, useRef } from "react";
import axios from "axios";
import { AxiosContext } from "../context/Axioscontext";
import { useQuery } from "react-query";

export const useAxios = (queryName, url, method, payload, queryKeys = []) => {
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);
  const controllerRef = useRef(new AbortController());

  const executeQuery = async () => {
    const { data } = await instance.request({
      signal: controllerRef.current.signal,
      data: payload,
      method,
      url,
    });
    return data;
  };
  const { isLoading, error, data, isSuccess } = useQuery(
    [queryName, ...queryKeys],
    executeQuery
  );
  return { isLoading, error, data, isSuccess, executeQuery };
};
