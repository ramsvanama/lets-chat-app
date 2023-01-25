// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// var firebaseConfig = {
//     apiKey: "AIzaSyAvpFEPhkuVqBdztELHUHzY7q3Ov_XLJ1c",
//     authDomain: "lets-chat-app-1eeff.firebaseapp.com",
//     databaseURL: "https://lets-chat-app-1eeff-default-rtdb.firebaseio.com",
//     projectId: "lets-chat-app-1eeff",
//     storageBucket: "lets-chat-app-1eeff.appspot.com",
//     messagingSenderId: "709373945394",
//     appId: "1:709373945394:web:46dfc45c3f8e792649be2b"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    // firebase.database().ref("/").child(user_name).update({
    //     purpose : "adding user"
    // });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



