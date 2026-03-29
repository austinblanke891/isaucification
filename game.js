const sauceResults = {
  marinara: {
    name: "Marinara",
    image: "images/MarinaraProfile.png",
    description: '"You are reliable, warm, and universally liked. People trust you without knowing why."',
    traits: "Alignment: Good 82%, Neutral 14%, Chaotic 4%",
    extra: "Hidden talent: Making everyone feel weirdly safe",
    strengths: "- Loyal\n- Warm\n- Dependable\n- The emotional baseline of the group",
    weaknesses: "- Can play it a little too safe\n- Hates unnecessary drama\n- Secretly takes things personally",
    review: '"Always there when you need them." - Alfredo'
  },
  alfredo: {
    name: "Alfredo",
    image: "images/AlfredoProfile.png",
    description: '"You are comfort in human form. A little indulgent, a little dramatic, and deeply loved."',
    traits: "Alignment: Good 70%, Neutral 18%, Chaotic 12%",
    extra: "Hidden talent: Turning a bad night around instantly",
    strengths: "- Comforting\n- Affectionate\n- Generous\n- Rich in every sense",
    weaknesses: "- Can be a little extra\n- Overcommits emotionally\n- Not built for subtlety",
    review: '"Honestly? A lot. But in a good way." - Pesto'
  },
  pesto: {
    name: "Pesto",
    image: "images/PestoProfile.png",
    description: '"You are creative, fresh, and slightly unpredictable."',
    traits: "Alignment: Good 54%, Neutral 20%, Chaotic 26%",
    extra: "Hidden talent: Making weird ideas work",
    strengths: "- Creative\n- Magnetic\n- Spontaneous\n- Effortlessly cool",
    weaknesses: "- Hard to pin down\n- Mood-dependent\n- May reinvent the plan mid-plan",
    review: '"I never know what they are doing, but it usually works." - Marinara'
  },
  carbonara: {
    name: "Carbonara",
    image: "images/CarbonaraProfile.png",
    description: '"You are particular, confident, and quietly intense."',
    traits: "Alignment: Lawful 68%, Good 16%, Chaotic 16%",
    extra: "Hidden talent: Being correct under pressure",
    strengths: "- Precise\n- Confident\n- High standards\n- Strong opinions",
    weaknesses: "- Stubborn\n- Judges shortcuts harshly\n- Not very flexible",
    review: '"Annoyingly right more often than not." - Bolognese'
  },
  bolognese: {
    name: "Bolognese",
    image: "images/BologneseProfile.png",
    description: '"You are deep, patient, and layered."',
    traits: "Alignment: Lawful 40%, Good 45%, Chaotic 15%",
    extra: "Hidden talent: Quietly holding everything together",
    strengths: "- Thoughtful\n- Patient\n- Complex\n- Worth the wait",
    weaknesses: "- Slow to open up\n- Overthinks everything\n- Can get heavy",
    review: '"There is a lot going on there. I mean that respectfully." - Carbonara'
  },
  arrabbiata: {
    name: "Arrabbiata",
    image: "images/ArrabbiataProfile.png",
    description: '"You are intense, expressive, and slightly chaotic."',
    traits: "Alignment: Good 32%, Neutral 18%, Chaotic 50%",
    extra: "Hidden talent: Turning rage into charisma",
    strengths: "- Bold\n- Honest\n- Passionate\n- Impossible to ignore",
    weaknesses: "- Reactive\n- Escalates quickly\n- Has never de-escalated once",
    review: '"A lot of personality. Maybe too much. But still iconic." - Alfredo'
  },
  puttanesca: {
    name: "Puttanesca",
    image: "images/PuttanescaProfile.png",
    description: '"You are chaotic, bold, and iconic in a questionable way."',
    traits: "Alignment: Good 20%, Neutral 20%, Chaotic 60%",
    extra: "Hidden talent: Thriving under total nonsense",
    strengths: "- Fearless\n- Quirky\n- Memorable\n- Weirdly resourceful",
    weaknesses: "- Unpredictable\n- Poor impulse control\n- Will absolutely make it everyone's problem",
    review: '"I do not fully understand them, but I respect the commitment." - Marinara'
  }
};

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
    text: "Someone says: 'I don't like pasta.'",
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

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices");

const resultCardRender = document.getElementById("result-card-render");
const resultImageCard = document.getElementById("result-image-card");
const resultFlatImage = document.getElementById("result-flat-image");

const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const resultTraits = document.getElementById("result-traits");
const resultExtra = document.getElementById("result-extra");
const resultStrengths = document.getElementById("result-strengths");
const resultWeaknesses = document.getElementById("result-weaknesses");
const resultReview = document.getElementById("result-review");

async function waitForFonts() {
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (error) {
      console.warn("Font loading issue:", error);
    }
  }
}

async function waitForImages(container) {
  const images = Array.from(container.querySelectorAll("img"));

  await Promise.all(
    images.map(async (img) => {
      if (!img.src) return;

      if (img.complete && img.naturalWidth > 0) return;

      if (img.decode) {
        try {
          await img.decode();
          return;
        } catch (error) {}
      }

      await new Promise((resolve) => {
        const done = () => resolve();
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      });
    })
  );
}

async function buildResultImage() {
  resultCardRender.classList.remove("hidden");

  await waitForFonts();
  await waitForImages(resultCardRender);

  const cardWidth = resultCardRender.offsetWidth;
  const cardHeight = resultCardRender.offsetHeight;

  const canvas = await html2canvas(resultCardRender, {
    backgroundColor: "#d9edee",
    scale: Math.min(window.devicePixelRatio || 2, 3),
    useCORS: true,
    logging: false,
    width: cardWidth,
    height: cardHeight,
    windowWidth: cardWidth,
    windowHeight: cardHeight
  });

  const dataUrl = canvas.toDataURL("image/png");
  resultFlatImage.src = dataUrl;
  resultFlatImage.alt = "";
  resultImageCard.classList.remove("hidden");
  resultCardRender.classList.add("hidden");
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderScene();
});

function renderScene() {
  const scene = scenes[state.currentScene];

  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  choicesContainer.innerHTML = "";

  scene.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.type = "button";
    btn.onclick = () => handleChoice(choice);
    choicesContainer.appendChild(btn);
  });
}

function handleChoice(choice) {
  Object.keys(choice.points).forEach((key) => {
    state.scores[key] += choice.points[key];
  });

  if (choice.next === "result") {
    showResult();
  } else {
    state.currentScene = choice.next;
    renderScene();
  }
}

async function showResult() {
  let winner = "marinara";
  let max = -1;

  Object.keys(state.scores).forEach((sauce) => {
    if (state.scores[sauce] > max) {
      max = state.scores[sauce];
      winner = sauce;
    }
  });

  const result = sauceResults[winner];

  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  resultCardRender.classList.remove("hidden");
  resultImageCard.classList.add("hidden");
  resultFlatImage.removeAttribute("src");

  resultImage.src = result.image;
  resultImage.alt = result.name;
  resultName.textContent = result.name;
  resultDescription.textContent = result.description;
  resultTraits.textContent = result.traits;
  resultExtra.textContent = result.extra;
  resultStrengths.textContent = result.strengths;
  resultWeaknesses.textContent = result.weaknesses;
  resultReview.textContent = result.review;

  try {
    await buildResultImage();
  } catch (error) {
    console.error("Could not build result image:", error);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

restartBtn.addEventListener("click", () => {
  state.currentScene = "start";

  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });

  resultCardRender.classList.remove("hidden");
  resultImageCard.classList.add("hidden");
  resultFlatImage.removeAttribute("src");

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});