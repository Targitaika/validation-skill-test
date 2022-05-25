export default function request(data) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://swapi.dev/api/people/1/');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  xhr.send(JSON.stringify({ address: data }));
}
