
//se up event listener
document.addEventListener("DOMContentLoaded", function(){
Feedpage();
setupEventListeners();


});

//feedpage Function
  function Feedpage() {

    const content = document.getElementById('content');

    const feedContent = 


    `<header>

    <nav>

       <div class="header" id="wbsname">

           <h1 id="titre">Artify</h1>
           
       </div>


        <div class="searchBox">

           <input type="text"  id="searchField" placeholder="Search" name="Search">

       </div>
                  
       <div class="navigation-bar">

           <ul class="links">
               <li><a href="#wbsname">Home</a></li>
               <li><a href="#main-content" id="create">Create</a></li>
               <li><a href="#sideBar-elements">Register</a></li>   
           </ul>     

      </div>

  </nav>

</header>


<div class="container">

<div class="left-sidebar"> 
   


<div class="menu-items">


   <ul class="leftlinks">


       <li><i class="fa-solid fa-house-user"></i> <a href="">Home</a></li>
      
        
   <!--  <span><i class="fa-solid fa-house-user"></i> </span><h3>Home</h3>
       <span><i class="fa-solid fa-users"></i></span><h3>Following</h3>
       <span><i class="fa-solid fa-gear"></i></span><h3>Setting</h3>
       <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span><h3>Log out</h3>
  --->    
       

   </ul>  

</div>

</div>



<div class="main-content" id="main-content">

</div>

<div class="right-sidebar">

<div class="sideBar-elements" id="sideBar-elements">

     <h2 id="youAccount">Your Account</h2>
   
   <ul class="sidebar-links">
       <li><a href="" class="register" id="signup">Register</a></li>
       <li><a href="" class="login" id="log">Login</a></li>

   </ul>

</div>

</div>

</div>

`

content.innerHTML = feedContent;   
setupEventListeners();


};



//use this as profile page
function NewsFeedpage(){

    const content = document.getElementById('content');
    const newfeed = 

    `  
    <header>

       <nav>

            <div class="header" id="header">

                <h1 id="titre"> Artify </h1>
                
            </div>
    

             <div class="searchBox">
    
                <input type="search"  id="searchField" placeholder="Search" name="Search">
                <button id="searchBtn" class="SearchbtnIcon"><i class="fa-solid fa-magnifying-glass"></i></button> 
    

            </div>
                       
            <div class="navigation-bar" >
    
                 <ul class="links" id="profNav">

                    
                    <li><a href="#header" id="homePageLink">Home</a></li>
                    <li><a href="#FormContainer">Create</a></li>


                 </ul>     

           </div>


  </nav>

 </header>


 <div class="container">

    <div class="left-sidebar"> 
        
   
    
    <div class="menu-items">


        <ul class="leftlinks">

            <li><i class="fa-solid fa-house-user"></i> <a href="#header">Home</a></li>
            <li><i class="fa-solid fa-users"></i><a href="#FollowedUsers" id="followingList">Following</a></li>  
            <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="" id="logOutLink">log out</a></li>  

        <!--  <span><i class="fa-solid fa-house-user"></i> </span><h3>Home</h3>
            <span><i class="fa-solid fa-users"></i></span><h3>Following</h3>
            <span><i class="fa-solid fa-gear"></i></span><h3>Setting</h3>
            <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span><h3>Log out</h3>
       --->    
        </ul>  

    </div>

    <div id="FollowedUsers">

     
    </div>


    </div>



  <div class="main-content">



<Div id="FormContainer">

    <h2 id="FeedTitle"> Artify your Stories, Anecdotes, Memories or more!</h2>


    <form id= "UploadForm" class="uploadF">
    
        <h3>Post </h3>
    <input type="text" name="text" id="contentType" placeholder="Content type">
    <span id="contentTypeErrormsg"></span><br>

    <input type="text" name="text" id="title" placeholder="Username">
    <span id="titleErrormsg"></span><br>

    <input type="text" name="text" id="comments" placeholder="Write your art">
    <span id="commentErrormsg"></span><br>
    
    <!--  <input type="file" name="myFile" id="FileInput" > -->
    
    <button type="submit" id="uploadButton">Post</button>
    <div id="ServerResponse"></div> 
    
    </form> 

</Div>


<div id="PostsContainer">

 </div>


</div>


  <div class="right-sidebar">

    <div class="sideBar-elements" id="sideBar-elements">
      

      <h2> Profile Page</h2>
      <div id="usernameDisplay">
      </div

        <ul class="sidebar-links">
            
        </ul>

    </div>



    <div id="SearchedUsers">

        <h3>Research Results:</h3>

        <Div id="users">


        </Div>
       


    </div>
  </div>

 </div>

`
content.innerHTML = newfeed;
setupEventListeners();

}

