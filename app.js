//Init GitHub
const github = new GitHub;
//Init Ui
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');
//Search Input event listener
searchUser.addEventListener('keyup',(e) =>{
    //Get Input text
    const userText = e.target.value;
    //Show User
    if(userText !== ''){
        //Make http request to github
        github.getUsers(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User Not Found' , 'alert alert-danger');
            }else{
                //Show User profile
                ui.showProfile(data.profile);
                //Show User Repos
                ui.showRepos(data.repos);
            }
        });
    }else{
        //Clear Profile
        ui.clearProfile();
    }
});