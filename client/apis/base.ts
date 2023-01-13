import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@consts/net';

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 10000,
  withCredentials: true,
});

const createApiMethod =
  (_axiosInstace: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig) => {
    return _axiosInstace({
      ...config,
      method: methodType,
    });
  };

export default {
  get: createApiMethod(customAxios, HTTP_METHODS.GET),
  post: createApiMethod(customAxios, HTTP_METHODS.POST),
  patch: createApiMethod(customAxios, HTTP_METHODS.PATCH),
  put: createApiMethod(customAxios, HTTP_METHODS.PUT),
  delete: createApiMethod(customAxios, HTTP_METHODS.DELETE),
};
