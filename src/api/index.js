// console.log('tag', process.env.NODE_ENV)
const host = {
  baseUrl: process.env.NODE_ENV === 'test' ? 'http://0.0.0.0:80' : 'https://www.wutianci.cn',
};

const reqUrls = {
  LOGIN: `${host.baseUrl}/users/login`,
  GETINFO: `${host.baseUrl}/users/getInfo`,
};

export default reqUrls;
