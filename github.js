class Github {
  constructor() {
    this.clientId = 'f0827853af8e3042cfa7';
    this.clientSecret = '4f6f3e8ba072a08bb5540cb845c5b0466fb707b2';
    this.repos = 5;
    this.repoSort = 'created: asc';
  }
  async getUser(user) {
    const responseProfile = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const responseRepos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const profile = await responseProfile.json();
    const repos = await responseRepos.json();
    return {
      profile: profile,
      repos: repos,
    };
  }
}
