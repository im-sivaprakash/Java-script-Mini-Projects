const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
const usname = e.target.value;

if(usname !==' ')
{
     github.getUser(usname)
     .then(data=>{
       if(data.profile.message === 'Not Found')
       {
           //Show Alert
           
       }
       else
       {
           //Show profile
           ui.showProfile(data.profile); 
       }
     })
}
else
{
    //clear profile
}
});