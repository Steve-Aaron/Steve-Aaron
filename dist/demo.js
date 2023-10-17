let data =
[
    {
        "question": "What analytics tools would you put on this website?",
        "question_type": "Analytics",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "Suppose we create a website for reviewing job applications. We want to make sure people are spending time answering each question, and but don't take more than twenty minutes to complete the test. What might our metrics be?",
        "question_type": "Analytics",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "What is A/B testing, and what impactful A/B test would you make for <a href=\"https://health-ade.com/products/kombucha-fruity-favorites-variety-cans/\">Health-Ade</a>?",
        "question_type": "Analytics",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "What is the purpose of page tagging?",
        "question_type": "Analytics",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "What is the difference between quantitative and qualitative analytics?",
        "question_type": "Analytics",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "What are some effective ways to measure the success of a digital marketing campaign?",
        "question_type": "Digital Strategy",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "How do _you_ stay current with the latest trends and changes in the digital marketing industry?",
        "question_type": "Digital Strategy",
        "answer_type": "textarea",
        "max_answer_length": 500
    },
    {
        "question": "Suppose a company spends £10,000 on a digital marketing campaign and generates 500 clicks. The conversion rate is 2%. If the company's profit per sale is £100, what is the return on investment (ROI) for the campaign?",
        "question_type": "Marketing Maths",
        "answer_type": "input",
        "max_answer_length": 50
    },
    {
        "question": "A business spends £5,000 on a Facebook ad campaign and reaches 50,000 people. If the cost per click (CPC) is £1.50, what is the click-through rate (CTR) for the campaign?",
        "question_type": "Marketing Maths",
        "answer_type": "numeric",
        "max_answer_length": 32
    },
    {
        "question": "A D2C brand is running a paid search campaign for their new subscription product. Customers who buy from them have an LTV of £500, their cost per click (CPC) is on average £2, and the conversion rate is 10%. If the company wants to generate £20,000 in revenue, how much should they spend on the campaign?",
        "question_type": "Marketing Maths",
        "answer_type": "dropdown",
        "max_answer_length": "[ ] £1,600 | [ ] £10,000 | [ ] £800 | [ ] £8,000"
    }
]

function getQuestions(d) {
    let asking = 5; // how many questions do we ask people?
    let max_question_number = d.length - 1 // suppose 10
    let numbers = getQuestionNumbers(asking, max_question_number);
    };

    const getQuestionNumbers = (returning, max_qs) => {
        let int = Array.from({ length: max_qs + 1 }, (_, i) => i);
        for (let i = 0; i != returning; i++) {
            
        }
        return numbers
    }

getQuestions(data);