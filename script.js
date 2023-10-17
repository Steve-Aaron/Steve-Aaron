let fname;
console.log('Please do not look at the source code for cheats and hints... you have the internet for that!');

$(document).ready(function () {
  tod();
  
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
      populateQuestions();
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


function tod() {
  let hour = new Date().getHours();
  if (hour >= 2 && hour < 12) {
    // $("#tod").replace("Good Morning");
    $("#tod").html("Good Morning, and ");
  } else if (hour >= 12 && hour < 18) {
    $("tod").html("Good Afternoon, and ");
  } else {
    $("tod").html("Good Evening, and ");
  }
}

function populateQuestions() {
  $("#question-one-label").html("Question one: Suppose you are looking after a new eCommerce direct-to-consumer website, and you want to track the website's sales. What trackers might you install on the website to evaluate its performance, and why?");
  $("#question-two-label").html("Question two: Suppose a client has recently launched a newsletter signup widget for their business-to-business brand. How would you track the number of signups to the newsletter?");
  $("#question-three-label").html("Question three: Suppose a client is looking to generate leads for their business through Meta advertising. Which of the following metrics would be the most useful for evaluating the success of their campaign?");
  $("#question-four-label").html("Question four: What is A/B testing? Give an example of an A/B test you could run on this site.")
  $("#question-five-label").html("Question five: A business spends £5,000 on a Facebook ad campaign and reaches 50,000 people. If the cost per click (CPC) is £1.50, what is the click-through rate (CTR) for the campaign?");
}

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
    // let question_six_question = document.getElementById("question-six-label").innerHTML;
    // let question_six_answer = getElementVal("question-six-answer");
    let sponsorship_question = document.getElementById("sponsorship-label").innerHTML;
    let sponsorship_answer = getElementVal("sponsorship-answer");
    

    saveMessage(firstname, lastname, email, question_one_question, question_one_answer, question_two_question, question_two_answer, question_three_question, question_three_answer, question_four_question, question_four_answer, question_five_question, question_five_answer, sponsorship_question, sponsorship_answer); // save message to firebase
    const successPage = () => {
        console.log("success_page");
        $("#page3").show(500);
        $("#page1").hide(0);
        $("#page2").hide(0);
        };

successPage();
    };

const getElementVal = (id) => document.getElementById(id).value; // get value of input field

const saveMessage = (firstname, lastname, email, question_one_question, question_one_answer, question_two_question, question_two_answer, question_three_question, question_three_answer, question_four_question, question_four_answer, question_five_question, question_five_answer, sponsorship_question, sponsorship_answer) => {
    let newContactFormDB = contactFormDB.push();
    const submissionId = newContactFormDB.key;
    newContactFormDB.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        question_1_question: question_one_question,
        question_1_answer: question_one_answer,
        question_2_question: question_two_question,
        question_2_answer: question_two_answer,
        question_3_question: question_three_question,
        question_3_answer: question_three_answer,
        question_4_question: question_four_question,
        question_4_answer: question_four_answer,
        question_5_question: question_five_question,
        question_5_answer: question_five_answer,
        sponsorship_question: sponsorship_question,
        sponsorship_answer: sponsorship_answer,
        date_submitted: new Date().toISOString().slice(0, 16).replace('T', ' ')
    });
    console.log('submission ID is ' + submissionId);
    $("#submissionId").html(submissionId); 
};