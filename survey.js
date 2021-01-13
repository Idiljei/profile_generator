const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
"What's your name?",
"What's an activity you like doing?",
"What do you listen to while doing that",
"Which meal is your favourite (eg: dinner, brunch, etc",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"
]

;

let answers = [];   //where we store the answers to the questions 



rl.question(questions[0], (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answers.push(answer) //pushing answer into answer array to store it 
  
  rl.question(questions[1], (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answers.push(answer) //pushing answer into answer array to store it 
    rl.question(questions[2], (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answers.push(answer) //pushing answer into answer array to store it 
      rl.question(questions[3], (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        answers.push(answer) //pushing answer into answer array to store it 
        rl.question(questions[4], (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          answers.push(answer) //pushing answer into answer array to store it 
          rl.question(questions[5], (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            answers.push(answer) //pushing answer into answer array to store it 
            rl.question(questions[6], (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              answers.push(answer) //pushing answer into answer array to store it 
              console.log(`${answers[0]} loves ${answers[1]} and listening to ${answers[2]} while eating ${answers[3]} and more ${answers[4]} and watches ${answers[5]} and superpower is ${answers[6]}`); //stringing answers together to make profile 
              rl.close();
            });
          });
        });
      });
    });
  });     
});

