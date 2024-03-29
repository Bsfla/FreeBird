import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@consts/net';

export const customAxios: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${process.env.NEXT_PUBLIC_API_KEY}/api`
      : `${process.env.NEXT_PUBLIC_LOCAL_KEY}/api`,
  withCredentials: true,
});

const createApiMethod =
  (_axiosInstace: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig): Promise<any> => {
    _axiosInstace.interceptors.response.use(
      (response) => {
        if (!response.data) return response;
        return response.data;
      },
      (error) => {
        return error;
      }
    );
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
