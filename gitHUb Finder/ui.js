class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body md-3" >
           <div class="row">
              <div class="col-md-6">
                    <img class = "img-fluid mb-2" src="${user.avatar_url}">
                    <br>
                    <a href="${user.html_url}" target="_blank" class="btn-primary btn-block md-4">View Profile</a>
               </div>

               <div class="col-md-6">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.follower}</span>
                    <span class="badge badge-info">Followers: ${user.following}</span>
                    <br>   <br>

                    <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Bio : ${user.bio}</li>
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.Location}</li>
                    </ul>
                </div>
            </div>
        </div> `;
    }
}