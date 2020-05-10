class Ui {
  constructor() {
    this.profile = document.querySelector('#profile');
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
                    <div class="badges d-flex justify-content-between">
                        <span class="badge badge-pill badge-success p-2">Followers: ${data.followers}</span>
                        <span class="badge badge-pill badge-warning p-2">Following: ${data.following}</span>
                        <span class="badge badge-pill badge-primary p-2">Public Repos: ${data.public_repos}</span>
                        <span class="badge badge-pill badge-secondary p-2">Public Gish: ${data.public_gists}</span>
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

  clearProfile() {
    this.profile.innerHTML = '';
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