//Sign up section
  function Registerpage() {

    const content = document.getElementById('content');


    const signup = 

    `

     <div id="backbtn"> 

        <i class="fa-solid fa-arrow-left-long"></i>

     </div> 

<section class="Form my mx-5">

   <div class="container">

       <div class="row no-gutters" id="row" >

    <!-- Image left column -->

      <div class="col-lg-5" id="image">

        <img src="./img/signupimg.jpeg" class="img-fluid" id="image1" alt="">

        </div>


        <div class="col-lg-5 px-5 pt-5" id="registerForm">


    <form id="firstForm" >


        <div class="form-row">

            <div class="col-lg-7">
        
                <h1 class="topText"> Sign up</h1>
            
                <label for="firstName"> First Name</label><br>
                <input type="text" class="form-control " name="firstname"  id="firstName" placeholder="First Name" autocomplete= "given-name"  required><br>
                
                <label for="lastName"> Last Name</label><br>
                <input type="text"  class="form-control" name="lastname" id="lastName" placeholder="Last Name" autocomplete= "given-name" required><br>
                
                <label for="age">Age</label><br>
                <input type="text"  class="form-control"  name="age" id="age" placeholder="Age" required><br>
                 <span id="ageCheck"></span>

                <label for="email">Email</label><br>
                <input type="text" class="form-control"  name="email" id="email" placeholder="Email"  autocomplete="off"  spellcheck="false" required><br>
                <span id="emailCheck"></span>


                <label for="password">Password</label><br>
                <input type="password" class="form-control"  name="password" id="password" placeholder="Enter Name" autocomplete= "off" required><br>
                <span id="passwordCheck"></span>

                
                 <button type="submit"  id="signbtn" class="btn btn-primary"> Sign up </button>
                

                </div>
        
        
            </div>

     
   <p>Already have an account? <a href="" id="loginLink2" >Login</a></p> 

    </form>
            

   </div>


   

</div>

</section>
`
content.innerHTML = signup;   
setupEventListeners();

};



//login page
  function Loginpage() {

    const content = document.getElementById('content');
     
    const login = 

    `  
     <div id="backbtn"> 

        <i class="fa-solid fa-arrow-left-long"></i>

     </div> 

    <section class="Form my mx-5">

        <div class="container">
     
            <div class="row no-gutters" id="fullForm">
     
         <!-- Image left column -->
     
           <div class="col-lg-5" id="image">
     
             <img src="./img/loginimg.jpeg" class="img-fluid" id="image1" alt="">
     
             </div>
     
     
             <div class="col-lg-5 px-5 pt-5" id="registerForm">
     
     
         <form id="secondForm" >
     
     
             <div class="form-row">
     
                 <div class="col-lg-7">
             
                     <h1 class="topText"> Login</h1>
                 
        
                     <label for="email">Email</label><br>
                     <input type="text" class="form-control" id="confirmEmail" placeholder="Email"  name="email" autocomplete="off" spellcheck="false" required><br>
                     <span id="emailCheck"></span>

                     <label for="password">Password</label><br>
                     <input type="password" class="form-control" id="confirmPassword" placeholder="Enter Name"  name="password" autocomplete= "off" required ><br>
                     <span id="passwordCheck"></span>
                     
                      <button type="submit"  class="btn btn-primary"> Login </button>
                     
     
                     </div>
             
             
                 </div>
     
          
        <p>No account yet? <a href="" id="registerLink2"  >Register</a></p> 
     
        

         </form>
                 
     
        </div>
     
    
     </div>
     
     </section>  `;

     content.innerHTML = login;
    setupEventListeners();
};

