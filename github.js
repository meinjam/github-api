class Github {
  constructor() {
    this.clientId = 'f0827853af8e3042cfa7';
    this.clientSecret = '4f6f3e8ba072a08bb5540cb845c5b0466fb707b2';
  }
  async getUser(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const profile = await response.json();
    return {
      profile: profile,
    };
  }
}
