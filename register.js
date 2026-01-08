

//var Fname= document.getElementById('firstName').value;
//var Lname = document.getElementById('lastName').value;
//var MonAge = document.getElementById('age').value;
//var MonEmail = document.getElementById('email').value;
//var MonPassword =  document.getElementById('password').value;
//var signupButton = document.getElementById('signbtn');




//document.addEventListener('DOMContentLoaded',function(){ //"DOM Loaded" means that all of the HTML structure of your page is fully loaded into the browser, and JavaScript can now safely access and interact with it. When the DOM is loaded, the page has finished parsing (reading) the HTML, but images, CSS, and other external resources (like stylesheets, images, etc.) may not be completely loaded yet.
//console.log("register.js is loaded!"); //debug


//const signupForm =  document.getElementById('firstForm');

//if (signupForm) {
 //  signupForm.addEventListener("submit", addUser);
//} else {
 //   console.log("Signup form not found."); //debug
//}

//signupForm.addEventListener("submit",addUser);

/*

  async function addUser(event) {
        event.preventDefault();

        console.log("Event prevented: Form submission stopped.");//debug


  console.log("sign up button clicked!"); //debug


var Fname= document.getElementById('firstName').value;
var Lname = document.getElementById('lastName').value;
var MonAge = document.getElementById('age').value;
var MonEmail = document.getElementById('email').value;
var MonPassword =  document.getElementById('password').value;

//Add Registration validation down here


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



//sends to server
try {

    console.log("Sending data to the server..."); // Debugging message

    const response = await fetch('http://localhost:8080/M00904655/users', {

        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },

        body : UserJSON

    });


//output result 
// get response

if (response.ok) {

const result = await response.json();
console.log(result);//debug but off
alert('User registered successfully')


} else {

    console.log ("Http error:"+ response.status);
}


}

catch(err) {

    console.log("error adding user"+ err);
     alert('REGISTRATION FAILED. error in storing');

 }

}


//});


/*

//start
document.addEventListener('DOMContentLoaded',function (){

var form = document.getElementById('Form');

form.addEventListener("submit", SubmitForm);

function SubmitForm(event) {
event.preventDefault();


let FirstName = document.getElementById("FirstName").value;
let LastName =document.getElementById("LastName").value;
let Email = document.getElementById("email").value;
let PhoneNumber = document.getElementById("PhoneNumber").value;
let Password = document.getElementById("Password").value;


let errormsg = document.getElementById("checkemail");
let errorphn = document.getElementById("checkphn");
let errorpsw = document.getElementById("checkpsw");


if(checkEmail(Email) && checkPhoneNumber(PhoneNumber) && checkPassword(Password)) {

    //make error message disappear
      errormsg.innerHTML="";
      errorphn.innerHTML="";
      errorpsw.innerHTML="";


console.log("First Name:" + FirstName+ ';Last Name: ' + LastName + 
  ';Email: ' + Email + 
    ';Phone Number: ' + PhoneNumber
    



    );

    alert("You've signed up successfully");

   //store info in an array


//const usersList= [];


    const user = {

         firstName: FirstName,
         lastName: LastName,
         email: Email,
         phone: PhoneNumber,
         password: Password,
         scores: []
  };


 
  const userstr = JSON.stringify(user);
  localStorage.setItem(Email,userstr);



if (userstr!== null) {
   console.log(`Data found in local storage: ${userstr}`);
} 

else {
   console.log('No data found in local storage for this key.');
}



window.location.href = 'Login.html';



  }
}


//check email
function checkEmail(Email) {


let errormsg = document.getElementById("checkemail");
const emailregx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!Email.match(emailregx)) {

    errormsg.innerHTML = "Email invalid. Please enter a valid email";
    errormsg.style.color= "red";  
    return false;

}

errormsg.innerHTML = "";
return true;

}



 //Phone number check
function checkPhoneNumber(PhoneNumber){

   
    let errorphn = document.getElementById("checkphn");
    const phoneregx =/^\d{8}$/;
    

    if(!phoneregx.test(PhoneNumber)) {
    
        errorphn.innerHTML = "Please enter a valid 8-digit phone number.";
        errorphn.style.color= "red";  
        return false;
    
    }
    
    errorphn.innerHTML = "";
    return true;
    
    }
    



//Password check
function checkPassword(Password){

let errorpsw = document.getElementById("checkpsw");
const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


if(!passwordregx.test(Password)) {

    errorpsw.innerHTML = "Password must be at least 8 characters long, include uppercase, lowercase letters, and one number.";
    errorpsw.style.color= "red";  
    return false;

}


errorpsw.innerHTML = "";
return true; 

}

});


*/