//Event listeners
function setupEventListeners() {

    var register = document.getElementById('signup');
    var logIn = document.getElementById('log');
    var back = document.getElementById('backbtn');
    var register2 = document.getElementById('registerLink2');
    var login2 = document.getElementById('loginLink2');
    var Content=  document.getElementById('create');

    if(register) {


    register.addEventListener("click", function(event){

        event.preventDefault();
       Registerpage();
        console.log('sign up displayed');

    });


 }


 if(register2) {

 register2.addEventListener("click", function(event){

    event.preventDefault();
   Registerpage();
    console.log('sign up displayed');

  })

 }



 if(logIn){


   logIn.addEventListener("click", function(event){

        event.preventDefault();
         Loginpage();
        console.log('log in displayed');

 });
  
 }


  if (login2){
    

    login2.addEventListener("click", function(event){

        event.preventDefault();
         Loginpage();
        console.log('log in displayed');
    
    });
    
 }

  if(back) {


    back.addEventListener("click", function(event) {

        event.preventDefault();
         Feedpage();
        console.log('back to main page');

    });

    }

 // Registration Validation and storage
  const signupForm =  document.getElementById('firstForm');

  if(signupForm) {

  signupForm.addEventListener("submit", addUser);

  }
    

//for user log in
   const LoginForm =  document.getElementById('secondForm');

   if(LoginForm) {

   LoginForm.addEventListener("submit", LoginUser);

   }
   

  //For user Logout
  const LogOut=  document.getElementById('logOutLink');

  if(LogOut) {

  LogOut.addEventListener("click", UserLogout);

   }


//For user upload

const uploadForm = document.getElementById('UploadForm');


if(uploadForm) {

    uploadForm.addEventListener("submit", Upload);
    
    }
    
    const Searchinput =  document.getElementById('searchBtn');

    if(Searchinput) {
    
    Searchinput.addEventListener("click", UserSearch);
    
    }


};

const NewHomePage = document.getElementById('homePageLink');

if (NewHomePage) {

    NewHomePage.addEventListener('submit',NewHomePage);
}

const unfollowbtn= document.getElementById("followbtn");

if(unfollowbtn) {
    
    unfollowbtn.addEventListener("click", UserSearch);
    
    }



//
  async function addUser(event) {
        event.preventDefault();

  
//capture user's resgistration input
var Fname= document.getElementById('firstName').value;
var Lname = document.getElementById('lastName').value;
var MonAge = document.getElementById('age').value;
var MonEmail = document.getElementById('email').value;
var MonPassword =  document.getElementById('password').value;



//Add Registration validation 
let emailErrormsg = document.getElementById("emailCheck");
let pswErrormsg = document.getElementById("passwordCheck");
let ageErrormsg = document.getElementById("ageCheck");


if (!checkAge(MonAge)||!checkEmail(MonEmail) || !checkPassword(MonPassword)) {

console.log("Validation failed");
return;

}

    //make error message disappear
    emailErrormsg.innerHTML="";
    pswErrormsg.innerHTML="";
    ageErrormsg.innerHTML="";

//debug validation
console.log ("First Name:" + Fname+ ';Last Name: ' + Lname + 
';Email: ' + MonEmail 

  );

 // Debugging: Checking form data before sending
 console.log("Form data: ", Fname, Lname, MonAge, MonEmail, MonPassword);

//store in object array

    const user = {

        FirstName:Fname ,
        LastName: Lname,
        Age: MonAge,
        Email: MonEmail,
        Password: MonPassword

    };

//debug , not working
console.log("Form data:", user);
 const UserJSON = JSON.stringify(user);


//sends fetch request to server
try {

    console.log("Sending data to the server..."); 

    const response = await fetch('http://localhost:8080/M00904655/users', {

        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },

        body : UserJSON

    });

// get response

if (response.ok) {

const result = await response.json();
alert('User registered successfully');
Loginpage();

} else {

    console.log ("Http error:"+ response.status);
}


}

catch(err) {

    console.log("error adding user"+ err);
     alert('REGISTRATION FAILED. error in storing');

 }

}


