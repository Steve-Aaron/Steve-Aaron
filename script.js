let fname;

$(document).ready(function () {
  $("#page2").hide(0); $("#page3").hide(0);  
  $("#page1").show(500);
    $("#main").addClass("bg-secondary");
    $("#main").removeClass("bg-primary");
    $("#btnPage2").click(function () {
      $("#page3").hide(0);  
      fname = document.getElementById('firstname').value;
      if (fname) {
        $("#page1").hide(500);
      $('.name-insert').each(function() {
        $(this).html(fname);
        if ($(this).is('input')) {
          $(this).val(fname);
        }
      });
      $("#page2").show(0);
    } else {
      alert("Please enter your name"); 
    }
    });

    $("#btnPage1").click(function () {
      $("#page1").show(500);
      $("#page2").hide(0);
      $("#page3").hide(0);  
    });
  });

  document.getElementById('fm-assessment-submission-form').addEventListener('submit', submitForm); // listen for submit event, call submitForm function

function submitForm(e) {
    e.preventDefault(); // prevent default form submission
    let firstname = getElementVal("firstname");
    let lastname = getElementVal("lastname");
    let email = getElementVal("email_this");
    let question_one_question = document.getElementById("question-one-label").innerHTML;
    let question_one_answer = getElementVal("question-one-answer");
    let question_two_question = document.getElementById("question-two-label").innerHTML;
    let question_two_answer = getElementVal("question-two-answer");
    let question_three_question = document.getElementById("question-three-label").innerHTML;
    let question_three_answer = getElementVal("question-three-answer");
    let question_four_question = document.getElementById("question-four-label").innerHTML;
    let question_four_answer = getElementVal("question-four-answer");
    let question_five_question = document.getElementById("question-five-label").innerHTML;
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
        question_one_question: question_one_question,
        question_one_answer: question_one_answer,
        question_two_question: question_two_question,
        question_two_answer: question_two_answer,
        question_three_question: question_three_question,
        question_three_answer: question_three_answer,
        question_four_question: question_four_question,
        question_four_answer: question_four_answer,
        question_five_question: question_five_question,
        question_five_answer: question_five_answer,
        date_submitted: Date.now().toString()
    });
};