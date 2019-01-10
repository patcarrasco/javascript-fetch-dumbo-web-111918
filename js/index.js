const app = "I don't do much.";

const token = '81b02427b749aed3c235c2664851548ab5c899c5'

fetch('https://api.github.com/users/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
