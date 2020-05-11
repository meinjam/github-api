class Ui {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.repos = document.querySelector('#repos');
    this.showRepoText = document.querySelector('#showrepo');
  }

  showProfile(data) {
    this.profile.innerHTML = `
    <div id="profile">
        <div class="card px-4 pb-4 mb-3">
            <div class="row">
                <div class="col-md-4 pt-2">
                    <img src="${data.avatar_url}"
                        class="img-fluid rounded-circle" alt="">
                    <h4 class="text-center mt-2">${data.name}</h4>    
                    <a href="${data.html_url}" class="btn btn-info btn-block btn-sm mt-2" target="_blank">See
                        Profile</a>
                </div>
                <div class="col-md-8 mt-4">
                    <div class="badges">
                        <span class="badge badge-pill badge-success p-1">Followers: ${data.followers}</span>
                        <span class="badge badge-pill badge-warning p-1">Following: ${data.following}</span>
                        <span class="badge badge-pill badge-primary p-1">Public Repos: ${data.public_repos}</span>
                        <span class="badge badge-pill badge-secondary p-1">Public Gish: ${data.public_gists}</span>
                    </div>
                    <ul class="list-group mt-3">
                        <li class="list-group-item">Company: ${data.company}</li>
                        <li class="list-group-item">Website/Blog: ${data.blog}</li>
                        <li class="list-group-item">Location: ${data.location}</li>
                        <li class="list-group-item">Member Since: ${data.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
  }

  showRepos(data) {
    let output = '';
    data.forEach((e) => {
      output += `
      <div class="card px-4 pb-3 mb-3">
          <div class="row">
              <div class="col-md-6 pt-3">
                  <a href="${e.html_url}" target="_blank">${e.name}</a>
              </div>
              <div class="col-md-6 mt-3">
                  <span class="badge badge-primary">Stars: ${e.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${e.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${e.forks_count}</span>
              </div>
          </div>
      </div>
      `;
    });

    this.repos.innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showRepoTag() {
    this.showRepoText.innerText = 'Latest Repos';
  }

  clearRepos() {
    this.repos.innerHTML = '';
  }

  clearRepoTag() {
    this.showRepoText.innerText = '';
  }

  showAlert(message, type) {
    let alert = `<div class="alert alert-${type}">${message}</div>`;
    const alertPosition = document.querySelector('.for-alert');
    alertPosition.innerHTML = alert;
  }

  clearAlert() {
    const alertPosition = document.querySelector('.for-alert');
    alertPosition.innerHTML = '';
  }
}
