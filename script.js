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
        "Do bananas ever feel lonely inside a fruit bowl?",
        "Can a cactus dream of a world with no spines?",
        "What would a sneeze look like if it had a personality?",
        "If your pillow could remember your dreams, would it gossip about them?",
        "Can the moon get tired of looking at us?",
        "What if your car could make decisions about where it wants to go?",
        "Does your pen ever feel neglected when you're using a pencil?",
        "Do clouds get jealous of each other when one is fluffier?",
        "If shoes could write a memoir, would it be about walking or just sitting?",
        "Why do forks never get lost, but spoons always seem to disappear?",
        "If chairs could choose who sits on them, would they prefer a cat or a human?",
        "What if the stars are just holes in the universe where aliens are peeking through?",
        "Can a plant feel guilty when it hasn’t been watered in days?",
        "Do rainbows feel shy when they appear in the sky?",
        "What if you could speak to Wi-Fi signals, would they be rude?",
        "Why does the microwave always beep the exact number of times you don’t need it to?",
        "What if your shoelaces were secretly trying to untie themselves?",
        "Can a sponge ever feel clean after it’s been used?",
        "Does your reflection know that it’s just a reflection?",
        "If clouds could take vacations, where would they go?",
        "Can a lightbulb ever feel like it’s had enough of shining?",
        "What if your houseplants are plotting against you when you're not home?",
        "Do socks ever argue with each other about who gets to be worn?",
        "Why does the refrigerator light only work when you open the door at night?",
        "Can a paperclip ever feel lonely?",
        "Do doors get tired of opening and closing?",
        "What if time didn’t exist, but your watch kept ticking anyway?",
        "Can a puddle have feelings about being stepped on?",
        "What if your shoes had a secret life while you’re asleep?",
        "Why does the carpet always find a way to trap crumbs?",
        "Can a paper airplane ever be sad about not flying?",
        "What if every time you yawn, your soul briefly exits your body?",
        "Do socks ever plot their escape from the laundry basket?",
        "What if your mirror could only reflect what it wants to, not what you see?",
        "Can an ice cube ever feel proud of being perfect?",
        "What if you could hear your chair's thoughts every time you sit down?",
        "Does the toaster feel fulfilled when it perfectly pops the bread?",
        "What if your shoes were secretly plotting to switch places while you sleep?",
        "Can a cloud get jealous of how pretty the sunset is?",
        "What would it be like if you could hear the grass growing?",
        "Why do we call it a microwave when it doesn’t actually have any waves?",
        "If you could talk to a cup of coffee, would it gossip about your day?",
        "Do shadows ever get tired of following you around?",
        "What if the wind could judge your hair day?",
        "Why do you only ever notice a spider when it’s on the ceiling?",
        "What if your laundry could feel embarrassed about being dirty?",
        "Can a clock feel stress about time running out?",
        "If you could taste memories, would they be sweet or bitter?",
        "Why does every sock you own always have one missing?",
        "Can a tree have existential thoughts about being chopped down?",
        "What if your TV could watch you back?",
        "Can paper ever get tired of being written on?",
        "Why do we always talk to plants like they can hear us?",
        "What if your shoes could communicate through the squeaks they make?",
        "If mirrors could make their own reflections, would they have an opinion?",
        "Do ice cubes get embarrassed when they melt?",
        "What if your computer mouse could get annoyed when you don’t use it properly?",
        "Why does the dryer always eat one sock?",
        "Can a button ever regret being sewn onto a shirt?",
        "What if the ocean is just one big fish tank, and we’re the fish?",
        "Can a chair feel relief when no one sits on it for a while?",
        "Why does the word ‘slippery’ always sound like it’s slipping?",
        "What if your pillow felt like you were using it too much?",
        "Can a notebook feel sentimental about being written in?",
        "Why do we never question how much ketchup we use?",
        "What if your shoes could be offended by your walking style?",
        "Does a book feel flattered when someone reads it?",
        "Can an umbrella be sad when it’s not raining?",
        "Why do your keys always hide when you need them the most?",
        "What if a cloud is secretly afraid of thunder?",
        "Does your pillow dream about being a cloud?",
        "What if your reflection had its own life and lived independently of you?",
        "Can a lightbulb feel lonely when it’s off?",
        "What if your socks secretly play hide and seek when you're not looking?",
        "Why does your bed always seem to be the most comfortable at night?",
        "Do shoes ever get bored of being worn?",
        "What if your pen has a deep philosophical view on life?",
        "Why does it always feel like socks are plotting against us?",
        "What if your closet is full of secrets that it refuses to share?",
        "Can a mirror feel insecure about your appearance?",
        "What if chairs were secretly judging your sitting posture?",
        "Why do we trust our feet to guide us without question?",
        "Do light switches ever feel annoyed by being flipped constantly?",
        "What if the refrigerator is secretly a time traveler?",
        "Can a doorknob feel overwhelmed by being turned all day?",
        "What if your coffee cup has seen the darkest parts of your soul?",
        "Does a towel ever feel dirty about being used for cleaning?",
        "Why does your pillow always seem so full of hope when you lay your head down?",
        "Can a broom feel like it's sweeping the same dirt forever?",
        "What if your shoelaces are secretly having their own adventures?",
        "Why do paperclips always seem to lose their purpose after one use?",
        "Can a vending machine feel pride about dispensing snacks?",
        "What if your socks were the ones controlling your actions?",
        "Why does the kitchen always smell different when you’re not in it?",
        "Can your pants feel claustrophobic after a long day?",
        "What if the sunlight could feel smug about how it makes things look better?",
        "Why do your shoes always make you feel like they have a secret life?",
        "What if clouds are secretly judging the way we arrange our furniture?",
        "Can a clock ever feel bored of counting seconds?",
        "What if your shoes started to develop personalities based on how you wear them?",
        "Why do we only question why something is ‘hanging’ when it’s a coat?",
        "Can your pillow get jealous of how much time you spend with your blanket?",
        "Why do we never ask if our coffee cup is feeling okay?",
        "What if mirrors could see you from the other side of the glass?",
        "Do socks ever have existential conversations when they're together in the drawer?",
        "What if your jacket is hiding a secret it doesn’t want you to know?",
        "Why do we never question if the ice cubes are plotting a rebellion?",
        "Can a door feel like it has seen too much traffic?",
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
