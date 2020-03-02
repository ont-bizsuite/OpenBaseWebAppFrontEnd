import fetch from 'isomorphic-fetch';

export default function downloadAPI(url, data) {
  return fetch(url, {
    method: 'post',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
    // mode: 'no-cors'
    // credentials: 'include',
  }).then(response => {
    return response.json();
  });
}
