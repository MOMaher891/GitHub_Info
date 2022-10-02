//----*----*----*----*----*----*----*----*----*----*----*----*----*----*----*----

//Get GitHub Info

const BASE_URL = new XMLHttpRequest(),
    btn = document.getElementById('show_info'),
    profile_info = document.getElementById('info');

let data;

btn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    BASE_URL.open("GET", `https://api.github.com/users/${name}`, true);

    BASE_URL.onload = function () {
        if (this.status === 200) {

            data = JSON.parse(this.responseText);
            profile_info.innerHTML = `
            <li><img src=${data.avatar_url}></li>
            <li><h5 style="display:inline">ID : </h5>${data.id}</li>
            <li><h5 style="display:inline">Name : </h5>${data.name}</li>
            <li><h5 style="display:inline">Location : </h5>${data.location}</li>
            <li><h5 style="display:inline">Bio : </h5>${data.bio}</li >
            <li><h5 style="display:inline">public_repos : </h5>${data.public_repos}</li>
            <li><h5 style="display:inline">followers : </h5>${data.followers}</li>
            <li><h5 style="display:inline">following : </h5>${data.following}</li>

            <a href=${data.html_url} target="_blank" title = ${data.name}>${data.html_url}</a>
            `
        }
    }
    BASE_URL.send();
})


//----*----*----*----*----*----*----*----*----*----*----*----*----*----*----*----
