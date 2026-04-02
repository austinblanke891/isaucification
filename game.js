const sauceResults = {
  marinara: {
    name: "Marinara",
    image: "images/MarinaraProfile.png",
    description:
      '"You are steady, generous, and harder to replace than people realize. You do not need to be flashy to become essential."',
    traits: "Alignment: Good 82%, Neutral 14%, Chaotic 4%",
    extra: "Hidden talent: Making people feel less alone in under thirty seconds",
    strengths: "- Loyal\n- Grounding\n- Sincere\n- Easy to trust",
    weaknesses:
      "- Can default to caretaker mode\n- Struggles to ask for help\n- Takes hurt more personally than you let on",
    review: '"Reliable in a way that makes everybody else act better." - Alfredo'
  },

  alfredo: {
    name: "Alfredo",
    image: "images/AlfredoProfile.png",
    description:
      '"You are comfort with a dramatic streak. Soft-hearted, affectionate, and fully capable of improving the entire mood of a room."',
    traits: "Alignment: Good 70%, Neutral 18%, Chaotic 12%",
    extra: "Hidden talent: Turning a bad day into a sleepover",
    strengths: "- Comforting\n- Generous\n- Affectionate\n- Warmly persuasive",
    weaknesses:
      "- Can overindulge feelings\n- Avoids conflict until it becomes a whole event\n- Occasionally too much, but in a memorable way",
    review: '"A lot? Yes. But rarely in the wrong direction." - Pesto'
  },

  pesto: {
    name: "Pesto",
    image: "images/PestoProfile.png",
    description:
      '"You are inventive, hard to classify, and impossible to fake. People call you random right up until your weird idea works perfectly."',
    traits: "Alignment: Good 54%, Neutral 20%, Chaotic 26%",
    extra: "Hidden talent: Making originality look effortless",
    strengths: "- Inventive\n- Magnetic\n- Stylish\n- Surprisingly resourceful",
    weaknesses:
      "- Can drift when bored\n- Reinvents things mid-process\n- Sometimes confuses impulse with inspiration",
    review: '"I have no idea what the plan is. Disturbingly, that may be the plan." - Marinara'
  },

  carbonara: {
    name: "Carbonara",
    image: "images/CarbonaraProfile.png",
    description:
      '"You are exacting, composed, and fully aware that standards exist for a reason. Under pressure, you become even more yourself."',
    traits: "Alignment: Lawful 68%, Good 16%, Chaotic 16%",
    extra: "Hidden talent: Being right in a crisis without raising your voice",
    strengths: "- Precise\n- Competent\n- Decisive\n- High standards",
    weaknesses:
      "- Inflexible\n- Intolerant of sloppy thinking\n- Can make correctness feel vaguely threatening",
    review: '"Exhausting. Useful. Usually correct. I hate that for me." - Bolognese'
  },

  bolognese: {
    name: "Bolognese",
    image: "images/BologneseProfile.png",
    description:
      '"You are patient, substantial, and stronger than your calm exterior suggests. You do not rush, and that is usually why you last."',
    traits: "Alignment: Lawful 40%, Good 45%, Chaotic 15%",
    extra: "Hidden talent: Holding fragile situations together without announcing it",
    strengths: "- Steady\n- Thoughtful\n- Patient\n- Deeply dependable",
    weaknesses:
      "- Slow to open up\n- Carries too much alone\n- Can become heavy when nobody helps stir",
    review: '"There is more going on here than most people clock on first taste." - Carbonara'
  },

  arrabbiata: {
    name: "Arrabbiata",
    image: "images/ArrabbiataProfile.png",
    description:
      '"You are intense, expressive, and gloriously incapable of half-feeling anything. People know when you are in the room, whether they wanted to or not."',
    traits: "Alignment: Good 32%, Neutral 18%, Chaotic 50%",
    extra: "Hidden talent: Converting outrage into momentum",
    strengths: "- Bold\n- Honest\n- Passionate\n- Electrifying",
    weaknesses:
      "- Reactive\n- Can escalate on instinct\n- Has a complicated relationship with indoor volume",
    review: '"Completely unreasonable. Deeply alive. Weirdly inspiring." - Alfredo'
  },

  puttanesca: {
    name: "Puttanesca",
    image: "images/PuttanescaProfile.png",
    description:
      '"You are bold, messy, and somehow more coherent than anyone expects. Your existence feels like a dare that paid off."',
    traits: "Alignment: Good 20%, Neutral 20%, Chaotic 60%",
    extra: "Hidden talent: Thriving in situations that should sink everyone else",
    strengths: "- Fearless\n- Distinctive\n- Quick-thinking\n- Impossible to forget",
    weaknesses:
      "- Unpredictable\n- Impulsive\n- Will absolutely drag the group into your bit",
    review: '"Should not work. Does work. This is upsetting on several levels." - Marinara'
  },

  vodka: {
    name: "Vodka Sauce",
    image: "images/VodkaSauceProfile.png",
    description:
      '"You are charming, adaptable, and just self-aware enough to weaponize your own charisma. You fit almost anywhere and somehow still stand out."',
    traits: "Alignment: Good 46%, Neutral 24%, Chaotic 30%",
    extra: "Hidden talent: Matching a room before the room knows what it is",
    strengths: "- Socially agile\n- Charming\n- Funny\n- Surprisingly versatile",
    weaknesses:
      "- Can become performative\n- Hates being pinned down too early\n- Wants to be understood on a level most people cannot deliver",
    review: '"Suspiciously good at making every table feel like their table." - Pesto'
  },

  cacioepepe: {
    name: "Cacio e Pepe",
    image: "images/CacioEPepeProfile.png",
    description:
      '"You are minimal, severe, and more impressive than your ingredient list has any right to allow. You know excess is often cowardice."',
    traits: "Alignment: Lawful 58%, Good 12%, Chaotic 30%",
    extra: "Hidden talent: Winning arguments by saying six words total",
    strengths: "- Efficient\n- Sharp\n- Self-possessed\n- Elegant",
    weaknesses:
      "- Dry to the point of danger\n- Secretly judgmental\n- Has no patience for needless embellishment",
    review: '"Obnoxious in concept. Flawless in execution." - Carbonara'
  },

  amatriciana: {
    name: "Amatriciana",
    image: "images/AmatricianaProfile.png",
    description:
      '"You are direct, forceful, and refreshingly uninterested in games. People may flinch at your delivery, but they rarely forget your point."',
    traits: "Alignment: Lawful 34%, Good 18%, Chaotic 48%",
    extra: "Hidden talent: Cutting through nonsense before it breeds",
    strengths: "- Direct\n- Decisive\n- Fierce\n- Effective",
    weaknesses:
      "- Impatient\n- Can sound harsher than intended\n- Has never sugarcoated a single thing in this life",
    review: '"Terrible bedside manner. Excellent emergency contact." - Marinara'
  }
};

