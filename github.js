class GitHub {
  constructor() {
    this.client_id = "efbdc68a6a610fe4f797";
    this.client_secret = "0ff0f15018d8ec8b430d85a71b7749112104291c";
    this.repo_count = 5;
    this.repo_sort = "created: asc";
  }

  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repos: repoData
    };
  }
}
