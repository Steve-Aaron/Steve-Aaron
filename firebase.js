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

document.getElementById('fm-assessment-submission-form').addEventListener('submit', submitForm); // listen for submit event, call submitForm function

function submitForm(e) {
    e.preventDefault(); // prevent default form submission
    let firstname = getElementVal("firstname");
    let lastname = getElementVal("lastname");
    let email = getElementVal("email_this");
    let question_one_answer = getElementVal("question-one-answer");
    let question_two_answer = getElementVal("question-two-answer");
    let question_three_answer = getElementVal("question-three-answer");
    let question_four_answer = getElementVal("question-four-answer");
    let question_five_answer = getElementVal("question-five-answer");

    saveMessage(firstname, lastname, email, question_one_answer, question_two_answer, question_three_answer, question_four_answer, question_five_answer); // save message to firebase

    const successPage = () => {
        console.log("success_page");
        $("#page3").show(500);
        $("#page1").hide(0);
        $("#page2").hide(0);
        };

successPage();
    };

const getElementVal = (id) => document.getElementById(id).value; // get value of input field

const saveMessage = (firstname, lastname, email, question_one_answer, question_two_answer, question_three_answer, question_four_answer, question_five_answer) => {
    let newContactFormDB = contactFormDB.push();
    newContactFormDB.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        question_one_answer: question_one_answer,
        question_two_answer: question_two_answer,
        question_three_answer: question_three_answer,
        question_four_answer: question_four_answer,
        question_five_answer: question_five_answer,
        date_submitted: Date.now().toString()
    });
};