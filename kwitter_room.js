var firebaseConfig = {
      apiKey: "AIzaSyBPx2a5ep9sUrvv0YvcZsL1o1zSXtC8-Xw",
      authDomain: "kwitter-de98b.firebaseapp.com",
      databaseURL: "https://kwitter-de98b-default-rtdb.firebaseio.com",
      projectId: "kwitter-de98b",
      storageBucket: "kwitter-de98b.appspot.com",
      messagingSenderId: "926417219535",
      appId: "1:926417219535:web:aae6efd1d6a29b01bcacba",
      measurementId: "G-JFB1XNTT0N"
    };
    
    
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
