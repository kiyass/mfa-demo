import fetch from 'dva/fetch';
import request from './services/request';

window.__POWERED_BY_QIANKUN_PARENT__ = true;

export const qiankun = request('/apps').then(apps => ({
  apps,
  fetch: url => {
    console.log('静态资源fetch覆盖');
    return fetch(url);
  },
}));
