const sauceResults = {
  marinara: {
    name: "Marinara",
    image: "images/MarinaraProfile.png",
    description: '"You are warm, steady, and universally trusted. People feel better the second you show up."',
    traits: "Alignment: Good 82%, Neutral 14%, Chaotic 4%",
    extra: "Hidden talent: Making everyone feel weirdly safe",
    strengths: "- Loyal\n- Warm\n- Dependable\n- Easy to trust",
    weaknesses: "- Can play it a little too safe\n- Hates unnecessary drama\n- Secretly takes things personally",
    review: '"Always there when you need them." - Alfredo'
  },

  alfredo: {
    name: "Alfredo",
    image: "images/AlfredoProfile.png",
    description: '"You are comfort in human form. Soft, generous, and fully committed to the vibe."',
    traits: "Alignment: Good 70%, Neutral 18%, Chaotic 12%",
    extra: "Hidden talent: Turning a bad night around instantly",
    strengths: "- Comforting\n- Affectionate\n- Generous\n- Emotionally soothing",
    weaknesses: "- Can be a little extra\n- Avoids discomfort when possible\n- Not built for subtlety",
    review: '"Honestly? A lot. But in a good way." - Pesto'
  },

  pesto: {
    name: "Pesto",
    image: "images/PestoProfile.png",
    description: '"You are creative, fresh, and a little impossible to categorize."',
    traits: "Alignment: Good 54%, Neutral 20%, Chaotic 26%",
    extra: "Hidden talent: Making weird ideas work",
    strengths: "- Creative\n- Magnetic\n- Original\n- Effortlessly cool",
    weaknesses: "- Hard to pin down\n- Mood-dependent\n- May reinvent the plan mid-plan",
    review: '"I never know what they are doing, but it usually works." - Marinara'
  },

  carbonara: {
    name: "Carbonara",
    image: "images/CarbonaraProfile.png",
    description: '"You are particular, confident, and quietly intense. There is a right way, and you know it."',
    traits: "Alignment: Lawful 68%, Good 16%, Chaotic 16%",
    extra: "Hidden talent: Being correct under pressure",
    strengths: "- Precise\n- Confident\n- High standards\n- Strong opinions",
    weaknesses: "- Stubborn\n- Judges shortcuts harshly\n- Not very flexible",
    review: '"Annoyingly right more often than not." - Bolognese'
  },

  bolognese: {
    name: "Bolognese",
    image: "images/BologneseProfile.png",
    description: '"You are grounded, patient, and built to last. People underestimate how much you are holding together."',
    traits: "Alignment: Lawful 40%, Good 45%, Chaotic 15%",
    extra: "Hidden talent: Quietly holding everything together",
    strengths: "- Thoughtful\n- Patient\n- Reliable\n- Deeply steady",
    weaknesses: "- Slow to open up\n- Overthinks everything\n- Can get heavy",
    review: '"There is a lot going on there. I mean that respectfully." - Carbonara'
  },

  arrabbiata: {
    name: "Arrabbiata",
    image: "images/ArrabbiataProfile.png",
    description: '"You are fiery, expressive, and impossible to ignore. You feel everything at full volume."',
    traits: "Alignment: Good 32%, Neutral 18%, Chaotic 50%",
    extra: "Hidden talent: Turning rage into charisma",
    strengths: "- Bold\n- Honest\n- Passionate\n- High energy",
    weaknesses: "- Reactive\n- Escalates quickly\n- Has never de-escalated once",
    review: '"A lot of personality. Maybe too much. But still iconic." - Alfredo'
  },

  puttanesca: {
    name: "Puttanesca",
    image: "images/PuttanescaProfile.png",
    description: '"You are chaotic, bold, and strangely iconic. You should not work this well, and yet you do."',
    traits: "Alignment: Good 20%, Neutral 20%, Chaotic 60%",
    extra: "Hidden talent: Thriving under total nonsense",
    strengths: "- Fearless\n- Quirky\n- Memorable\n- Weirdly resourceful",
    weaknesses: "- Unpredictable\n- Poor impulse control\n- Will absolutely make it everyone’s problem",
    review: '"I do not fully understand them, but I respect the commitment." - Marinara'
  },

  vodka: {
    name: "Vodka Sauce",
    image: "images/VodkaSauceProfile.png",
    description: '"You are charming, adaptable, and a little extra in a way that usually works for you."',
    traits: "Alignment: Good 46%, Neutral 24%, Chaotic 30%",
    extra: "Hidden talent: Matching literally any room’s energy",
    strengths: "- Socially flexible\n- Charming\n- Fun\n- Hard to dislike",
    weaknesses: "- Can be a little performative\n- Avoids being fully pinned down\n- Sometimes wants everyone to get it",
    review: '"Somehow gets invited everywhere." - Pesto'
  },

  cacioepepe: {
    name: "Cacio e Pepe",
    image: "images/CacioEPepeProfile.png",
    description: '"You are minimal, sharp, and weirdly intimidating for someone doing so little."',
    traits: "Alignment: Lawful 58%, Good 12%, Chaotic 30%",
    extra: "Hidden talent: Winning with less",
    strengths: "- Efficient\n- Clever\n- Self-possessed\n- High standards",
    weaknesses: "- Dry sense of humor\n- Secretly judgmental\n- Has no patience for overcomplication",
    review: '"Insufferable. But elegant." - Carbonara'
  },

  amatriciana: {
    name: "Amatriciana",
    image: "images/AmatricianaProfile.png",
    description: '"You are blunt, intense, and not here to waste time. People know exactly where they stand with you."',
    traits: "Alignment: Lawful 34%, Good 18%, Chaotic 48%",
    extra: "Hidden talent: Cutting through nonsense instantly",
    strengths: "- Direct\n- Decisive\n- Passionate\n- Weirdly respectable",
    weaknesses: "- Impatient\n- Can come off harsh\n- Has never once sugarcoated anything",
    review: '"Terrifying delivery. Solid point." - Marinara'
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
    puttanesca: 0,
    vodka: 0,
    cacioepepe: 0,
    amatriciana: 0
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
        text: "Make something rich and comforting",
        next: "scene2",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "Make something elegant but kind of judgey",
        next: "scene2",
        points: { carbonara: 1, cacioepepe: 2 }
      },
      {
        text: "Make something bold and a little dangerous",
        next: "scene2",
        points: { arrabbiata: 1, puttanesca: 1, amatriciana: 2 }
      },
      {
        text: "Do something creative and experimental",
        next: "scene2",
        points: { pesto: 2, vodka: 1 }
      }
    ]
  },

  scene2: {
    title: "Someone interferes.",
    text: "A friend walks in and starts touching things.",
    choices: [
      {
        text: "Give them a safe little task so they feel included",
        next: "scene3",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Let them improvise. Worst case, it becomes a story",
        next: "scene3",
        points: { pesto: 1, puttanesca: 2, vodka: 1 }
      },
      {
        text: "Take the spoon back without saying a word",
        next: "scene3",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "Tell them to stop immediately",
        next: "scene3",
        points: { arrabbiata: 1, amatriciana: 2 }
      },
      {
        text: "Redirect them, but in a weirdly charming way",
        next: "scene3",
        points: { vodka: 2, marinara: 1 }
      }
    ]
  },

  scene3: {
    title: "A problem arises.",
    text: "Someone says: 'I don't like pasta.'",
    choices: [
      {
        text: "Smile politely and move on",
        next: "scene4",
        points: { marinara: 2, cacioepepe: 1 }
      },
      {
        text: "Make something richer to win them over",
        next: "scene4",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "Ask them to explain themselves, in detail",
        next: "scene4",
        points: { carbonara: 1, arrabbiata: 1, amatriciana: 2 }
      },
      {
        text: "Respectfully decide they are beyond help",
        next: "scene4",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Turn it into an emotionally layered conversation somehow",
        next: "scene4",
        points: { bolognese: 2, pesto: 1 }
      }
    ]
  },

  scene4: {
    title: "The dinner is almost ready.",
    text: "What energy are you bringing to the table?",
    choices: [
      {
        text: "Warm, welcoming, and low-pressure",
        next: "scene5",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Polished and deeply correct",
        next: "scene5",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "Creative and a little hard to explain",
        next: "scene5",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "Bold, loud, and emotionally charged",
        next: "scene5",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Charming and just a tiny bit performative",
        next: "scene5",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Steady, thoughtful, and built to last",
        next: "scene5",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  scene5: {
    title: "Final moment.",
    text: "How do you want this dinner to be remembered?",
    choices: [
      {
        text: "As something simple, warm, and perfect",
        next: "result",
        points: { marinara: 2, cacioepepe: 1 }
      },
      {
        text: "As rich, comforting, and impossible to hate",
        next: "result",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "As creative, fresh, and a little unexpected",
        next: "result",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "As technically flawless",
        next: "result",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "As deep, thoughtful, and worth the wait",
        next: "result",
        points: { bolognese: 3 }
      },
      {
        text: "As intense and unforgettable",
        next: "result",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "As chaotic, iconic, and weirdly effective",
        next: "result",
        points: { puttanesca: 3 }
      },
      {
        text: "As cool, social, and surprisingly impressive",
        next: "result",
        points: { vodka: 3 }
      },
      {
        text: "As minimal, sharp, and smarter than necessary",
        next: "result",
        points: { cacioepepe: 3 }
      },
      {
        text: "As blunt, fiery, and impossible to forget",
        next: "result",
        points: { amatriciana: 3 }
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

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

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

function resetGeneratedImageStyles() {
  resultFlatImage.style.width = "";
  resultFlatImage.style.height = "";
  resultFlatImage.style.maxWidth = "";
  resultFlatImage.style.display = "";
}

async function buildResultImage() {
  resultCardRender.classList.remove("hidden");
  resultImageCard.classList.add("hidden");
  resetGeneratedImageStyles();

  await waitForFonts();
  await waitForImages(resultCardRender);

  await nextFrame();
  await nextFrame();

  const rect = resultCardRender.getBoundingClientRect();
  const cardWidth = Math.round(rect.width);
  const cardHeight = Math.round(rect.height);

  const canvas = await html2canvas(resultCardRender, {
    backgroundColor: null,
    scale: Math.min(window.devicePixelRatio || 2, 2),
    useCORS: true,
    logging: false,
    width: cardWidth,
    height: cardHeight,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight
  });

  resultFlatImage.src = canvas.toDataURL("image/png");
  resultFlatImage.alt = "";
  resultFlatImage.src = canvas.toDataURL("image/png");
  resultFlatImage.alt = "";

  resultFlatImage.style.width = "";
  resultFlatImage.style.height = "";
  resultFlatImage.style.maxWidth = "100%";
  resultFlatImage.style.display = "block";

  resultCardRender.classList.add("hidden");
  resultImageCard.classList.remove("hidden");
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
  resetGeneratedImageStyles();

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
  resetGeneratedImageStyles();

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});