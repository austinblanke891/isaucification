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

const chapterPill = document.getElementById("chapter-pill");

const storyTiles = {
  // =========================
  // CHAPTER 1: COME INTO EXISTENCE
  // =========================
  ch1_q1: {
    chapter: 1,
    title: "Chapter 1: You come into existence.",
    text: "You blink. You are warm, sentient, and gently simmering. A wooden spoon passes over the surface of your soul. First thought?",
    image: "images/ch1_q1.png",
    choices: [
      {
        text: "This is serious. I should probably be excellent.",
        next: "ch1_q2_precision",
        points: { carbonara: 2, cacioepepe: 2, bolognese: 1 }
      },
      {
        text: "Omg hi. I hope everyone is having a nice time.",
        next: "ch1_q2_comfort",
        points: { marinara: 2, alfredo: 2, bolognese: 1 }
      },
      {
        text: "Interesting. I will now become a problem in a beautiful way.",
        next: "ch1_q2_chaos",
        points: { pesto: 1, vodka: 1, arrabbiata: 1, puttanesca: 2, amatriciana: 1 }
      }
    ]
  },

  ch1_q2_precision: {
    chapter: 1,
    title: "The pot is your kingdom.",
    text: "You take stock. Texture matters. Ratio matters. The kitchen has standards and you are low-key the standards.",
    image: "images/ch1_q2_precision.png",
    choices: [
      {
        text: "Stabilize immediately. We are not free-falling on my watch.",
        next: "ch1_q3_precision",
        points: { carbonara: 2, bolognese: 1, cacioepepe: 2 }
      },
      {
        text: "Say nothing, but judge everything.",
        next: "ch1_q3_precision",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Focus on depth. Slow and correct wins.",
        next: "ch1_q3_precision",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q2_comfort: {
    chapter: 1,
    title: "You feel... emotionally available.",
    text: "The herbs are floating, the light is nice, and honestly the whole moment feels very healing. You could make someone cry in a gentle way.",
    image: "images/ch1_q2_comfort.png",
    choices: [
      {
        text: "I want to be the reason someone feels okay again.",
        next: "ch1_q3_comfort",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I want to be rich, indulgent, and impossible to quit.",
        next: "ch1_q3_comfort",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "I want everyone included. No sauce left behind.",
        next: "ch1_q3_comfort",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      }
    ]
  },

  ch1_q2_chaos: {
    chapter: 1,
    title: "You choose vibes over laws.",
    text: "No one told you the rules and honestly that was their first mistake. You are bubbling with possibility and mild danger.",
    image: "images/ch1_q2_chaos.png",
    choices: [
      {
        text: "Add a weird flourish. Art requires commitment.",
        next: "ch1_q3_chaos",
        points: { pesto: 2, vodka: 1, puttanesca: 1 }
      },
      {
        text: "Turn up the heat. Let the room feel you.",
        next: "ch1_q3_chaos",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Whatever happens next is canon.",
        next: "ch1_q3_chaos",
        points: { puttanesca: 2, vodka: 1, arrabbiata: 1 }
      }
    ]
  },

  ch1_q3_precision: {
    chapter: 1,
    title: "You become aware of the other ingredients.",
    text: "Cheese. Pepper. Aromatics. They are looking to you for leadership, whether they know it or not.",
    image: "images/ch1_q3_precision.png",
    choices: [
      {
        text: "Give every ingredient a correct and sacred role.",
        next: "ch1_q4_precision",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "Build something patient and layered.",
        next: "ch1_q4_precision",
        points: { bolognese: 2, carbonara: 1 }
      },
      {
        text: "Keep it minimal. Extra is for the weak.",
        next: "ch1_q4_precision",
        points: { cacioepepe: 3 }
      }
    ]
  },

  ch1_q3_comfort: {
    chapter: 1,
    title: "The kitchen smells like emotional support.",
    text: "A tiny noodle drifts by and looks calmer in your presence. You realize this may be your thing.",
    image: "images/ch1_q3_comfort.png",
    choices: [
      {
        text: "Be the classic. Familiarity is elite actually.",
        next: "ch1_q4_comfort",
        points: { marinara: 3 }
      },
      {
        text: "Be the comfort pick. More softness. More cream. More yes.",
        next: "ch1_q4_comfort",
        points: { alfredo: 3 }
      },
      {
        text: "Be warm, but a little glam about it.",
        next: "ch1_q4_comfort",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch1_q3_chaos: {
    chapter: 1,
    title: "You feel the plot thickening.",
    text: "Literally and spiritually. This is no longer just sauce. This is self-expression under heat.",
    image: "images/ch1_q3_chaos.png",
    choices: [
      {
        text: "Make it creative and low-key iconic.",
        next: "ch1_q4_chaos",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Make it loud. Let them recover later.",
        next: "ch1_q4_chaos",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Make it questionable, but unforgettable.",
        next: "ch1_q4_chaos",
        points: { puttanesca: 3 }
      }
    ]
  },

  ch1_q4_precision: {
    chapter: 1,
    title: "You define yourself.",
    text: "If your existence had a mission statement, what would it be?",
    image: "images/ch1_q4_precision.png",
    choices: [
      {
        text: "Correctness is care.",
        next: "ch2_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Time and patience create depth.",
        next: "ch2_q1",
        points: { bolognese: 2 }
      },
      {
        text: "Elegance is doing more with less.",
        next: "ch2_q1",
        points: { cacioepepe: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q4_comfort: {
    chapter: 1,
    title: "You define yourself.",
    text: "If your existence had a mission statement, what would it be?",
    image: "images/ch1_q4_comfort.png",
    choices: [
      {
        text: "I want people to feel held.",
        next: "ch2_q1",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I want to fix the whole evening with one bite.",
        next: "ch2_q1",
        points: { alfredo: 2 }
      },
      {
        text: "I want everyone at the table to exhale a little.",
        next: "ch2_q1",
        points: { marinara: 2, bolognese: 1 }
      }
    ]
  },

  ch1_q4_chaos: {
    chapter: 1,
    title: "You define yourself.",
    text: "If your existence had a mission statement, what would it be?",
    image: "images/ch1_q4_chaos.png",
    choices: [
      {
        text: "Surprise is a form of love.",
        next: "ch2_q1",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Intensity is the point.",
        next: "ch2_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "I was not made to be normal.",
        next: "ch2_q1",
        points: { puttanesca: 2, vodka: 1, pesto: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 2: MEET THE OTHER SAUCES
  // =========================
  ch2_q1: {
    chapter: 2,
    title: "Chapter 2: You meet the other sauces.",
    text: "You are ladled into the Sauce Commons. Marinara smiles. Carbonara is visibly evaluating you. Vodka somehow looks booked and busy. Puttanesca is doing... something with olives.",
    image: "images/ch2_q1.png",
    choices: [
      {
        text: "Smile first. Be normal. Or at least warm.",
        next: "ch2_q2_warm",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "Observe quietly and assess the room.",
        next: "ch2_q2_reserved",
        points: { bolognese: 2, cacioepepe: 1, carbonara: 1 }
      },
      {
        text: "Walk in like the camera is already on you.",
        next: "ch2_q2_big",
        points: { vodka: 1, arrabbiata: 1, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch2_q2_warm: {
    chapter: 2,
    title: "Marinara adopts you immediately.",
    text: "\"You seem nice,\" Marinara says, which in sauce culture is basically a hug. Alfredo offers emotional support. Pesto compliments your aura.",
    image: "images/ch2_q2_warm.png",
    choices: [
      {
        text: "Ask everyone how they are feeling, unironically.",
        next: "ch2_q3_warm",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Make a joke so no one gets too vulnerable too fast.",
        next: "ch2_q3_warm",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Quietly become the group's emotional infrastructure.",
        next: "ch2_q3_warm",
        points: { marinara: 2, bolognese: 1 }
      }
    ]
  },

  ch2_q2_reserved: {
    chapter: 2,
    title: "You hang back near the parm.",
    text: "From a respectable distance, you begin reading the social field like a tactical document. Carbonara notices and gives a tiny nod that could mean approval or war.",
    image: "images/ch2_q2_reserved.png",
    choices: [
      {
        text: "Say very little, but make every word count.",
        next: "ch2_q3_reserved",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Study everybody first. Depth over speed.",
        next: "ch2_q3_reserved",
        points: { bolognese: 2 }
      },
      {
        text: "Join once you've mapped the vibes.",
        next: "ch2_q3_reserved",
        points: { vodka: 1, bolognese: 1, cacioepepe: 1 }
      }
    ]
  },

  ch2_q2_big: {
    chapter: 2,
    title: "You arrive with unjustified confidence.",
    text: "The room notices. Arrabbiata respects the audacity. Puttanesca is instantly interested. Vodka says, \"Okayyy,\" in a way that could mean anything.",
    image: "images/ch2_q2_big.png",
    choices: [
      {
        text: "Start a conversation with the loudest sauce there.",
        next: "ch2_q3_big",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Work the room. Everyone is now your situation.",
        next: "ch2_q3_big",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Cause a little chaos to see who survives it.",
        next: "ch2_q3_big",
        points: { puttanesca: 2, amatriciana: 1 }
      }
    ]
  },

  ch2_q3_warm: {
    chapter: 2,
    title: "The sauce circle forms.",
    text: "Someone suggests a friendship simmer. It is deeply earnest and a little cursed. Carbonara looks like it would rather evaporate.",
    image: "images/ch2_q3_warm.png",
    choices: [
      {
        text: "Invite everyone in, even Carbonara.",
        next: "ch2_q4_warm",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Pair people who seem like they need each other.",
        next: "ch2_q4_warm",
        points: { bolognese: 1, marinara: 1, vodka: 1 }
      },
      {
        text: "Keep it light. Too much intimacy too fast is illegal.",
        next: "ch2_q4_warm",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch2_q3_reserved: {
    chapter: 2,
    title: "A social test appears.",
    text: "Puttanesca asks your opinion on something objectively messy. This is either a trap or a bonding ritual.",
    image: "images/ch2_q3_reserved.png",
    choices: [
      {
        text: "Answer honestly and let the chips fall.",
        next: "ch2_q4_reserved",
        points: { amatriciana: 1, carbonara: 1, cacioepepe: 1 }
      },
      {
        text: "Give a measured answer with layers.",
        next: "ch2_q4_reserved",
        points: { bolognese: 2, carbonara: 1 }
      },
      {
        text: "Say one devastatingly concise thing.",
        next: "ch2_q4_reserved",
        points: { cacioepepe: 2, amatriciana: 1 }
      }
    ]
  },

  ch2_q3_big: {
    chapter: 2,
    title: "The vibes are now active.",
    text: "You have somehow become a social event. Several sauces are orbiting you. This feels sustainable and not stressful at all.",
    image: "images/ch2_q3_big.png",
    choices: [
      {
        text: "Charm everybody, including your haters.",
        next: "ch2_q4_big",
        points: { vodka: 2, marinara: 1 }
      },
      {
        text: "Say something spicy and mean it.",
        next: "ch2_q4_big",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Make the moment iconic, not sensible.",
        next: "ch2_q4_big",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  ch2_q4_warm: {
    chapter: 2,
    title: "In sauce society, you are known as...",
    text: "The group has formed an impression of you. Which one feels right?",
    image: "images/ch2_q4_warm.png",
    choices: [
      {
        text: "The one people naturally trust.",
        next: "ch3_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one who makes things softer.",
        next: "ch3_q1",
        points: { alfredo: 2 }
      },
      {
        text: "The one who keeps everyone comfortable but laughing.",
        next: "ch3_q1",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch2_q4_reserved: {
    chapter: 2,
    title: "In sauce society, you are known as...",
    text: "The group has formed an impression of you. Which one feels right?",
    image: "images/ch2_q4_reserved.png",
    choices: [
      {
        text: "The one with standards.",
        next: "ch3_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "The one who notices everything.",
        next: "ch3_q1",
        points: { bolognese: 2, cacioepepe: 1 }
      },
      {
        text: "The one who says less, but means more.",
        next: "ch3_q1",
        points: { cacioepepe: 2, bolognese: 1 }
      }
    ]
  },

  ch2_q4_big: {
    chapter: 2,
    title: "In sauce society, you are known as...",
    text: "The group has formed an impression of you. Which one feels right?",
    image: "images/ch2_q4_big.png",
    choices: [
      {
        text: "The one who owns the room.",
        next: "ch3_q1",
        points: { vodka: 2, amatriciana: 1 }
      },
      {
        text: "The one who makes things happen, loudly.",
        next: "ch3_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The one who cannot be explained and will not be trying.",
        next: "ch3_q1",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 3: DINOSAURS
  // =========================
  ch3_q1: {
    chapter: 3,
    title: "Chapter 3: There are dinosaurs.",
    text: "A shadow passes over Sauce Commons. The ground shakes. Someone whispers, \"be so serious right now.\" You look up. There are, in fact, dinosaurs.",
    image: "images/ch3_q1.png",
    choices: [
      {
        text: "Pause. Assess. Surely there is a correct response plan.",
        next: "ch3_q2_logical",
        points: { carbonara: 2, bolognese: 1, cacioepepe: 1 }
      },
      {
        text: "Grab your friends. Panic later.",
        next: "ch3_q2_caring",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "This is insane. React immediately and with feeling.",
        next: "ch3_q2_chaotic",
        points: { arrabbiata: 2, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch3_q2_logical: {
    chapter: 3,
    title: "You choose analysis under prehistoric pressure.",
    text: "The dinosaurs are large, rude, and moving fast. Carbonara is already proposing a formation. This is the worst group project of your life.",
    image: "images/ch3_q2_logical.png",
    choices: [
      {
        text: "Organize the sauces. We are doing crisis management.",
        next: "ch3_q3_logical",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Find the safest route and move with purpose.",
        next: "ch3_q3_logical",
        points: { bolognese: 2, marinara: 1 }
      },
      {
        text: "Ignore the noise. Precision only.",
        next: "ch3_q3_logical",
        points: { cacioepepe: 2, carbonara: 1 }
      }
    ]
  },

  ch3_q2_caring: {
    chapter: 3,
    title: "You choose people first, extinction second.",
    text: "A tiny spoon falls over. Alfredo gasps. Marinara is trying to keep everyone calm but there are literally dinosaurs, so the group chat is not doing great.",
    image: "images/ch3_q2_caring.png",
    choices: [
      {
        text: "Get everyone moving together. No sauce left behind.",
        next: "ch3_q3_caring",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Keep morale up. This is a fleeing-but-fun situation.",
        next: "ch3_q3_caring",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Carry the emotional atmosphere on your back somehow.",
        next: "ch3_q3_caring",
        points: { alfredo: 2, bolognese: 1 }
      }
    ]
  },

  ch3_q2_chaotic: {
    chapter: 3,
    title: "You choose immediate energy.",
    text: "Puttanesca screams, Arrabbiata screams louder, and somehow this becomes leadership. A dinosaur roars. You have thoughts.",
    image: "images/ch3_q2_chaotic.png",
    choices: [
      {
        text: "Roar back. Respectfully.",
        next: "ch3_q3_chaotic",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Do something wild and hope it becomes strategy.",
        next: "ch3_q3_chaotic",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "Turn the madness into a bit. Stay cute under pressure.",
        next: "ch3_q3_chaotic",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q3_logical: {
    chapter: 3,
    title: "The stampede gets closer.",
    text: "You have seconds. The other sauces look at you like you might actually know what to do, which is rude but flattering.",
    image: "images/ch3_q3_logical.png",
    choices: [
      {
        text: "Pick one clean plan and commit.",
        next: "ch3_q4_logical",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Adapt the plan in real time based on what matters most.",
        next: "ch3_q4_logical",
        points: { bolognese: 2, vodka: 1 }
      },
      {
        text: "Remove all unnecessary variables, including some people’s input.",
        next: "ch3_q4_logical",
        points: { cacioepepe: 2, amatriciana: 1 }
      }
    ]
  },

  ch3_q3_caring: {
    chapter: 3,
    title: "Your group is in motion.",
    text: "You are running, or the sauce equivalent of running, which is mostly sloshing with intent. Several sauces are emotionally unraveling.",
    image: "images/ch3_q3_caring.png",
    choices: [
      {
        text: "Talk everyone through it. Calm is contagious.",
        next: "ch3_q4_caring",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Offer comfort while also moving. Multitasking queen.",
        next: "ch3_q4_caring",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Make it a little funny so nobody fully loses it.",
        next: "ch3_q4_caring",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q3_chaotic: {
    chapter: 3,
    title: "The scene is beyond manageable.",
    text: "One dinosaur has knocked over a basil display. Another appears spiritually against you. Your adrenaline is now the main ingredient.",
    image: "images/ch3_q3_chaotic.png",
    choices: [
      {
        text: "Charge the moment head-on.",
        next: "ch3_q4_chaotic",
        points: { amatriciana: 2, arrabbiata: 1 }
      },
      {
        text: "Improvise something insane but memorable.",
        next: "ch3_q4_chaotic",
        points: { puttanesca: 2, pesto: 1 }
      },
      {
        text: "Stay loose. Chaos loves me and I love her back.",
        next: "ch3_q4_chaotic",
        points: { vodka: 2, puttanesca: 1 }
      }
    ]
  },

  ch3_q4_logical: {
    chapter: 3,
    title: "Under stress, you become...",
    text: "As the dinosaurs close in, what kind of sauce are you in a crisis?",
    image: "images/ch3_q4_logical.png",
    choices: [
      {
        text: "The planner.",
        next: "ch4_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "The steady one.",
        next: "ch4_q1",
        points: { bolognese: 2, marinara: 1 }
      },
      {
        text: "The one who cuts through the nonsense.",
        next: "ch4_q1",
        points: { cacioepepe: 1, amatriciana: 2 }
      }
    ]
  },

  ch3_q4_caring: {
    chapter: 3,
    title: "Under stress, you become...",
    text: "As the dinosaurs close in, what kind of sauce are you in a crisis?",
    image: "images/ch3_q4_caring.png",
    choices: [
      {
        text: "The comfort system.",
        next: "ch4_q1",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "The emotional support with a plan.",
        next: "ch4_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one keeping the vibe from fully collapsing.",
        next: "ch4_q1",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q4_chaotic: {
    chapter: 3,
    title: "Under stress, you become...",
    text: "As the dinosaurs close in, what kind of sauce are you in a crisis?",
    image: "images/ch3_q4_chaotic.png",
    choices: [
      {
        text: "The fire alarm with opinions.",
        next: "ch4_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The wildcard.",
        next: "ch4_q1",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "The one weirdly thriving in the nonsense.",
        next: "ch4_q1",
        points: { vodka: 2, puttanesca: 1, pesto: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 4: PASTA APOCALYPSE -> PLATING
  // =========================
  ch4_q1: {
    chapter: 4,
    title: "Chapter 4: The sky boils.",
    text: "The dinosaurs look up. You look up. The heavens open. It is not meteors. It is massive boiling pasta falling from the sky in soft, terrible silence. This is extinction, but carb-based.",
    image: "images/ch4_q1.png",
    choices: [
      {
        text: "Protect the others. This is not how the group ends.",
        next: "ch4_q2_connection",
        points: { marinara: 2, alfredo: 1, bolognese: 1 }
      },
      {
        text: "Lock in. There has to be one clean way through this.",
        next: "ch4_q2_perfection",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "If we are going down, we are going down iconically.",
        next: "ch4_q2_impact",
        points: { vodka: 1, pesto: 1, arrabbiata: 1, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch4_q2_connection: {
    chapter: 4,
    title: "You choose tenderness during the noodle apocalypse.",
    text: "Around you, sauces are slipping, spiraling, and having last-minute character development. You realize your first instinct is not self-preservation. It is people.",
    image: "images/ch4_q2_connection.png",
    choices: [
      {
        text: "Gather everyone close. We face the pasta together.",
        next: "ch4_q3_connection",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Check who needs comfort most and go there first.",
        next: "ch4_q3_connection",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Hold the center. Be the calm thing in the chaos.",
        next: "ch4_q3_connection",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q2_perfection: {
    chapter: 4,
    title: "You choose standards at the end of the world.",
    text: "Pasta is falling from the literal sky and somehow you are still thinking about timing, execution, and whether everyone else is making this harder than it needs to be.",
    image: "images/ch4_q2_perfection.png",
    choices: [
      {
        text: "Find the exact route to survival and take it.",
        next: "ch4_q3_perfection",
        points: { carbonara: 2, bolognese: 1 }
      },
      {
        text: "Strip the problem to its essentials.",
        next: "ch4_q3_perfection",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Lead decisively. There is no time for softness.",
        next: "ch4_q3_perfection",
        points: { amatriciana: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q2_impact: {
    chapter: 4,
    title: "You choose drama, art, or both.",
    text: "The world is ending in a frankly gorgeous way. Giant pasta sheets drift like fate. You become aware that your final move could be memorable.",
    image: "images/ch4_q2_impact.png",
    choices: [
      {
        text: "Say something iconic and emotionally devastating.",
        next: "ch4_q3_impact",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Turn this into performance art somehow.",
        next: "ch4_q3_impact",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Do something bizarre enough to become legend.",
        next: "ch4_q3_impact",
        points: { puttanesca: 2, vodka: 1 }
      }
    ]
  },

  ch4_q3_connection: {
    chapter: 4,
    title: "The world dissolves into steam.",
    text: "Then, suddenly: quiet. The dinosaurs are gone. The sky clears. You realize you have survived, somehow, and you are being lifted gently toward a waiting plate.",
    image: "images/ch4_q3_connection.png",
    choices: [
      {
        text: "I hope they feel cared for when they taste me.",
        next: "ch4_q4_connection",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I hope I make someone feel okay again.",
        next: "ch4_q4_connection",
        points: { alfredo: 2 }
      },
      {
        text: "I hope this meal means something, quietly.",
        next: "ch4_q4_connection",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q3_perfection: {
    chapter: 4,
    title: "You survive into presentation.",
    text: "The apocalypse ends not with a scream, but with plating. A human hand twirls pasta. You are arranged with intent. This is your final form.",
    image: "images/ch4_q3_perfection.png",
    choices: [
      {
        text: "I need this to be correct.",
        next: "ch4_q4_perfection",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "I need this to be elegant.",
        next: "ch4_q4_perfection",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "I need this to hold up under scrutiny.",
        next: "ch4_q4_perfection",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q3_impact: {
    chapter: 4,
    title: "You survive into legend.",
    text: "The boiling pasta settles. The scene hard-cuts to plating like the budget ran out. You are now on a dish, glistening with destiny and mild delusion.",
    image: "images/ch4_q3_impact.png",
    choices: [
      {
        text: "I need them to remember me.",
        next: "ch4_q4_impact",
        points: { arrabbiata: 2, amatriciana: 1, vodka: 1 }
      },
      {
        text: "I need this to feel like me.",
        next: "ch4_q4_impact",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "I need this to absolutely hit.",
        next: "ch4_q4_impact",
        points: { vodka: 2, amatriciana: 1 }
      }
    ]
  },

  ch4_q4_connection: {
    chapter: 4,
    title: "The plate arrives.",
    text: "A fork hovers above you. This is what you were made for. What matters most in your final moment?",
    image: "images/ch4_q4_connection.png",
    choices: [
      {
        text: "Being loved.",
        next: "result",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Being comforting.",
        next: "result",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Being quietly meaningful.",
        next: "result",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q4_perfection: {
    chapter: 4,
    title: "The plate arrives.",
    text: "A fork hovers above you. This is what you were made for. What matters most in your final moment?",
    image: "images/ch4_q4_perfection.png",
    choices: [
      {
        text: "Being correct.",
        next: "result",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Being refined.",
        next: "result",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Holding your standard to the end.",
        next: "result",
        points: { carbonara: 1, bolognese: 2 }
      }
    ]
  },

  ch4_q4_impact: {
    chapter: 4,
    title: "The plate arrives.",
    text: "A fork hovers above you. This is what you were made for. What matters most in your final moment?",
    image: "images/ch4_q4_impact.png",
    choices: [
      {
        text: "Being unforgettable.",
        next: "result",
        points: { arrabbiata: 2, amatriciana: 1, vodka: 1 }
      },
      {
        text: "Being original.",
        next: "result",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "Being iconic.",
        next: "result",
        points: { vodka: 2, puttanesca: 1, amatriciana: 1 }
      }
    ]
  }
};

const state = {
  currentTile: "ch1_q1",
  path: [],
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

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices");
const sceneImage = document.getElementById("scene-image");

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
  if (!resultCardRender || !resultImageCard || !resultFlatImage) return;
  if (typeof html2canvas === "undefined") return;

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
  resultFlatImage.style.width = "";
  resultFlatImage.style.height = "";
  resultFlatImage.style.maxWidth = "100%";
  resultFlatImage.style.display = "block";

  resultCardRender.classList.add("hidden");
  resultImageCard.classList.remove("hidden");
}

function renderTile() {
  const tile = storyTiles[state.currentTile];

  if (!tile) {
    console.error("Missing tile:", state.currentTile);
    return;
  }

  if (chapterPill) {
    chapterPill.textContent = `Chapter ${tile.chapter}`;
  }

  sceneTitle.textContent = tile.title;
  sceneText.textContent = tile.text;
  choicesContainer.innerHTML = "";

  if (sceneImage) {
    sceneImage.src = tile.image || "";
    sceneImage.alt = tile.title || "";
  }

  tile.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.type = "button";
    btn.onclick = () => handleChoice(choice);
    choicesContainer.appendChild(btn);
  });
}

  sceneTitle.textContent = tile.title;
  sceneText.textContent = tile.text;
  choicesContainer.innerHTML = "";

  if (sceneImage) {
    sceneImage.src = tile.image || "";
    sceneImage.alt = tile.title || "";
  }

  tile.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.type = "button";
    btn.onclick = () => handleChoice(choice);
    choicesContainer.appendChild(btn);
  });
}

function handleChoice(choice) {
  Object.keys(choice.points || {}).forEach((key) => {
    if (typeof state.scores[key] === "number") {
      state.scores[key] += choice.points[key];
    }
  });

  state.path.push({
    tile: state.currentTile,
    answer: choice.text
  });

  if (choice.next === "result") {
    showResult();
    return;
  }

  state.currentTile = choice.next;
  renderTile();
}

function getWinner() {
  let winner = "marinara";
  let max = -Infinity;

  Object.keys(state.scores).forEach((sauce) => {
    const score = state.scores[sauce];
    if (score > max) {
      max = score;
      winner = sauce;
    }
  });

  return winner;
}

async function showResult() {
  const winner = getWinner();
  const result = sauceResults[winner];

  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  if (resultCardRender && resultImageCard && resultFlatImage) {
    resultCardRender.classList.remove("hidden");
    resultImageCard.classList.add("hidden");
    resultFlatImage.removeAttribute("src");
    resetGeneratedImageStyles();
  }

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

function resetGame() {
  state.currentTile = "ch1_q1";
  state.path = [];

  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });

  if (resultCardRender && resultImageCard && resultFlatImage) {
    resultCardRender.classList.remove("hidden");
    resultImageCard.classList.add("hidden");
    resultFlatImage.removeAttribute("src");
    resetGeneratedImageStyles();
  }

  if (sceneImage) {
    sceneImage.removeAttribute("src");
    sceneImage.alt = "";
  }
}

startBtn.addEventListener("click", () => {
  resetGame();
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderTile();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

restartBtn.addEventListener("click", () => {
  resetGame();
  resultScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});