// ============================================================
// MODULE: Data Layer
// Purpose: Handles all data-related operations, including question storage.
// ============================================================

const QuestionManager = (() => {
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
        "Does your fridge hum out of boredom or rebellion?",
    ];

    const history = JSON.parse(localStorage.getItem("questionHistory")) || [];

    function getRandomQuestion() {
        const index = Math.floor(Math.random() * questions.length);
        return questions[index];
    }

    function addToHistory(question) {
        history.unshift(question);
        localStorage.setItem("questionHistory", JSON.stringify(history));
    }

    function getHistory() {
        return [...history]; // Return a copy for immutability
    }

    return {
        getRandomQuestion,
        addToHistory,
        getHistory,
    };
})();

// ============================================================
// MODULE: UI Layer
// Purpose: Handles all DOM manipulations and animations.
// ============================================================

const UIController = (() => {
    const selectors = {
        questionBox: "#question",
        generateButton: "#generate-btn",
        historyList: "#history-list",
        clearHistoryButton: "#clear-history-btn",
    };

    const elements = {
        questionBox: document.querySelector(selectors.questionBox),
        generateButton: document.querySelector(selectors.generateButton),
        historyList: document.querySelector(selectors.historyList),
        clearHistoryButton: document.querySelector(selectors.clearHistoryButton),
    };

    function updateQuestionBox(text) {
        // Fancy animation
        elements.questionBox.classList.add("fade-out");
        setTimeout(() => {
            elements.questionBox.textContent = text;
            elements.questionBox.classList.remove("fade-out");
        }, 300);
    }

    function addHistoryItem(text) {
        const listItem = document.createElement("li");
        listItem.textContent = text;
        listItem.className = "history-item";
        elements.historyList.prepend(listItem);

        // Animate the item
        listItem.style.opacity = 0;
        setTimeout(() => {
            listItem.style.opacity = 1;
        }, 50);
    }

    function renderHistory(historyArray) {
        elements.historyList.innerHTML = ""; // Clear current history
        historyArray.forEach((item) => addHistoryItem(item));
    }

    function bindGenerateButton(handler) {
        elements.generateButton.addEventListener("click", handler);
    }

    function bindClearHistoryButton(handler) {
        elements.clearHistoryButton.addEventListener("click", handler);
    }

    return {
        updateQuestionBox,
        addHistoryItem,
        renderHistory,
        bindGenerateButton,
        bindClearHistoryButton,
    };
})();

// ============================================================
// MODULE: App Controller
// Purpose: Orchestrates interactions between the data and UI layers.
// ============================================================

const AppController = (() => {
    function initialize() {
        console.log("Initializing Mundane Existential Crisis Generator...");
        UIController.renderHistory(QuestionManager.getHistory());

        // Bind event listeners
        UIController.bindGenerateButton(handleGenerateQuestion);
        UIController.bindClearHistoryButton(handleClearHistory);
    }

    function handleGenerateQuestion() {
        const question = QuestionManager.getRandomQuestion();
        QuestionManager.addToHistory(question);
        UIController.updateQuestionBox(question);
        UIController.addHistoryItem(question);
    }

    function handleClearHistory() {
        localStorage.removeItem("questionHistory");
        UIController.renderHistory([]);
        UIController.updateQuestionBox("History cleared. Ready for new crises!");
    }

    return {
        initialize,
    };
})();

// ============================================================
// Bootstrap the application
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    AppController.initialize();
});
