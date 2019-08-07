import * as constants from '../constants';

export function fetchMovies() {
  return fetch(constants.URL_LIST)
      .then(response => response.json())
      .then(json => json)
      .catch(ex => console.log('parsing failed', ex));
}