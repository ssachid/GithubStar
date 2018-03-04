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

export function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

function getStarCount(repos) {
  return repos.data.reduce((count, {stargazers_count}) => count + startgazers_count, 0);
}

function calculateScore({followers},repos) {
  return (followers * 3) + getStarCount(repos);
}

function handleError(error) {
  console.log(error);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)])
    .then( ([profile, repos]) => (
      { profile, score: calculateScore(profile, repos)})
    )
}
