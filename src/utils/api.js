import axios from 'axios';

export function fetchPopularRepos(language) {
  var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language
                                        + '&sort=stars&order=desc&type=Repositories');
  return axios.get(encodedURI)
    .then(({data}) => data.items)
}

export function getProfile(user) {
  return axios.get(`http://api.github.com/users${username}${params}`)
    .then(({data}) => data)
}

