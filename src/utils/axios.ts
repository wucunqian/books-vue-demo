import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
// 参数类型
interface requestParams {
  (url: string, params?: any): Promise<any>;
}
const service = axios.create();
// 请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
// 请求响应
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// get
export const _get: requestParams = (url, params) => {
  return new Promise((resolve, reject) => {
    service.get(url, params).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

// post
export const _post: requestParams = (url, params) => {
  return new Promise((resolve, reject) => {
    service.post(url, params).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
};