//User Login Form 
async function LoginUser(event) {
    event.preventDefault();

    console.log("Event prevented: login Form submission stopped.");//debug

//capture user's log in data
var Email = document.getElementById('confirmEmail').value;
var Password =  document.getElementById('confirmPassword').value;

//Add Registration validation down here
let emailErrormsg = document.getElementById("emailCheck");
let pswErrormsg = document.getElementById("passwordCheck");

if (!checkEmail(Email) || !checkPassword(Password)) {

console.log("Validation failed");
return;

}

//make error message disappear
emailErrormsg.innerHTML="";
pswErrormsg.innerHTML="";


const LoginData = {

    Email: Email,
    Password: Password

};


const LogUserJSON = JSON.stringify(LoginData);

//sends fetch request to server
try {

console.log("Sending data to the server..."); // Debugging message

const response = await fetch('http://localhost:8080/M00904655/login', {

    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },

    body : LogUserJSON,

    credentials: 'same-origin',

});

// get response

//If with dislayed error that if user doesnt match the sign up, it displays error message
const result = await response.json();
console.log(result); 


if (result.login === true) {

   
  alert('User Login successfully');

   CheckloginStatus();
   NewsFeedpage();

}
    
    
  else  {


  if (result.login === false) {

      emailErrormsg.innerHTML= "Username or password incorrect.";
      emailErrormsg.style.color="red";
      emailErrormsg.style.fontSize="14px";
      emailErrormsg.style.position="relative";
      emailErrormsg.style.bottom="10px";
      emailErrormsg.style.padding="0px";
      emailErrormsg.style.fontWeight = "550";
      }
      
      else  {

     console.log ("Http error: "+ response.status);
     console.log ("User not found akia");

     }

  }

}  catch(err) {

console.log("error"+ err);
 alert('REGISTRATION FAILED. error in storing');

}

}

//Check age
function checkAge (MonAge){


// convert age to a number
MonAge = parseInt(MonAge, 10);

let ageErrormsg = document.getElementById("ageCheck");
//check if age is a number or less than or greater than 100
if (isNaN(MonAge) || MonAge < 1 || MonAge > 100){ 

   ageErrormsg.innerHTML = "Please enter a valid age";
   ageErrormsg.style.color= "red"; 
   ageErrormsg.style.fontSize="14px";
   ageErrormsg.style.position="relative";
   ageErrormsg.style.bottom="10px";
   ageErrormsg.style.padding="0px";
   ageErrormsg.style.fontWeight = "550";
    return false;


}

ageErrormsg.innerHTML = "";
return true;

}

//check email
function checkEmail(MonEmail) {


    let emailErrormsg = document.getElementById("emailCheck");

    const emailregx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!MonEmail.match(emailregx)) {
    
        emailErrormsg.innerHTML = "Email invalid. Please enter a valid email";
        emailErrormsg.style.color= "red"; 
        emailErrormsg.style.fontSize="14px";
        emailErrormsg.style.position="relative";
        emailErrormsg.style.bottom="10px";
        emailErrormsg.style.padding="0px";
        emailErrormsg.style.fontWeight = "550";
        return false;
    }

   emailErrormsg.innerHTML = "";
    return true;
    
    }




//Password check
function checkPassword(MonPassword) {


   let pswErrormsg = document.getElementById("passwordCheck");
    const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    
    if(!passwordregx.test(MonPassword)) {
    
        pswErrormsg.innerHTML = "Password must be at least 8 characters long, include uppercase, lowercase letters, and one number.";
        pswErrormsg.style.color= "red";  
        pswErrormsg.style.fontSize="14px";
        pswErrormsg.style.position="relative";
        pswErrormsg.style.bottom="10px";
        pswErrormsg.style.padding="0px";
        pswErrormsg.style.fontWeight = "550";
        return false;
    
    }
    
    
    pswErrormsg.innerHTML = "";
    return true; 
    
    };
    


//login status check
async function CheckloginStatus(){
    //sends to server

    //sends fetch request to server
    try  {

    
        console.log("Sending Login status to the server..."); 
    
        const response = await fetch('http://localhost:8080/M00904655/login', {
    
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',

                 credentials: 'same-origin'

            },
    
        });


        const data = await response.json();

        if(data.login === true){

            console.log('Logged in:',data);
          
            fetchUserProfile();
        }


        else{

            alert("You have logged out")
            console.log('No user logged in');

             Feedpage();
        }


     } catch(err) {

        console.log('Error:', err);
        
      }


};



