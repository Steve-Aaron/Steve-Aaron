/* FUNCTIONING OPENAI CALL
 RETURNS PROMPT BASED ON TOPIC */

const { Configuration, OpenAIApi } = require("openai");

const api_key = "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";

const configuration = new Configuration({
  apiKey: api_key,
});

const openai = new OpenAIApi(configuration);

let default_topics = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Data Science",
  "Data Engineering",
  "Data Analysis",
]

let topic = 'trophy hunting' // default_topics[Math.floor(Math.random() * default_topics.length)]
let prompt_type = "history" // select one of: 'guide', 'introduction', 'history'.

let prompt, prompt_headline, prompt_intro, prompt_history, prompt_why_use;
const prompt_topic = topic.toLowerCase().replace(' ', '-');

let prompt_slug = () => {
  switch (prompt_type) {
    case 'guide':
      switch ((Math.floor(Math.random() * 3))) {
        case 0:
          return 'your-complete-guide-to-' + prompt_topic;
          break;
        case 1:
          return 'getting-started-with-' + prompt_topic;
          break;
        case 2:
          return 'guide-to-mastering-' + prompt_topic;
          break;
      }
      break;
    case 'introduction':
      switch ((Math.floor(Math.random() * 3))) {
        case 0:
          return 'introduction-to-' + prompt_topic;
          break;
        case 1:
          return 'what-is-' + prompt_topic;
          break;
        case 2:
          return 'overview-of-' + prompt_topic;
          break;
      }
      break;
    case 'history':
      switch ((Math.floor(Math.random() * 3))) {
        case 0:
          return 'history-of-' + prompt_topic.replace(' ', '-');
          break;
        case 1:
          return 'a-brief-history-of-' + prompt_topic.replace(' ', '-');
          break;
        case 2:
          return 'the-complete-history-of-' + prompt_topic.replace(' ', '-');
          break;
      }
      break;
  }
};
console.log('slug: ' + prompt_slug());

// set the basic everything, except the max_tokens, as a variable.

let model = "text-davinci-003"
let temperature = 0.7
let top_p = 1
let frequency_penalty =  0.7
let presence_penalty = 0.4
let stop = "A:"

// Write the blog headline:
;(async ()=>{
let prompt = "Write the headline to a blog article about: " + prompt_topic + "A:" // writes the blog introduction
 response = await openai.createCompletion({
prompt: prompt,
max_tokens: 50,
model: model,
temperature: temperature,
top_p: top_p,
frequency_penalty: frequency_penalty,
presence_penalty: presence_penalty,
stop: stop,
});
prompt_headline = response.data.choices[0].text;
console.log('headline: ' + prompt_headline)

// Write the blog introduction:
    prompt = "Write a three paragraph introduction to a blog article with the headline: " + prompt_headline + ". Use `\n` to create a new paragraph. A:" // writes the blog introduction
   response = await openai.createCompletion({
  prompt: prompt,
  max_tokens: 250,
  model: model,
  temperature: temperature,
  top_p: top_p,
  frequency_penalty: frequency_penalty,
  presence_penalty: presence_penalty,
  stop: stop,
  });

prompt_intro = response.data.choices[0].text;
console.log('intro: ' + prompt_intro.length + ' words')

// Write the blog history:

prompt = "Write a three paragraph summary of the history of " + prompt_topic + " to a blog article with the headline: " + prompt_headline + "A:" // writes the blog introduction
   response = await openai.createCompletion({
  prompt: prompt,
  max_tokens: 250,
  model: model,
  temperature: temperature,
  top_p: top_p,
  frequency_penalty: frequency_penalty,
  presence_penalty: presence_penalty,
  stop: stop,
  });

  prompt_history = response.data.choices[0].text;
  console.log('history: ' + prompt_history.length + ' words')



// Now write about some of the most important people who have contributed to the topic.

prompt = "Write about some of the most important individuals or companies who have done the most to advance the field of " + prompt_topic + " for a blog article with the headline: " + prompt_headline + "\nA:" // writes the blog introduction
   response = await openai.createCompletion({
  prompt: prompt,
  max_tokens: 250,
  model: model,
  temperature: temperature,
  top_p: top_p,
  frequency_penalty: frequency_penalty,
  presence_penalty: presence_penalty,
  stop: stop,
  });

  prompt_experts = response.data.choices[0].text;
  console.log('experts: ' + prompt_experts.length + ' words'))

})();

