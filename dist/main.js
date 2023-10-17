function main () {
    getTimeofDay();
    redOnClick();
    hideModal();
    getStarted();
    };

function getTimeofDay() {
    let val = setGreeting();
    $('#timeOfDay').html(' ' + val);
    // for everything with ID timeOfDay, set the innerHTML to equal the returned value of function setGreeting.
    function setGreeting() {
        var d = new Date();
        var n = d.getHours();
        if (n < 12) {
            return 'morning';
        } else if (n < 18) {
            return 'afternoon';
        } else {
            return 'evening';
        };
    };
}

function redOnClick () {
    $('h1').on('click', function() {
    console.log('clicked');
    $(this).css('color', 'red !important');
    });
};

function hideModal() {
    $('#contact-return').on('click', function() {
        // $('#contact-slider').css('display', 'none');
        $('#contact-slider').animate({width:'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'},350);
    });
    $('#contact-slide-button').on('click', function() {
        $('#contact-slider').animate({width:'toggle', paddingLeft: 'toggle', paddingRight: 'toggle'},750);
    });
};

function getStarted() {
    $('#get-started').on('click', function() {
        $('#stepone').fadeOut(500, function() {
            $('#steptwo').fadeIn(500, function() {
                $('#steptwo > h1').fadeIn(1000, function() {
                    $('#steptwo > h2').fadeIn(1500, function() {
                        $('#steptwo > ul').fadeIn(2000, function() {
                            $('#steptwo > p, #getquestions').fadeIn(2000)
                        })
                    });
                });
            });
        });
    });
}

function viewQuestions() {
    $('#getquestions').on('click', function() {
        console.log('%cStart the quiz – generate questions', 'color:#333;background:#EAEAEA,font-size:2rem;');
    })
}

main();

function displayText() {
    $.get("./res/q/questions.md", function(d) {
        let start = d.slice(d.indexOf('##')).replace(/\n/g, '');
        let format = ['question', 'question_type', 'answer_type', 'max_answer_length']
          questions = []
          let r = start.split("||").filter(e => e[0] === '–')
          r = r.map(q => {
            return [ 
                q.slice(2, q.slice(0, q.lastIndexOf('(')).lastIndexOf(' [')), // returns the question. Goes from the 3rd character, to the last square bracket before the answer type generates. Because if the answer type is a dropdown, it might have checkboxes which are square brackets.
                q.slice(q.slice(0, q.lastIndexOf('(')).lastIndexOf(' [') +2, q.slice(0, q.lastIndexOf('(')).lastIndexOf(']')), // returns the question type.
                q.slice(q.lastIndexOf('(') +1, q.lastIndexOf(')')).slice(0, q.slice(q.lastIndexOf('(') +1, q.lastIndexOf(')')).indexOf(' ')),
                q.slice(q.lastIndexOf('(') +1, q.lastIndexOf(')')).split(' ').slice(1).join(' ')
                ]
            })
            let result = r.map((arr) => {
                return arr.reduce((acc, value, index) => {
                  acc[format[index]] = value;
                  return acc;
                }, {});
            });
            for (let i = 0; i < result.length; i++) {
                if (typeof result[i].max_answer_length === 'string' && !isNaN(parseInt(result[i].max_answer_length))) {
                    result[i].max_answer_length = parseInt(result[i].max_answer_length);
                    }
                }
                console.log(result)
    });
  };  

displayText();