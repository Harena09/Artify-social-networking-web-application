
//Import the express module
import express from 'express';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import fileUpload from 'express-fileupload';
import {insertOne, insertMany, find, updateOne, updateMany, deleteOne, deleteMany, deletebyObjectID,findPosts,insertFollower, uploadContent,deleteFollower,SearchUsers,findFollows,ObjectId} from './mongodb.js';



//The express module is a function. When it is executed it returns an app object
const app = express();
//const path = require ('path');
app.use(bodyParser.json()); 
app.use(fileUpload());



//configure Express to use express-session
app.use(

    expressSession({

        secret: ' my secret',
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
        resave: false,
        saveUninitialized: true

    })
)


// Attempt to create server path with student ID with filepath

/*
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const path = require('path');
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

*/


// Attempt to of server sert up with http library
/*
 let STUDENTID = "M00904655";

var {createServer} = require('http');

//create a server object

const server = createServer (( request,response) => {

    response.writeHead (200, {'Content-Type' : 'text/html' });

    response.write('');
    return response.end();
});

*/


//Set up express to serve static files from the directory called 'public'
app.use(express.static ('public'));



app.post('/M00904655/login', login);
app.get('/M00904655/login', checklogin);
app.delete('/M00904655/login', logoutdelete);
app.get('/M00904655/profile', getprofile);
app.post('/M00904655/contents', contents);
app.get('/M00904655/contents', getContents);
app.post('/M00904655/follow', follow);
app.delete('/M00904655/follow', unfollow);

app.get('/M00904655/users/search', SearchforUsers);
app.get('/M00904655/content', getFollowingContents);




//Sign up post method
app.post ('/M00904655/users', async (request,response) => {


    const { FirstName, LastName, Age, Email, Password } = request.body;


    const signupDetails = {

        FirstName, 
        LastName, 
        Age ,
        Email ,
        Password  

    } ;


//Storing data object in Mongo db
try {

    const results = await insertOne(signupDetails);
    console.log(results);
    console.log( ' new user Update:', signupDetails);

    //JSON response 
    response.status(201).json ({

        message: ' 3. User created successfully!',
        user: signupDetails,

           });


}

catch (err){

    console.error('Error registering user:', err);
    response.status(500).json({ message: 'Internal Server Error' });
    }

});


//get request for registration form data 
app.get('/M00904655/users', async (request,response) =>{


    try {

        
        const users = await find();
        console.log("All Users data received.");
        response.json(users);
    }
    
    catch (err){
    
        console.error('Error fecthing user:', err);
        console.log("Cant fetch user",err);
        response.status(500).json({ message: 'Internal Server Error' });
        }


});


// Post login function
async function login(request, response) {

    let userLogin = request.body;

    console.log ("Login Attempt: " + userLogin.Email + " password: " + userLogin.Password);

    /* Checks the user's name and password.Logs them in if they match
    Expects a JavaScript object in the body: */

   try  {

    //retrieve data from mongodb function
    const users = await find({Email: userLogin.Email});

        if(users && users.length > 0 ) {

        const user = users [0];

            if(user.Password === userLogin.Password){

                request.session.username = user.Email;
                console.log("Login successful for:", user.Email);
                return response.json({login:true}); 
                
            }
            else {

             //check if password is correct
           console.log("Password mismatch for user:", user.Email);
            return response.json({login:false, message: 'password incorrect'});
         //  return response status
            }

            } 
            
            else {

               
             console.log("User not found:", userLogin.Email);
           // return response.send
             return response.json({login:false, message:'Username or Password incorrect'});
            }
                
}

catch (err) {

    console.error('Login error:', err);
   return response.status(500).json({ message: 'Internal Server Error' });

};

};


// GET request checklogin. Checks to see if the user has logged in
async function checklogin(request, response) {

if((request.session.username)){

    response.status(200).json({login:true, CurrentUsername:  
        request.session.username  });  
        console.log("user is logged in");
}
  else {
    //sends response status
        response.status(401).json({login: false,message:"No user logged in"});

    }

};

