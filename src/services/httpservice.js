import { stringify } from 'qs';
import config from '../config';
import request from '../utils/request';

const { apiBaseUrl } = config;
export function get({ url, params }) {
  if (params) {
    return request(`${apiBaseUrl + url}?${stringify(params)}`);
  }
  return request(`${apiBaseUrl + url}`);
}
export function post({ url, params }) {
  return request(`${apiBaseUrl + url}`, {
    method: 'POST',
    body: params,
  });
}
