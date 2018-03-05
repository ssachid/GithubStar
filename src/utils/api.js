import axios from 'axios';

export function fetchPopularRepos(language) {
  var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language
                                        + '&sort=stars&order=desc&type=Repositories');
  return axios.get(encodedURI)
    .then(({data}) => data.items)
}

export function getProfile(username) {
  return axios.get(`http://api.github.com/users/${username}`)
    .then(({data}) => data)
}

export function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(({data}) => data)
}

function getStarCount(repos) {
  console.log(repos.reduce((count, repo) => count + repo.stargazers_count, 0))
  return repos.reduce((count, repo) => count + repo.stargazers_count, 0);
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

function sortPlayers(players) {
  return players.sort( (a,b) => b.score - a.score )
}

export function battle(players) {
  return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}