//get request to fetch logged in user profile information
async function getprofile(request, response) {


    //check if username is stored in the session
if((request.session.username)){

    const email = request.session.username;
     // Query the database to find the user with the matching email
    const user = await find ({Email: email});
    console.log('User found:', user);

    // If user data is found, return the user profile to the client

     if (user && user.length > 0) {

   //return username data
        return response.json({ login: true, CurrentUsername: request.session.username, username: user[0].Email });//stops here
        
    } else {

        console.log("Username not found");
        return response.status(404).json({ message: 'User not found' });
    }

}

else {

    console.log("no user logged in");
     response.status(401).json({login: false,message:"No user logged in"});

 }

};


//Delete request for log out
async function logoutdelete(request, response){

//check if username is stored in the session
if(!request.session.username) {

//resturn json response
    return response.status(400).json ({
    login: false,
     message: "No user is logged in to log out."

 });

};

  //Destroy session. make sure that userid in mongodb is deleted
  request.session.destroy ((err) => {

    if(err) {

            console.log("Failed to log out and destroy session");

            response.send('{"error": '+ JSON.stringify(err) + '}');
    }
    
    console.log("SUCCESSFUL LOG OUT");
   response.status(200).json ({login:false,message: 'CONGRATS User has logged out '});
   
 });

};

// post request for content
async function contents(request, response) {


    if (!request.session.username){

        return response.status(400).json({message: 'User not logged in.' })
    }


    const { ContentType, Title, Comment } = request.body;// asked from the front end


    const email = request.session.username;

    try {


        const user = await find ({Email:email});

        if (user && user.length > 0){

            const userId = user[0]._id;//user inside of the array

          const content = {

            userId: userId,
            ContentType,
            Comment,
            Title,
            createdAt: new Date()

         };


    const result = await uploadContent(content);

  // Check the result of insertOne
  console.log('Content inserted:', result);

    response.status(201).json({

        message: 'Content uploaded successfully',
        contentId: result.insertedId // Return the MongoDB ID of the content

    });

  }  else {

    response.status(404).json({ message: 'User not found'});
       // Return the MongoDB ID of the content 

    }


 }  catch (err) {


    console.error('Error uploading:',err);
    response.status(500).json({ message: 'Internal Server Error'});
   

    }   

};


//Get all posts of the logged in user
async function getContents(request, response) {

    if (!request.session.username){

        return response.status(400).json({message: 'User not logged in.' })
    }

    const email = request.session.username;


    try{

        const user = await find ({Email:email});//find based on Email


        if (user && user.length > 0){

            const userId = user[0]._id;


const contents = await findPosts({userId:userId});//find based on User Id

  // Log the fetched contents to ensure they're being returned
  console.log('Fetched contents:', contents);

    response.status(200).json(contents);

  }  else {

    response.status(404).json({ message: 'User not found'});
       // Return the MongoDB ID of the content 

    }


 } catch(err) {


    console.error('Error fetching content:',err);
    response.status(500).json({ message: 'Internal Server Error'});
   
    }   

};



//post follow request

async function follow(request,response) {

    if (!request.session.username){

        return response.status(400).json({message: 'User not logged in.' })
    }

//logged in user
     const followerEmail = request.session.username;
//STORAGE IN MONGODB
      const {followingEmail} = request.body;//user to follow



  try {


    const follower = await find({Email: followerEmail});//userlogged in 
   
    const UsertoFollow= await find({Email: followingEmail}); //Find user to follow


    console.log(follower ,"is following ", UsertoFollow);//debug mande atreto
    console.log( '2. new Following Update list:', UsertoFollow);


if(!follower || follower.length===0){
    
    console.log("User logged not found")
    return   response.status(404).json ({  message: 'User not found'});

}

if(!UsertoFollow || UsertoFollow.length===0){

    console.log("User to follow not found")
    return   response.status(404).json ({  message: 'User to follow not found'});

}

    const followerId = follower[0]._id;
    const followingId = UsertoFollow[0]._id;
    

 // Check if the user is already following the other user
 const existingFollow = await find({
    followerId: followerId,
    followingId: followingId
});


if(existingFollow && existingFollow.length>0) {//check if user already followed

    console.log("User already followed");
    return  response.status(200).json ({  message: ' User Already followed'});

}


const newFollows = {
    followerId: followerId,
    followerEmail: follower[0].Email,
    followingId: followingId,
    followingEmail: UsertoFollow[0].Email,
    followedAt: new Date()
};


const result = await insertFollower(newFollows);

console.log("User followed!!");
console.log(result);
return  response.status(200).json ({  message: ' User followed successfully'});

} catch (err){

    console.error('Error following user:', err);
    console.log("Can't follow user",err);
    response.status(500).json({ message: 'Internal Server Error' });
    }

};