let url, options;
const { json } = require('express/lib/response');
const fetch = require('node-fetch'); // node-fetch is a library that allows you to make HTTP requests in Node.js.

const wf_type = 'sites'; // the type of Webflow object you want to use.
const wf_token = '8e89cd9439c611329b74da9593e01031e456fc02e8b4e726adb267c3df174699'; // The API token for your Webflow account.
const site_id = '6074b7cf4935e8f1e3b0ce56'; // The ID of the site you want to use.
let bp_col_id = '6074b7cf4935e85342b0ce6a' // The ID of the collection you want to use.
let limit = 10; // max limit: 100.
let offset = 0; // offset is the number of pages to skip, the number of pages set to the limit. So if you want to skip 10 pages, set offset to 1 and limit to 10, or offset to 2 and limit to 5.
let publish_slug, publish_title, publish_body, publish_name;
let publish_status = 'false';

//CREATE A WEBFLOW ITEM WITH SLUG, TITLE AND BODY FROM VARIABLES. 

publish_slug = prompt_slug
publish_title = 'Test Title';
publish_body = 'Test Body';
publish_name = 'Test Name';
archived = 'false';
draft = 'false';
featured = 'false';

url = 'https://api.webflow.com/collections/' + bp_col_id + '/items?live=' + publish_status + '&access_token=' + wf_token;
options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    fields: {
      slug: publish_slug,
      name: publish_name,
      _archived: archived,
      _draft: draft,
      'featured-post': featured,
      'post-title': publish_title,
      'post-body': publish_body

    }
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log('published!'))
  .catch(err => console.error('error:' + err));



/* TO PUBLISH WEBFLOW SITE

 url = 'https://api.webflow.com/' + wf_type + '/' + site_id + '/publish' + '?access_token=' + wf_token;
 options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({domains: ['campaigning-digital.webflow.io']})};

;(async ()=>{
fetch(url, options)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.error('error:' + err));
  
})(); 

*/

// OTHER USEFUL CODE

/* GET THE FIRST WEBFLOW ITEM'S SLUG

url = 'https://api.webflow.com/collections/' + bp_col_id + '/items?access_token=' + wf_token + '&limit=' + limit + '&offset=' + offset; // The URL of the API endpoint you want to use.

options = {
  method: 'GET',
  headers: {accept: 'application/json'}}; // The options for the request. In this case, we're using the GET method and we're expecting a JSON response.

  fetch(url, options)
  .then(res => res.json())
  .then((data) => {
    console.log(data.items[0].slug);
  })
  .catch(err => console.error('error:' + err));

  */

/* TO GET A LIST OF WEBFLOW SITE COLLECTIONS 

url = 'https://api.webflow.com/sites/' + site_id + '/collections?access_token=' + wf_token;

options = {
  method: 'GET',
  headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

   */

/* TO LIST A WEBFLOW SITE COLLECTION'S PROPERTIES

url = 'https://api.webflow.com/collections/' + bp_col_id + '?access_token=' + wf_token;
options = {method: 'GET', headers: {accept: 'application/json'}};
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json.fields))
  .catch(err => console.error('error:' + err));

  */

/* TO CHECK WEBFLOW SITE ID


const wf_type = 'sites';
const site_id = '6074b7cf4935e8f1e3b0ce56';
const wf_token = '8e89cd9439c611329b74da9593e01031e456fc02e8b4e726adb267c3df174699';

const url = 'https://api.webflow.com/' + wf_type + '?access_token=' + wf_token;
const options = {method: 'GET', headers: {accept: 'application/json'}};

;(async ()=>{
fetch(url, options)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.error('error:' + err));
  
})();

*/