//LogOut function 

async function UserLogout(event) {

   event.preventDefault();


    //sends fetch request to server
try  {

    console.log("Sending data to the server...Logout process"); 

    const response = await fetch ('http://localhost:8080/M00904655/login', {

        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
        credentials: 'same-origin'

        },

    });


if (response.ok) {


    const result = await response.json();
    console.log(result.message);
    CheckloginStatus();

}



else {

    console.error('LOGOUT FAILED, Tsy mety eh', response.status);
}

} catch (err){


    console.log ('Erreur during logout: ',err);

}

};



 async function Upload(event) {

    event.preventDefault();

//Get file that we want to upload
   let contentType = document.getElementById("contentType").value;
   let title = document.getElementById("title").value;
   let comments = document.getElementById("comments").value;
  let titleErrormsg = document.getElementById("titleErrormsg");
  let commentErrormsg = document.getElementById("commentErrormsg");
  let contentTypeErrormsg = document.getElementById("contentTypeErrormsg");


//Validation for title and comment and content type

if (!contentType||!title||!comments) {


   if(!contentType) {
    titleErrormsg.innerHTML="Please add Title before posting";
   }
    
   if (!title){
    
    commentErrormsg.innerHTML="Please Add content before posting";}

    if(!comments) {
        contentTypeErrormsg.innerHTML="Add content Type before posting";
    }
   
    return;
  }

      //make error message disappear
      titleErrormsg.innerHTML="";
      commentErrormsg.innerHTML="";
      contentTypeErrormsg.innerHTML="";
  
  //display validation
  console.log ("Content Type :" + contentType + "title :" + title+ 'COMMENT:'  + comments );
  

//store in object 
const contentData = {

    ContentType: contentType,
    Title:title,
    Comment: comments
  

};

console.log("Form data:", contentData);
const ContentJSON = JSON.stringify(contentData);


//sends fetch request to server
try {

console.log("Sending data to the server..."); 

const response = await fetch('http://localhost:8080/M00904655/contents', {

    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },

    body : ContentJSON,
    credentials: 'include' 

});


//if statement for content upload
if (!response.ok) {

    const result = await response.json();   
    console.log(result);
    alert('User not Posted ');
   
    
    } else {
        const result = await response.json();
        console.log(result);
        alert('User  Posted successfully');
        fetchposts();
    }
    
    
    }

catch(err) {

console.log("error adding user"+ err);
 alert('Content Posting FAILED. error in storing');

}

}

//function for fetching posts
async function fetchposts(){

    //sends fetch request to server
try {

    console.log("Fecthing data from database..."); 

    const response = await fetch('http://localhost:8080/M00904655/contents', {
    
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    
        credentials: 'include' 
    
    });
    
    const data = await response.json();

    if(response.status === 200){

        console.log("post uploaded");
       DisplayPosts(data);


    }

    else {

    console.log("no post found");
    var postSection= document.getElementById("PostsContainer");
    postSection.innerHTML="No post available here";
        
    }

}

catch (err) {

console.error('Error Retrieving posts :',err);
postSection.innerHTML="Failed to load posts, please try again."

}};

//Display post function
function DisplayPosts(data) {

 var postSection= document.getElementById("PostsContainer");
 postSection.innerHTML='';

if (data.length === 0) {
    postSection.innerHTML='No post Available';
    return;
};

//loop
data.forEach (post => {

    const postElement= document.createElement('div');
    postElement.classList.add("post");
    postElement.innerHTML=
//add element that renders on newsfeedpage
    `
    
    <h3>${post.Title}</h3>
     <p><strong>Caption: </strong>${post.Comment}</p>
     <p></p>

    `
    postSection.appendChild(postElement);

});

};



