 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDuT4QXSzRj9yCJFtLGhhMb_9pfgh4NqXY",
  authDomain: "project-95-23e46.firebaseapp.com",
  projectId: "project-95-23e46",
  storageBucket: "project-95-23e46.appspot.com",
  messagingSenderId: "126703570547",
  appId: "1:126703570547:web:9a34f558b49d6e0daae406"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!"; 

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}