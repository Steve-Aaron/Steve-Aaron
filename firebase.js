
const firebaseConfig = {
    apiKey: "AIzaSyDGIUHqIYcMWJru32k7Hd_gt3hfi5-42Hg",
    authDomain: "demonstration-project-369716.firebaseapp.com",
    databaseURL: "https://demonstration-project-369716-default-rtdb.firebaseio.com",
    projectId: "demonstration-project-369716",
    storageBucket: "demonstration-project-369716.appspot.com",
    messagingSenderId: "879845157063",
    appId: "1:879845157063:web:06a0a453ac0761a6ebf6e2",
    measurementId: "G-FPKJR669V6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref('contactForm');