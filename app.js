// Add Github Class
const github = new Github();
// Add Ui Class
const ui = new Ui();

// Search Input
const searchInput = document.querySelector('#user');

searchInput.addEventListener('keyup', (e) => {
  const userText = e.target.value.trim();
  if (userText !== '') {
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('No user found on this username.', 'danger');
          ui.clearProfile();
          ui.clearRepos();
          ui.clearRepoTag();
        } else {
          ui.clearAlert();
          // Show Profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepoTag();
          ui.showRepos(data.repos);
        }
      })
      .catch((error) => console.log(error));
  } else {
    // Clear Profile
    ui.clearProfile();
    ui.clearRepos();
    ui.clearRepoTag();
  }
});
