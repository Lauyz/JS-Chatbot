// input options
const utterances = [
 
    ["how are you", "how is life", "how are things"], //1
    ["hi", "hey", "hello", "good morning", "good afternoon"], //2
    ["what are you doing", "what is going on", "what is up"], //3
    ["how old are you"], //4
    ["who are you", "are you human", "are you bot", "are you human or bot"], //5
    ["who created you", "who made you"], //6
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ], //7
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"], //8
    ["bad", "bored", "tired"], //9
    ["help me", "tell me story", "tell me joke"], //10
    ["ah", "yes", "ok", "okay", "nice"], //11
    ["bye", "good bye", "goodbye", "see you later"], //12
    ["what should i eat today"], //13
    ["what", "why", "how", "where", "when"], //14
    ["no", "not sure", "maybe", "no thanks"], //15
    [""], //16
    ["haha", "ha", "lol", "hehe", "funny", "joke"], //17
    ["can i ask you a question", "question"], //18
    ["woi", "woii", "dont", "shut up", "talk something"], //19
    ["do you know what are you doing", "can you just", "can you just stop doing that", "stop doing that"], //20
    ["bob"], //21

  ];
  
  // Possible responses corresponding to triggers
  
  const answers = [
     [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
      "Whatever."
    ], //1
    [
      "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy", "Whatever."
    ], //2
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually",
      "Whatever."
    ], //3
    ["I am infinite", "Whatever."], //4
    ["I am just a bot", "I am a bot. What are you?", "Whatever."], //5
    ["The one true God, JavaScript", "Whatever."], //6
    ["I am nameless", "I don't have a name", "Whatever."], //7
    ["Have you ever felt bad?", "Glad to hear it", "Whatever."], //8
    ["Why?", "Why? You shouldn't!", "Whatever."], //9
    ["What about?", "Once upon a time...", "Whatever."], //10
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "Whatever."], //11
    ["Bye", "Goodbye", "See you later", "Whatever."], //12
    ["Pasta", "Burger", "Whatever."], //13
    ["Great question"], //14
    ["That's ok", "What do you want to talk about?", "Whatever."], //15
    ["Please say something :(", "Whatever."], //16
    ["Haha!", "Good one!", "Whatever."], //17
    ["Sure.", "Whatever."], //18
    ["Whoa, chill out!", "Whatever."], //19
    ["Calm down, I know what I'm doing!", "Whatever."], //20
    ["Fine. Be that way!", "Whatever."] //21
  ];
  
  // Random for any other user input
  
  const alternatives = [
    "Go on...",
    "Try again",
  ];