async function unfollow(request,response) {


    if (!request.session.username){

        return response.status(400).json({message: 'User not logged in.' })
    }


//logged in user

     const followerEmail = request.session.username;
//STORAGE IN MONGODB
      const {unfollowingEmail} = request.body;//user to follow

  try {

    const follower = await find({Email: followerEmail});//userlogged in 
   
    const UsertoUnFollow= await find({Email: unfollowingEmail}); //Find user to unfollow

    console.log(follower ,"is to unfollowing ", UsertoUnFollow);

    console.log('USER TO UNFOLLOW: ', UsertoUnFollow);// TSY MANDE
   

if(!follower || follower.length ===0){
    
    console.log("User logged not found")
    return   response.status(404).json ({  message: 'User not found'});

}

if(!UsertoUnFollow || UsertoUnFollow.length ===0){

    console.log("User to unfollow not found")
    return   response.status(404).json ({  message: 'User to unfollow not found'});

}


    const followerId = follower[0]._id;//METY ATO 
    const followingId = UsertoUnFollow[0]._id;
    

 // Check if the user is already following the other user
 const existingFollow = await findFollows({

    followerId: followerId,
    followingId: followingId

});


if(!existingFollow || existingFollow.length === 0) {//check if user already followed

    console.log("User not followed. No relationship found between those two.");
    return  response.status(200).json ({  message: ' User not followed'}); // ato fona le izy tsy mande

}


const result = await deleteFollower({ followerId, followingId });

console.log("User unfollowed");
console.log(result);
return  response.status(200).json ({  message: ' User unfollowed successfully'});


} catch (err){

    console.error('Error unfollowing user:', err);
    console.log("Can't unfollow user",err);
    response.status(500).json({ message: 'Internal Server Error' });
    }

};


// get users search
async function SearchforUsers(request,response) {


   const query = request.query.q;

      if (!query) {
    
      return response.status(400).json({ error: 'Query parameter is required' });

      }

     console.log('Search query:', query);//query passed


    try {

        const result = await SearchUsers( {"$or": [
                { "FirstName":{ "$regex": query,"$options":"i"}},
                { "Email":{ "$regex": query,"$options":"i" }}
            ]});


        if (result.length === 0 ){

            console.log("No users found")
            return response.status(404).json({ message: 'No users found' });

        }

        console.log("Search Result: ",result);
        console.log("User researched found.");
        return response.status(200).json(result);

    } catch (err) {

        console.log(" ERROR DURING RESEARCH:",err);
        return response.status(200).json({message: 'Internal Server Error '});

    }


};

//get followcontent
async function getFollowingContents(request,response){

 const followerEmail = request.session.username;
 console.log('logged in user: ', followerEmail);

    if (!followerEmail){

        return response.status(400).json({message: 'User not logged in.' })
    }


    try {


        const Follower = await findFollows({ followerEmail:followerEmail });//find based on Email
        console.log('Follower :', Follower);

       const FollowingUserId = Follower.map(follow => follow.followingId);
       console.log('Following Id: ', FollowingUserId); //found


        if (FollowingUserId.length === 0){


           return response.status(404).json({message: 'No users followed yet.'})

        }

 const contents = await findPosts({ userId: { $in: FollowingUserId} });

   
  // Log the fetched contents to ensure they're being returned
  console.log('Fetched Followers contents:', contents);
  response.status(200).json(contents);

  }  


 catch (err) {


    console.error('Error fetching content:',err);
    response.status(500).json({ message: 'Internal Server Error'});
   

    }   


};



//Start the app listening on port 8080
app.listen(8080, function(){

    console.log("Listening on port 8080.");
    
    });
    


