import { _post } from '@/utils/axios';
// 链接的电脑ip和端口
const URL = 'http://10.1.2.237:3000';
enum API {
  REGISTER_API = '/user/register'
}
/**
 * 注册
 */
export const _registerapi = (params) => {
  return _post(URL + API.REGISTER_API, params);
};