// ----------------------
// SAUCE RESULTS
// ----------------------
const sauceResults = {
  marinara: {
    name: "Marinara",
    description: "You are reliable, warm, and universally liked. People trust you without knowing why.",
    traits: "classic • grounded • dependable",
    image: "images/MarinaraProfile.png"
  },
  alfredo: {
    name: "Alfredo",
    description: "You are comfort in human form. A little indulgent, a little dramatic, and deeply loved.",
    traits: "cozy • rich • affectionate",
    image: "images/AlfredoProfile.png"
  },
  pesto: {
    name: "Pesto",
    description: "You are creative, fresh, and slightly unpredictable.",
    traits: "artsy • spontaneous • magnetic",
    image: "images/PestoProfile.png"
  },
  carbonara: {
    name: "Carbonara",
    description: "You are particular, confident, and quietly intense.",
    traits: "refined • stubborn • precise",
    image: "images/CarbonaraProfile.png"
  },
  bolognese: {
    name: "Bolognese",
    description: "You are deep, patient, and layered.",
    traits: "complex • thoughtful • slow-burning",
    image: "images/BologneseProfile.png"
  },
  arrabbiata: {
    name: "Arrabbiata",
    description: "You are intense, expressive, and slightly chaotic.",
    traits: "fiery • dramatic • loud",
    image: "images/ArrabbiataProfile.png"
  },
  puttanesca: {
    name: "Puttanesca",
    description: "You are chaotic, bold, and iconic in a questionable way.",
    traits: "chaotic • wild • magnetic",
    image: "images/PuttanescaProfile.png"
  }
};

// ----------------------
// GAME STATE
// ----------------------
const state = {
  currentScene: "start",
  scores: {
    marinara: 0,
    alfredo: 0,
    pesto: 0,
    carbonara: 0,
    bolognese: 0,
    arrabbiata: 0,
    puttanesca: 0
  }
};

// ----------------------
// SCENES
// ----------------------
const scenes = {
  start: {
    title: "You are making dinner.",
    text: "The pasta water is boiling. The vibes are fragile.",
    choices: [
      {
        text: "Make something classic everyone will like",
        next: "scene2",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Make something creamy and indulgent",
        next: "scene2",
        points: { alfredo: 2 }
      },
      {
        text: "Do something creative and experimental",
        next: "scene2",
        points: { pesto: 2, puttanesca: 1 }
      }
    ]
  },

  scene2: {
    title: "Someone interferes.",
    text: "A friend walks in and starts touching things.",
    choices: [
      {
        text: "Give them a safe task",
        next: "scene3",
        points: { marinara: 1 }
      },
      {
        text: "Let them cook and see what happens",
        next: "scene3",
        points: { puttanesca: 2, pesto: 1 }
      },
      {
        text: "Tell them to stop immediately",
        next: "scene3",
        points: { carbonara: 2, arrabbiata: 1 }
      }
    ]
  },

  scene3: {
    title: "A problem arises.",
    text: "Someone says: 'I don’t like pasta.'",
    choices: [
      {
        text: "Ignore them politely",
        next: "scene4",
        points: { marinara: 2 }
      },
      {
        text: "Make something richer to win them over",
        next: "scene4",
        points: { alfredo: 2 }
      },
      {
        text: "Ask them to explain themselves",
        next: "scene4",
        points: { arrabbiata: 2 }
      }
    ]
  },

  scene4: {
    title: "Final moment.",
    text: "How do you want this dinner to be remembered?",
    choices: [
      {
        text: "Simple and perfect",
        next: "result",
        points: { marinara: 2 }
      },
      {
        text: "Rich and comforting",
        next: "result",
        points: { alfredo: 2 }
      },
      {
        text: "Creative and different",
        next: "result",
        points: { pesto: 2 }
      },
      {
        text: "Technically correct",
        next: "result",
        points: { carbonara: 2 }
      },
      {
        text: "Deep and meaningful",
        next: "result",
        points: { bolognese: 2 }
      },
      {
        text: "Intense and unforgettable",
        next: "result",
        points: { arrabbiata: 2 }
      },
      {
        text: "Chaotic and iconic",
        next: "result",
        points: { puttanesca: 3 }
      }
    ]
  }
};

// ----------------------
// DOM ELEMENTS
// ----------------------
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices");

const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const resultTraits = document.getElementById("result-traits");

// ----------------------
// START GAME
// ----------------------
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderScene();
});

// ----------------------
// RENDER SCENE
// ----------------------
function renderScene() {
  const scene = scenes[state.currentScene];

  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;

  choicesContainer.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.onclick = () => handleChoice(choice);
    choicesContainer.appendChild(btn);
  });
}

// ----------------------
// HANDLE CHOICE
// ----------------------
function handleChoice(choice) {
  Object.keys(choice.points).forEach(key => {
    state.scores[key] += choice.points[key];
  });

  if (choice.next === "result") {
    showResult();
  } else {
    state.currentScene = choice.next;
    renderScene();
  }
}

// ----------------------
// RESULT LOGIC
// ----------------------
function showResult() {
  let winner = "marinara";
  let max = -1;

  Object.keys(state.scores).forEach(sauce => {
    if (state.scores[sauce] > max) {
      max = state.scores[sauce];
      winner = sauce;
    }
  });

  const result = sauceResults[winner];

  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  resultImage.src = result.image;
  resultImage.alt = result.name;
  resultName.textContent = result.name;
  resultDescription.textContent = result.description;
  resultTraits.textContent = result.traits;
}

// ----------------------
// RESTART
// ----------------------
restartBtn.addEventListener("click", () => {
  state.currentScene = "start";

  Object.keys(state.scores).forEach(key => {
    state.scores[key] = 0;
  });

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});