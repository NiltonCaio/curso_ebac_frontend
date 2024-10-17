async function retrieveProfile() {
    const profileAvatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const numberRepositories = document.querySelector('#repositories');
    const numberFollowers = document.querySelector('#followers');
    const numberFollowing = document.querySelector('#following');
    const elementLink = document.querySelector('#link');

    const url = 'https://api.github.com';

    const user = 'NiltonCaio';

await fetch(`${url}/users/${user}`)
    .then(response => {     
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(function(json) {
        profileAvatar.src = json.avatar_url;
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        numberRepositories.innerText = json.public_repos;
        numberFollowers.innerText = json.followers;
        numberFollowing.innerText = json.following;
        elementLink.href = json.html_url;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

retrieveProfile();