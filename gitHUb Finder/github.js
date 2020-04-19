class Github {
    constructor() {
        this.client_id = '9260d8c85615502d2129';
        this.client_secret = 'd8efbbd1631e53318518bb0a89385b196b55a343';
    }
     
    async getUser(user) {
        const prores = await fetch(`https://api.github.com/users/${user}
    ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await prores.json();
  

        return {
            profile
        }
    }
    
}