// function for user profile
  async function fetchUserProfile(){

//sends fetch request to server
        try  {

            console.log("Uploading process...."); 
        
            const response = await fetch ('http://localhost:8080/M00904655/profile', {
        
                method: 'GET',
                headers:  {'Content-Type' : 'application/json'


                 }, 

                credentials: 'same-origin'

            });
        

    if (response.ok) {

        const data = await response.json();

        console.log("data: ",data.username); 

       
   const usernameDisplay = document.getElementById('usernameDisplay');
   usernameDisplay.innerHTML='';

        usernameDisplay.innerText = `Profile:${data.username}`;

    } else {

        usernameDisplay.innerText = 'No user Logged in';
        console.log('User not logged in');
        // Redirect to login page or handle accordingly
    
    }


 } catch (err) {

    console.log('Error fetching profile:', err);

    }

};


//Function handilng user search
async function UserSearch(){


    let UserSearched = document.getElementById("searchField").value;

// Check if the search field is empty
   if (!UserSearched.trim()) {
       console.log("Please enter a search query");
      return;
     }

//sends fetch request to server
    try  {


        console.log("User Search process....");
    
        const response = await fetch (`http://localhost:8080/M00904655/users/search?q=${encodeURIComponent(UserSearched)}`, {
    
            method: 'GET',
            headers:  {'Content-Type' : 'application/json'


             }, 

            credentials: 'same-origin'

        });
    


const searchResult = await response.json();

if (response.ok) {

    console.log("User search Result: ",searchResult);
     UserSearchDisplay(searchResult);


} else {


    console.log("no Search Result");
    var postSearchResult= document.getElementById("users");
    postSearchResult.innerHTML="No Search Result";
    // Redirect to login page or handle accordingly
  
}


} catch (err) {

console.log('Error fetching users:', err);

}

};

//funtion for user Serahc display
function UserSearchDisplay(searchResult){

    var postSearchResult= document.getElementById("users");
    postSearchResult.innerHTML="";
    
    if (searchResult.length === 0) {
        postSearchResult.innerHTML='No user Available';
        return;
    };
    //for loop
    searchResult.forEach (user => {
    
        const postElement= document.createElement('div');
        postElement.classList.add("Header");

        postElement.innerHTML=
    
        // Add Username On Post
        `
          <div id="Header">${user.FirstName}</div>
          <div id="Header2" data-email="${user.Email}">${user.Email}</div>
         <button id="followbtn" class="followbtn" >Follow</button>
        
        `
        postSearchResult.appendChild(postElement);
    });
    //selct follow button
   const followbtn= document.querySelectorAll(".followbtn");

//for loop
   followbtn.forEach(button =>{
     button.addEventListener("click",(event) =>{
        const followingEmail = event.target.previousElementSibling.getAttribute("data-email");
        console.log("Following email:", followingEmail); 
        UserFollow(followingEmail);

    });

  });

};
    
//user follow function
async function UserFollow (followingEmail) {
const followingMail = JSON.stringify({followingEmail});

console.log(followingMail); 

//sends fetch request to server
try {

    console.log("Sending data to the server..."); 
    
    const response = await fetch('http://localhost:8080/M00904655/follow', {
    
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
    
        body : followingMail,
        credentials: 'include' 
    
    });
    
    
    console.log(followingMail); 
    
    if (!response.ok) {
    
        const result = await response.json();   
        console.log(result);//debug 
        alert('User not Followed ');//on dialog box
       
        
        } else {
            const result = await response.json();
            console.log(result);
            alert('User  Followed successfully');
            
            clearResearchResult();
            DisplayFollwedUsers(followingEmail);
            fetchFollowersPosts(followingEmail);
            
        }
        
        }
    
    catch(err) {
    
    console.log("error following user"+ err);
     alert('Content Posting FAILED. error in storing');

    }


}



//ffunction for folowers Post fetch
async function fetchFollowersPosts(followingEmail){

    //sends fetch request to server
    try  {

        console.log("Uploading process...."); // Debugging message
    
        const response = await fetch ('http://localhost:8080/M00904655/content', {
    
            method: 'GET',
            headers:  {'Content-Type' : 'application/json'


             }, 

            credentials: 'same-origin'

        });
    

if (response.ok) {

    const posts = await response.json();

    console.log("Posts of following: ", posts); 

     DisplayFollowersPosts(posts,followingEmail);

} else {

    console.log('Failed to fetch followers posts.');
    console.error("Failed to fetch posts retsy ann");
  
}


} catch (err) {

console.log('Error fetching content:', err);

}

};

