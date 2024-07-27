import { _post } from '@/utils/axios';
const URL = 'http://127.0.0.1:3000';
enum API {
  REGISTER_API = '/user/register'
}
/**
 * 注册
 */
export const _registerapi = (params) => {
  return _post(URL + API.REGISTER_API, params);
};