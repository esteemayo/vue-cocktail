import http from './httpService';

export function getCocktails(query) {
  return http.get(`/search.php?s=${query}`);
}

export function getCocktail(cocktailId) {
  return http.get(`/lookup.php?i=${cocktailId}`);
}
