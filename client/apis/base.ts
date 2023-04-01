import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { HTTP_METHODS } from '@consts/net';
import { baseURL } from 'config/config';

export const customAxios: AxiosInstance = axios.create({
  baseURL: ` ${baseURL}/api`,
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
