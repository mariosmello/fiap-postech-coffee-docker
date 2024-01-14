import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 5,
  duration: '30s',
};
export default function () {
  http.get('http://127.0.0.1:51286/api/user?document=34360924870');
  sleep(0.1);
}