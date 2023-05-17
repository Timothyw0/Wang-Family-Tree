import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axiosConfig from "../interfaces/axiosConfig";

export const useAxiosLoader = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const onRequest = (config: InternalAxiosRequestConfig) => {
      setCounter(counter + 1);
      return config;
    };

    const onRequestError = (error: AxiosError) => {
      setCounter(counter - 1);
      return Promise.reject(error);
    };

    const onResponse = (response: AxiosResponse) => {
      setCounter(counter - 1);
      return response;
    };

    const onResponseError = (error: AxiosError) => {
      setCounter(counter - 1);
      return Promise.reject(error);
    };

    const reqInterceptor = axiosConfig.interceptors.request.use(
      onRequest,
      onRequestError
    );
    const respInterceptor = axiosConfig.interceptors.response.use(
      onResponse,
      onResponseError
    );

    return () => {
      axiosConfig.interceptors.request.eject(reqInterceptor);
      axiosConfig.interceptors.response.eject(respInterceptor);
    };
  });

  return [counter > 0];
};