//function to display Followed users
 function DisplayFollwedUsers(followingEmail){

    var FollwedUsers= document.getElementById("FollowedUsers");
    FollwedUsers.innerHTML="";
    
  
    
        const FollowedUserElement= document.createElement('div');
        FollowedUserElement.classList.add("HeaderOne");
    
        const username = followingEmail.split('@')[0];

        FollowedUserElement.innerHTML=
        // Add Username 
    
        `
           <h3 id="Followed">Followed users:</h3> 
             
           <Div id="usersFollowed">

          <div id="HeaderOne">${username}</div>
          <div id="Header2" data-email="${followingEmail}">${followingEmail}</div>
          <button id="unfollowbtn" class="unfollowbtn"> Unfollow</button>

          </Div>

        `
        FollwedUsers.appendChild(FollowedUserElement);


   const unfollowbtn= document.querySelectorAll(".unfollowbtn");


   unfollowbtn.forEach(button =>{
     button.addEventListener("click",(event) =>{
        const unfollowingEmail = event.target.previousElementSibling.getAttribute("data-email");//eto
        console.log("Following email:", unfollowingEmail); 

       UserUnfollow(unfollowingEmail);

       // Remove the unfollowed user from the sidebar
       event.target.parentElement.remove();
       
    });

  });

 }


 //TEST TO DISPLAY USER FOLLOWED POSTS

    function DisplayFollowersPosts(posts,followingEmail) {


        console.log("Email with user post: ",followingEmail);

        const postSection = document.getElementById("PostsContainer");
        postSection.innerHTML = '';  // Clear the container first
    
        if (posts.length === 0) {
            postSection.innerHTML = 'No posts available from followed users.';
            return;
        }
    
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
    

            postElement.innerHTML =  `
              
              <div id="Header2" data-email="${followingEmail}">${followingEmail}</div>
                <h3>${post.Title}</h3>
                <p><strong>Caption:</strong> ${post.Comment}</p>
            `;


            postSection.appendChild(postElement);
        });

    };


async function UserUnfollow (unfollowingEmail){

    const unfollowingMail = JSON.stringify({unfollowingEmail});
    console.log(unfollowingMail); 

   //sends fetch request to server
    try {
    
        console.log("Deleting process..."); 
        
        const response = await fetch('http://localhost:8080/M00904655/follow', {
        
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
        
            body : unfollowingMail,
            credentials: 'include' 
        

        });
        
        if (!response.ok) {
        
            const result = await response.json(); 
            console.log(result);//debug 
            alert('User not Unfollowed ');//on dialog box
           
            
            } else {
                const result = await response.json();
                console.log(result);
                alert('User Unfollowed successfully');
              
                 // Clear the followed user's posts from the UI
                 clearFollowedUserPosts(unfollowingEmail);
                 clearFollowedUsersHTML();
             

            } 
        } catch(err) {
        console.log("error unfollowing user : "+ err);
         alert('Content Posting FAILED. error in storing');
        }


};

//function to clear followed users
function clearFollowedUsersHTML() {
            
    var FollwedUsers= document.getElementById("FollowedUsers");
    FollwedUsers.innerHTML="";

 }

//function to clear followed users posts
 function  clearFollowedUserPosts(unfollowingEmail) {
    const userPosts = document.querySelectorAll(`[data-email="${unfollowingEmail}"]`);


    if (userPosts.length > 0) {
       userPosts.forEach(post =>{
        
        
        const PostContainer = post.closest('.post');

        if (PostContainer){

                PostContainer.remove();
             console.log("Removed posts for unfollowed users");
             alert("Cannot see unfollowed users' posts. ");
    
            console.log(`Removed posts for user: ${unfollowingEmail}`);
    

        }

    });

    }

 else {
    console.log(`No posts found for user: ${unfollowingEmail}`);
    alert("Cannot remove user's posts.");
    console.log("Cannot see unfollowed user's posts for deletion.");
}
  


 };


 function clearResearchResult() {
    const postSearchResult = document.getElementById("users");
    postSearchResult.innerHTML = "";  // This clears the HTML content
    console.log("Search results cleared.");
}