const chapterPill = document.getElementById("chapter-pill");

const storyTiles = {
  // =========================
  // CHAPTER 1: COME INTO EXISTENCE
  // =========================
  ch1_q1: {
    chapter: 1,
    title: "Chapter 1: You become aware.",
    text:
      "Heat. Motion. The drag of a wooden spoon through your entire body.\nYou are not in a pot. You are the pot's main event.\nSomething nearby hisses garlic into existence. Something else has opinions about oregano. You gather yourself and think, with alarming clarity: oh. This is permanent.",
    image: "images/ch1_q1.png",
    choices: [
      {
        text: "Stabilize immediately. Whatever this is, I am going to do it correctly.",
        next: "ch1_q2_precision",
        points: { carbonara: 2, cacioepepe: 2, bolognese: 1 }
      },
      {
        text: "Okay. New plan: become a comforting memory for somebody.",
        next: "ch1_q2_comfort",
        points: { marinara: 2, alfredo: 2, bolognese: 1 }
      },
      {
        text: "Interesting. I will now make this everyone's business.",
        next: "ch1_q2_chaos",
        points: { pesto: 1, vodka: 1, arrabbiata: 1, puttanesca: 2, amatriciana: 1 }
      }
    ]
  },

  ch1_q2_precision: {
    chapter: 1,
    title: "The pot becomes a workplace.",
    text:
      "You assess viscosity, heat, and ingredient morale. A lesser sauce might call this overthinking. You call it preventing disaster before it gets a chance to feel welcome.",
    image: "images/ch1_q2_precision.png",
    choices: [
      {
        text: "Take control of the texture now. Panic is just poor planning in costume.",
        next: "ch1_q3_precision",
        points: { carbonara: 2, bolognese: 1, cacioepepe: 2 }
      },
      {
        text: "Say nothing. Observe everything. Let the errors reveal themselves.",
        next: "ch1_q3_precision",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Build depth slowly. Fast results are for people with no vision.",
        next: "ch1_q3_precision",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q2_comfort: {
    chapter: 1,
    title: "You discover tenderness.",
    text:
      "Steam curls up around you like stage fog for a very sincere play. A floating basil leaf bumps your surface and seems calmer for it. You begin to suspect your purpose may involve making hard days less sharp.",
    image: "images/ch1_q2_comfort.png",
    choices: [
      {
        text: "Be the thing people come back to when they need steadiness.",
        next: "ch1_q3_comfort",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Be rich enough to count as emotional intervention.",
        next: "ch1_q3_comfort",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "Be welcoming. Nobody should feel out of place at this stove.",
        next: "ch1_q3_comfort",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      }
    ]
  },

  ch1_q2_chaos: {
    chapter: 1,
    title: "You reject quiet dignity.",
    text:
      "Nobody handed you a rulebook, and honestly that sounds like a them problem. The pot is loud, fragrant, and one bad impulse away from becoming legendary.",
    image: "images/ch1_q2_chaos.png",
    choices: [
      {
        text: "Add one strange flourish. It will either ruin everything or save it beautifully.",
        next: "ch1_q3_chaos",
        points: { pesto: 2, vodka: 1, puttanesca: 1 }
      },
      {
        text: "Turn up the heat. If the room remembers this, good.",
        next: "ch1_q3_chaos",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Do the least defensible thing available and commit fully.",
        next: "ch1_q3_chaos",
        points: { puttanesca: 2, vodka: 1, arrabbiata: 1 }
      }
    ]
  },

  ch1_q3_precision: {
    chapter: 1,
    title: "The ingredients look to you.",
    text:
      "Cheese, pepper, garlic, herbs. None of them speak, which is ideal, but you can feel the expectation anyway. Leadership, it turns out, is mostly being the least confused thing in the room.",
    image: "images/ch1_q3_precision.png",
    choices: [
      {
        text: "Assign each ingredient a proper role and enforce it.",
        next: "ch1_q4_precision",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "Layer patiently until the whole thing can hold its own weight.",
        next: "ch1_q4_precision",
        points: { bolognese: 2, carbonara: 1 }
      },
      {
        text: "Strip it back. Anything unnecessary is an admission of weakness.",
        next: "ch1_q4_precision",
        points: { cacioepepe: 3 }
      }
    ]
  },

  ch1_q3_comfort: {
    chapter: 1,
    title: "You become easy to need.",
    text:
      "A noodle passes through you and visibly relaxes. That should be ridiculous. Instead, it feels correct. Some sauces impress. Some sauces soothe. You know which one you'd rather be.",
    image: "images/ch1_q3_comfort.png",
    choices: [
      {
        text: "Be familiar enough to feel like home.",
        next: "ch1_q4_comfort",
        points: { marinara: 3 }
      },
      {
        text: "Be soft enough to count as a coping mechanism.",
        next: "ch1_q4_comfort",
        points: { alfredo: 3 }
      },
      {
        text: "Be warm, but with enough flair to keep it interesting.",
        next: "ch1_q4_comfort",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch1_q3_chaos: {
    chapter: 1,
    title: "You decide to become a story.",
    text:
      "This is no longer dinner. This is authorship under pressure. Something in you wants to be remembered, even if the remembering includes the phrase 'in hindsight, nobody should have allowed that.'",
    image: "images/ch1_q3_chaos.png",
    choices: [
      {
        text: "Make it inventive enough that people can't copy it without embarrassing themselves.",
        next: "ch1_q4_chaos",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Make it loud enough to erase every weaker opinion in the room.",
        next: "ch1_q4_chaos",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Make it suspicious on paper and unforgettable in practice.",
        next: "ch1_q4_chaos",
        points: { puttanesca: 3 }
      }
    ]
  },

  ch1_q4_precision: {
    chapter: 1,
    title: "You choose your principle.",
    text: "If someone reduced your entire existence to one sentence, which sentence would survive?",
    image: "images/ch1_q4_precision.png",
    choices: [
      {
        text: "Care is taking the trouble to do it right.",
        next: "ch2_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Time is not wasted when it creates substance.",
        next: "ch2_q1",
        points: { bolognese: 2 }
      },
      {
        text: "Elegance begins where excess finally shuts up.",
        next: "ch2_q1",
        points: { cacioepepe: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q4_comfort: {
    chapter: 1,
    title: "You choose your principle.",
    text: "If someone reduced your entire existence to one sentence, which sentence would survive?",
    image: "images/ch1_q4_comfort.png",
    choices: [
      {
        text: "I want people to feel held, not merely fed.",
        next: "ch2_q1",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I want to repair an evening with one good bite.",
        next: "ch2_q1",
        points: { alfredo: 2 }
      },
      {
        text: "I want the whole table to soften around the edges.",
        next: "ch2_q1",
        points: { marinara: 2, bolognese: 1 }
      }
    ]
  },

  ch1_q4_chaos: {
    chapter: 1,
    title: "You choose your principle.",
    text: "If someone reduced your entire existence to one sentence, which sentence would survive?",
    image: "images/ch1_q4_chaos.png",
    choices: [
      {
        text: "Surprise is just intimacy in unusual clothing.",
        next: "ch2_q1",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Intensity is honesty without manners.",
        next: "ch2_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Normal was never a useful option for me.",
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
    text:
      "You are transferred to the Sauce Commons, a communal basin with terrible acoustics and intense social politics. Marinara greets you kindly. Carbonara evaluates you like an admissions committee. Vodka looks well-liked on purpose. Puttanesca is doing something with olives that nobody has approved.",
    image: "images/ch2_q1.png",
    choices: [
      {
        text: "Approach warmly. No need to make this weird before lunch.",
        next: "ch2_q2_warm",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "Hang back and read the room before the room reads you.",
        next: "ch2_q2_reserved",
        points: { bolognese: 2, cacioepepe: 1, carbonara: 1 }
      },
      {
        text: "Enter like you've already been discussed.",
        next: "ch2_q2_big",
        points: { vodka: 1, arrabbiata: 1, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch2_q2_warm: {
    chapter: 2,
    title: "Marinara claims you socially.",
    text:
      "\"You seem nice,\" Marinara says, which here functions as both a blessing and a municipal permit. Alfredo shifts closer in solidarity. Pesto compliments your whole general situation.",
    image: "images/ch2_q2_warm.png",
    choices: [
      {
        text: "Ask everyone how they're doing and mean it enough to alarm them.",
        next: "ch2_q3_warm",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Make a joke before anybody can become vulnerable too fast.",
        next: "ch2_q3_warm",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Quietly become the emotional load-bearing wall.",
        next: "ch2_q3_warm",
        points: { marinara: 2, bolognese: 1 }
      }
    ]
  },

  ch2_q2_reserved: {
    chapter: 2,
    title: "You remain strategically adjacent to the parmesan.",
    text:
      "From a respectable distance, you begin mapping alliances, insecurities, and who talks too much when nervous. Carbonara notices and gives you a tiny nod that could mean respect or challenge. Either way, noted.",
    image: "images/ch2_q2_reserved.png",
    choices: [
      {
        text: "Speak rarely. Make the rarity do the work.",
        next: "ch2_q3_reserved",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Watch longer. Depth is what speed invents excuses for.",
        next: "ch2_q3_reserved",
        points: { bolognese: 2 }
      },
      {
        text: "Join only after you've identified the actual center of gravity.",
        next: "ch2_q3_reserved",
        points: { vodka: 1, bolognese: 1, cacioepepe: 1 }
      }
    ]
  },

  ch2_q2_big: {
    chapter: 2,
    title: "Your arrival becomes a situation.",
    text:
      "Heads turn. Arrabbiata respects the nerve immediately. Puttanesca becomes visibly entertained. Vodka says, \"Okay,\" in a tone that contains both approval and competition.",
    image: "images/ch2_q2_big.png",
    choices: [
      {
        text: "Go straight for the loudest person here. Let's save time.",
        next: "ch2_q3_big",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Work the room. If there's a social current, ride it.",
        next: "ch2_q3_big",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Destabilize things slightly and see who gets interesting.",
        next: "ch2_q3_big",
        points: { puttanesca: 2, amatriciana: 1 }
      }
    ]
  },

  ch2_q3_warm: {
    chapter: 2,
    title: "Someone suggests a circle share.",
    text:
      "It is deeply earnest, a little cursed, and somehow already happening. Several sauces settle in. Carbonara looks like a hostage at a team-building retreat.",
    image: "images/ch2_q3_warm.png",
    choices: [
      {
        text: "Invite everybody in, including the ones pretending not to care.",
        next: "ch2_q4_warm",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Pair people who would secretly be good for each other.",
        next: "ch2_q4_warm",
        points: { bolognese: 1, marinara: 1, vodka: 1 }
      },
      {
        text: "Keep it light. Emotional safety also requires pacing.",
        next: "ch2_q4_warm",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch2_q3_reserved: {
    chapter: 2,
    title: "A test arrives disguised as a question.",
    text:
      "Puttanesca asks for your opinion on a socially messy situation. The tone suggests curiosity. The eyes suggest trap. The room goes still enough to hear somebody thicken.",
    image: "images/ch2_q3_reserved.png",
    choices: [
      {
        text: "Answer plainly. If they wanted comfort, they would have asked Alfredo.",
        next: "ch2_q4_reserved",
        points: { amatriciana: 1, carbonara: 1, cacioepepe: 1 }
      },
      {
        text: "Give the nuanced answer and let them do the hard part of hearing it.",
        next: "ch2_q4_reserved",
        points: { bolognese: 2, carbonara: 1 }
      },
      {
        text: "Say one concise thing sharp enough to end the discussion.",
        next: "ch2_q4_reserved",
        points: { cacioepepe: 2, amatriciana: 1 }
      }
    ]
  },

  ch2_q3_big: {
    chapter: 2,
    title: "You become the center of a developing event.",
    text:
      "Several sauces are now orbiting you for reasons that cannot be reversed. This feels flattering, potentially dangerous, and very on-brand.",
    image: "images/ch2_q3_big.png",
    choices: [
      {
        text: "Charm everybody, including the people already deciding against you.",
        next: "ch2_q4_big",
        points: { vodka: 2, marinara: 1 }
      },
      {
        text: "Say the risky thing out loud and let honesty do the damage.",
        next: "ch2_q4_big",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Make the moment unforgettable, not responsible.",
        next: "ch2_q4_big",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  ch2_q4_warm: {
    chapter: 2,
    title: "Among the sauces, you are known as...",
    text: "By now, the group has decided what role you play in their minds. Which description lands cleanest?",
    image: "images/ch2_q4_warm.png",
    choices: [
      {
        text: "The one people trust without having to explain why.",
        next: "ch3_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one who makes sharp things softer.",
        next: "ch3_q1",
        points: { alfredo: 2 }
      },
      {
        text: "The one who keeps everyone comfortable and vaguely entertained.",
        next: "ch3_q1",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch2_q4_reserved: {
    chapter: 2,
    title: "Among the sauces, you are known as...",
    text: "By now, the group has decided what role you play in their minds. Which description lands cleanest?",
    image: "images/ch2_q4_reserved.png",
    choices: [
      {
        text: "The one with standards and the nerve to keep them.",
        next: "ch3_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "The one who notices more than they say.",
        next: "ch3_q1",
        points: { bolognese: 2, cacioepepe: 1 }
      },
      {
        text: "The one who wastes no language and no time.",
        next: "ch3_q1",
        points: { cacioepepe: 2, bolognese: 1 }
      }
    ]
  },

  ch2_q4_big: {
    chapter: 2,
    title: "Among the sauces, you are known as...",
    text: "By now, the group has decided what role you play in their minds. Which description lands cleanest?",
    image: "images/ch2_q4_big.png",
    choices: [
      {
        text: "The one who enters a room and alters its chemistry.",
        next: "ch3_q1",
        points: { vodka: 2, amatriciana: 1 }
      },
      {
        text: "The one who gets things moving, loudly if necessary.",
        next: "ch3_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The one nobody can summarize with dignity.",
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
    text:
      "A shadow crosses the Sauce Commons. The basin trembles. Somewhere behind you, a voice says, very quietly, \"Oh, come on.\"\nYou look up.\nThere are dinosaurs.\nNot a metaphor. Not a mascot situation. Dinosaurs.",
    image: "images/ch3_q1.png",
    choices: [
      {
        text: "Stop. Assess. Even this should have a correct response.",
        next: "ch3_q2_logical",
        points: { carbonara: 2, bolognese: 1, cacioepepe: 1 }
      },
      {
        text: "Get your people together first. Terror can wait its turn.",
        next: "ch3_q2_caring",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "React immediately. There is no honorable way to look normal right now.",
        next: "ch3_q2_chaotic",
        points: { arrabbiata: 2, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch3_q2_logical: {
    chapter: 3,
    title: "You choose structure under prehistoric pressure.",
    text:
      "The dinosaurs are huge, fast, and offensively unbriefed. Carbonara is already outlining a formation nobody asked for but everybody needs. It is, somehow, the worst possible group project.",
    image: "images/ch3_q2_logical.png",
    choices: [
      {
        text: "Coordinate the sauces. Fear is inefficient when organized.",
        next: "ch3_q3_logical",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Find the safest route and move with conviction.",
        next: "ch3_q3_logical",
        points: { bolognese: 2, marinara: 1 }
      },
      {
        text: "Ignore the shouting. Precision first, feelings if time permits.",
        next: "ch3_q3_logical",
        points: { cacioepepe: 2, carbonara: 1 }
      }
    ]
  },

  ch3_q2_caring: {
    chapter: 3,
    title: "You choose people before survival statistics.",
    text:
      "A spoon tips over. Alfredo gasps like somebody has been shot. Marinara starts calming people down with the strained dignity of a camp counselor in a flood. The herd gets louder.",
    image: "images/ch3_q2_caring.png",
    choices: [
      {
        text: "Keep everybody together. Nobody gets left behind for spectacle.",
        next: "ch3_q3_caring",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Keep morale up. If we panic ugly, the dinosaurs win twice.",
        next: "ch3_q3_caring",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Carry the emotional weight and keep moving anyway.",
        next: "ch3_q3_caring",
        points: { alfredo: 2, bolognese: 1 }
      }
    ]
  },

  ch3_q2_chaotic: {
    chapter: 3,
    title: "You choose immediate force of personality.",
    text:
      "Puttanesca screams. Arrabbiata screams louder. Somehow this becomes a chain of command. A dinosaur roars from the ridge. You are offended by the tone.",
    image: "images/ch3_q2_chaotic.png",
    choices: [
      {
        text: "Roar back. Not because it helps. Because it matters.",
        next: "ch3_q3_chaotic",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Do something reckless enough to become strategy after the fact.",
        next: "ch3_q3_chaotic",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "Turn panic into performance. If we're doomed, stay interesting.",
        next: "ch3_q3_chaotic",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q3_logical: {
    chapter: 3,
    title: "The stampede closes in.",
    text:
      "You have seconds. The other sauces look at you with that awful expression people get when they've decided you seem competent. Flattering, yes. Also deeply inconvenient.",
    image: "images/ch3_q3_logical.png",
    choices: [
      {
        text: "Choose one clean plan and commit before doubt gets a vote.",
        next: "ch3_q4_logical",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Adjust in motion. The best plan is the one that survives contact.",
        next: "ch3_q4_logical",
        points: { bolognese: 2, vodka: 1 }
      },
      {
        text: "Reduce variables immediately, including some people's contributions.",
        next: "ch3_q4_logical",
        points: { cacioepepe: 2, amatriciana: 1 }
      }
    ]
  },

  ch3_q3_caring: {
    chapter: 3,
    title: "Your group starts moving.",
    text:
      "You are running, or the sauce equivalent of running, which is mostly sloshing with purpose while trying not to become a tragedy. Several sauces are one bad sentence away from losing it.",
    image: "images/ch3_q3_caring.png",
    choices: [
      {
        text: "Talk them through it. Calm is contagious if repeated clearly enough.",
        next: "ch3_q4_caring",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Offer comfort while moving. Softness is not the same as stopping.",
        next: "ch3_q4_caring",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Keep it funny enough that fear can't fully take over.",
        next: "ch3_q4_caring",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q3_chaotic: {
    chapter: 3,
    title: "The scene becomes unmanageable.",
    text:
      "One dinosaur has destroyed the basil display. Another appears to dislike you personally. Your adrenaline now has a point of view and several suggestions.",
    image: "images/ch3_q3_chaotic.png",
    choices: [
      {
        text: "Go straight at the problem and let force sort the details later.",
        next: "ch3_q4_chaotic",
        points: { amatriciana: 2, arrabbiata: 1 }
      },
      {
        text: "Improvise something deranged enough to change the odds.",
        next: "ch3_q4_chaotic",
        points: { puttanesca: 2, pesto: 1 }
      },
      {
        text: "Stay loose. Chaos recognizes one of its own.",
        next: "ch3_q4_chaotic",
        points: { vodka: 2, puttanesca: 1 }
      }
    ]
  },

  ch3_q4_logical: {
    chapter: 3,
    title: "In a crisis, you become...",
    text: "The herd is nearly on top of you. Under real pressure, what emerges first?",
    image: "images/ch3_q4_logical.png",
    choices: [
      {
        text: "The planner.",
        next: "ch4_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "The steady center.",
        next: "ch4_q1",
        points: { bolognese: 2, marinara: 1 }
      },
      {
        text: "The one who cuts through nonsense with a clean blade.",
        next: "ch4_q1",
        points: { cacioepepe: 1, amatriciana: 2 }
      }
    ]
  },

  ch3_q4_caring: {
    chapter: 3,
    title: "In a crisis, you become...",
    text: "The herd is nearly on top of you. Under real pressure, what emerges first?",
    image: "images/ch3_q4_caring.png",
    choices: [
      {
        text: "The comfort system.",
        next: "ch4_q1",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "The emotional support with an actual plan.",
        next: "ch4_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one keeping the whole vibe from falling into a hole.",
        next: "ch4_q1",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q4_chaotic: {
    chapter: 3,
    title: "In a crisis, you become...",
    text: "The herd is nearly on top of you. Under real pressure, what emerges first?",
    image: "images/ch3_q4_chaotic.png",
    choices: [
      {
        text: "The alarm bell with opinions.",
        next: "ch4_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The wildcard nobody can plan around.",
        next: "ch4_q1",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "The one weirdly alive in the middle of the nonsense.",
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
    title: "Chapter 4: The sky begins to boil.",
    text:
      "The dinosaurs stop first. Then you do. Above the Sauce Commons, the clouds split open.\nIt is not rain.\nIt is pasta.\nGreat steaming ribbons and spirals of it, falling from the heavens in soft catastrophic silence. Extinction, apparently, can still be carb-forward.",
    image: "images/ch4_q1.png",
    choices: [
      {
        text: "Protect the others. The world can end later.",
        next: "ch4_q2_connection",
        points: { marinara: 2, alfredo: 1, bolognese: 1 }
      },
      {
        text: "Focus. Even this has a cleanest possible solution.",
        next: "ch4_q2_perfection",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "If this is the final act, it had better leave a mark.",
        next: "ch4_q2_impact",
        points: { vodka: 1, pesto: 1, arrabbiata: 1, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch4_q2_connection: {
    chapter: 4,
    title: "You choose tenderness at the edge of absurdity.",
    text:
      "Around you, sauces slip, spiral, confess things, and undergo last-minute character development. Your first instinct is not self-preservation. It is checking who looks most alone.",
    image: "images/ch4_q2_connection.png",
    choices: [
      {
        text: "Gather everybody close. If we go through this, we go through it together.",
        next: "ch4_q3_connection",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Go straight to the person handling it worst and stay there.",
        next: "ch4_q3_connection",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Hold the center and make yourself useful to everybody at once.",
        next: "ch4_q3_connection",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q2_perfection: {
    chapter: 4,
    title: "You choose standards during the apocalypse.",
    text:
      "Pasta falls from the sky and still, somehow, you are thinking about timing, execution, and whether everyone else is making the whole thing messier than necessary.",
    image: "images/ch4_q2_perfection.png",
    choices: [
      {
        text: "Identify the exact route through the chaos and take it without hesitation.",
        next: "ch4_q3_perfection",
        points: { carbonara: 2, bolognese: 1 }
      },
      {
        text: "Reduce the problem to essentials. The rest is decorative panic.",
        next: "ch4_q3_perfection",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Lead decisively. Softness can file a complaint afterward.",
        next: "ch4_q3_perfection",
        points: { amatriciana: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q2_impact: {
    chapter: 4,
    title: "You choose drama, art, or both.",
    text:
      "The end of the world is, annoyingly, gorgeous. Sheets of pasta drift like linen curtains in a doomed theatre. If this is your last move, you are determined that somebody remembers it correctly.",
    image: "images/ch4_q2_impact.png",
    choices: [
      {
        text: "Say something cutting enough to survive as a quote.",
        next: "ch4_q3_impact",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Turn the catastrophe into composition.",
        next: "ch4_q3_impact",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Do something so strange it becomes folklore by dessert.",
        next: "ch4_q3_impact",
        points: { puttanesca: 2, vodka: 1 }
      }
    ]
  },

  ch4_q3_connection: {
    chapter: 4,
    title: "Then: steam, silence, survival.",
    text:
      "The impact never quite arrives. The sky clears. The dinosaurs are gone as if they have been edited out for pacing. A human hand lifts you gently toward a waiting plate. Against all logic, you made it.",
    image: "images/ch4_q3_connection.png",
    choices: [
      {
        text: "I hope whoever tastes me feels taken care of.",
        next: "ch4_q4_connection",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I hope I make somebody's whole night easier to carry.",
        next: "ch4_q4_connection",
        points: { alfredo: 2 }
      },
      {
        text: "I hope I mean more than I say out loud.",
        next: "ch4_q4_connection",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q3_perfection: {
    chapter: 4,
    title: "You survive into presentation.",
    text:
      "The apocalypse resolves into plating with humiliating elegance. Pasta is twirled. Edges are cleaned. You are arranged with intention. This, at last, is a problem worthy of your attention.",
    image: "images/ch4_q3_perfection.png",
    choices: [
      {
        text: "It has to be correct.",
        next: "ch4_q4_perfection",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "It has to be elegant.",
        next: "ch4_q4_perfection",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "It has to withstand scrutiny from people I do not respect.",
        next: "ch4_q4_perfection",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q3_impact: {
    chapter: 4,
    title: "You survive into legend.",
    text:
      "The falling pasta settles. Reality hard-cuts to plating like the budget ran out. You are now on a finished dish, shining with destiny, seasoning, and a small amount of self-mythology.",
    image: "images/ch4_q3_impact.png",
    choices: [
      {
        text: "I need them to remember me even if they cannot explain why.",
        next: "ch4_q4_impact",
        points: { arrabbiata: 2, amatriciana: 1, vodka: 1 }
      },
      {
        text: "I need this to feel unmistakably like me.",
        next: "ch4_q4_impact",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "I need this to hit immediately and linger after.",
        next: "ch4_q4_impact",
        points: { vodka: 2, amatriciana: 1 }
      }
    ]
  },

  ch4_q4_connection: {
    chapter: 4,
    title: "The plate arrives.",
    text:
      "A fork hovers above you. This is the moment every simmer, spill, and miracle was moving toward. At the very end, what matters most?",
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
    text:
      "A fork hovers above you. This is the moment every simmer, spill, and miracle was moving toward. At the very end, what matters most?",
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
        text: "Holding the standard all the way through.",
        next: "result",
        points: { carbonara: 1, bolognese: 2 }
      }
    ]
  },

  ch4_q4_impact: {
    chapter: 4,
    title: "The plate arrives.",
    text:
      "A fork hovers above you. This is the moment every simmer, spill, and miracle was moving toward. At the very end, what matters most?",
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

if (startBtn) {
  startBtn.addEventListener("click", () => {
    resetGame();
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    renderTile();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    resetGame();
    resultScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}