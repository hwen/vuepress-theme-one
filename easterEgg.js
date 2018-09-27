import log from 'sme-log';
import Request from './http';

const ilog = log();
const request = new Request();

export function easterEgg() {
  request.get('https://v1.hitokoto.cn/').then(resp => {
    ilog(`${resp.hitokoto}    ${resp.from ? '-- ' + resp.from : ''}`);
  });
}