// Questions Array
const questions = [
  "If socks could talk, what would they say about your laundry habits?",
  "What if you could see the future, but only in reflections of puddles?",
  "Does a ceiling feel existential dread when painted?",
  "If your shadow could write poetry, would you read it?",
  "Is your toaster secretly judging your bread choices?",
  "What if clouds could store memories, but only for the duration of a storm?",
  "Do lightbulbs get tired of being bright all the time?",
  "If chairs could gossip, what secrets would they share about your posture?",
  "What if the wind could whisper forgotten dreams?",
  "Does your fridge hum out of boredom or rebellion?"
];

// Selectors
const questionBox = document.getElementById("question");
const generateBtn = document.getElementById("generate-btn");
const historyList = document.getElementById("history-list");

// Event Listener
generateBtn.addEventListener("click", generateQuestion);

// Function to Generate a New Question
function generateQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const newQuestion = questions[randomIndex];

  // Update Question Box
  questionBox.textContent = newQuestion;

  // Add to History
  const listItem = document.createElement("li");
  listItem.textContent = newQuestion;
  historyList.prepend(listItem); // Add latest question to the top of the history
}
