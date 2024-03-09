import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 5,
  duration: '30s',
};
export default function () {
  const res = http.get('http://127.0.0.1:61498/api/user?document=34360924870');
  console.log(res.body);
  sleep(1);
}