const baseAPIUrl = 'https://wind-bow.gomix.me/twitch-api';
const proxyUrl = 'https://cors-anywhere.herokuapp.com';

export function fetchUser(userName) {
  return fetch(`${proxyUrl}/${baseAPIUrl}/users/${userName}`, {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
    .then(result => result.json())
  ;
}

export function fetchUserStream(userName) {
  return fetch(`${proxyUrl}/${baseAPIUrl}/streams/${userName}`, {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
    .then(result => result.json())
  ;
}