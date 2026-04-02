const sauceResults = {
  marinara: {
    name: "Marinara",
    image: "images/MarinaraProfile.png",
    description:
      '"You are warm, dependable, and broadly beloved. You may not demand attention, but entire civilizations quietly stop functioning without you."',
    traits: "Temperament: Steady 82%, Social 68%, Dramatic 14%",
    extra: "Known for: calming a room before it curdles",
    strengths: "- Loyal\n- Grounding\n- Welcoming\n- Consistent",
    weaknesses:
      "- Can get stuck being everyone's default support system\n- Sometimes too forgiving\n- Quietly resents being taken for granted",
    review: '"Would absolutely hold your hand through a public simmering." - Alfredo'
  },

  alfredo: {
    name: "Alfredo",
    image: "images/AlfredoProfile.png",
    description:
      '"You are indulgent, affectionate, and emotionally persuasive. You believe comfort is a civic duty and, frankly, you are right."',
    traits: "Temperament: Soft 84%, Social 61%, Dramatic 35%",
    extra: "Known for: making minor problems feel survivable",
    strengths: "- Generous\n- Comforting\n- Charming\n- Big-hearted",
    weaknesses:
      "- Avoids conflict until it overthickens\n- Can be too much for minimalist sauces\n- Feels things in rich detail",
    review: '"Dangerously soothing. Five minutes with them and you're confessing things." - Vodka Sauce'
  },

  pesto: {
    name: "Pesto",
    image: "images/PestoProfile.png",
    description:
      '"You are inventive, stylish, and impossible to industrialize. You make originality look casual, which is frankly rude to the rest of us."',
    traits: "Temperament: Creative 89%, Social 44%, Dramatic 41%",
    extra: "Known for: turning a bad idea into a signature move",
    strengths: "- Original\n- Magnetic\n- Fast-thinking\n- Unexpectedly capable",
    weaknesses:
      "- Can get bored mid-plan\n- Changes direction beautifully but often\n- Sometimes confuses whim with destiny",
    review: '"I object to how often this nonsense works." - Carbonara'
  },

  carbonara: {
    name: "Carbonara",
    image: "images/CarbonaraProfile.png",
    description:
      '"You are precise, formidable, and quietly certain that standards matter. You are not bossy. You are simply correct at a high volume internally."',
    traits: "Temperament: Exact 91%, Social 29%, Dramatic 26%",
    extra: "Known for: producing order from preventable foolishness",
    strengths: "- Precise\n- Competent\n- Decisive\n- Respected",
    weaknesses:
      "- Inflexible under nonsense\n- Not built for group projects with clowns\n- Can make help feel like a performance review",
    review: '"Terrifying when right, which is regrettably often." - Bolognese'
  },

  bolognese: {
    name: "Bolognese",
    image: "images/BologneseProfile.png",
    description:
      '"You are patient, substantial, and impossible to rush without consequences. People underestimate you until they need something real to lean on."',
    traits: "Temperament: Deep 87%, Social 33%, Dramatic 19%",
    extra: "Known for: staying solid while everyone else separates",
    strengths: "- Patient\n- Thoughtful\n- Dependable\n- Deeply steady",
    weaknesses:
      "- Slow to trust\n- Can carry too much alone\n- Sometimes mistaken for emotionally unavailable when really just simmering",
    review: '"There is a lot going on here. None of it is shallow." - Marinara'
  },

  arrabbiata: {
    name: "Arrabbiata",
    image: "images/ArrabbiataProfile.png",
    description:
      '"You are fiery, direct, and functionally allergic to pretending not to care. You have never once been accused of subtlety by a credible witness."',
    traits: "Temperament: Intense 93%, Social 51%, Dramatic 82%",
    extra: "Known for: turning outrage into propulsion",
    strengths: "- Bold\n- Honest\n- Passionate\n- High-impact",
    weaknesses:
      "- Reactive\n- Escalates like it is a sacred art\n- Occasionally starts fires both metaphorical and stovetop",
    review: '"A lot. But if something needs doing, they are already doing it angrily." - Amatriciana'
  },

  puttanesca: {
    name: "Puttanesca",
    image: "images/PuttanescaProfile.png",
    description:
      '"You are chaotic, resourceful, and held together by flavor, nerve, and a total disregard for polite expectations."',
    traits: "Temperament: Chaotic 95%, Social 47%, Dramatic 73%",
    extra: "Known for: surviving situations that should have killed the vibe outright",
    strengths: "- Fearless\n- Improvisational\n- Memorable\n- Weirdly effective",
    weaknesses:
      "- Unpredictable\n- Poor impulse governance\n- Makes every emergency more personal than necessary",
    review: '"Deeply suspicious. Deeply compelling." - Pesto'
  },

  vodka: {
    name: "Vodka Sauce",
    image: "images/VodkaSauceProfile.png",
    description:
      '"You are charming, adaptable, and suspiciously good under social pressure. You can enter almost any room and find its exact seasoning."',
    traits: "Temperament: Flexible 84%, Social 89%, Dramatic 46%",
    extra: "Known for: fitting in without disappearing",
    strengths: "- Adaptable\n- Funny\n- Socially skilled\n- Stylish",
    weaknesses:
      "- Can get performative\n- Hates being pinned down too early\n- Sometimes dodges sincerity by being witty first",
    review: '"Infuriatingly good at crowd work." - Cacio e Pepe'
  },

  cacioepepe: {
    name: "Cacio e Pepe",
    image: "images/CacioEPepeProfile.png",
    description:
      '"You are sharp, spare, and unreasonably effective. You believe excess is often insecurity in decorative form."',
    traits: "Temperament: Minimal 94%, Social 18%, Dramatic 21%",
    extra: "Known for: ending debates with one dry sentence",
    strengths: "- Elegant\n- Efficient\n- Clever\n- Self-possessed",
    weaknesses:
      "- Dry even by your own standards\n- Secretly judgmental\n- May confuse brevity with kindness",
    review: '"Insufferable. Clean work, though." - Carbonara'
  },

  amatriciana: {
    name: "Amatriciana",
    image: "images/AmatricianaProfile.png",
    description:
      '"You are blunt, forceful, and too busy moving to waste time on niceties. Your delivery can wound, but your usefulness is hard to argue with."',
    traits: "Temperament: Direct 92%, Social 37%, Dramatic 67%",
    extra: "Known for: cutting through nonsense before it breeds",
    strengths: "- Decisive\n- Fierce\n- Efficient\n- Strong-willed",
    weaknesses:
      "- Impatient\n- Harsher than intended or maybe exactly as intended\n- Uninterested in sugarcoating even on ceremonial occasions",
    review: '"Horrific bedside manner. Excellent in a crisis." - Marinara'
  }
};

const chapterPill = document.getElementById("chapter-pill");

const storyTiles = {
  // =========================
  // CHAPTER 1: LADLETON
  // =========================
  ch1_q1: {
    chapter: 1,
    title: "Chapter 1: Morning in Ladleton",
    text:
      "You wake to the bells of Saint Reduction ringing across Ladleton.\nSteam lifts from the rooftops. Delivery noodles rattle down the cobblestones. Somewhere outside your window, a vendor is yelling, \"Fresh basil! Not yesterday basil!\"\nThis is Sauce City: no humans, no chefs, just sauces trying to hold civilization together with varying degrees of grace.",
    image: "images/ch1_q1.png",
    choices: [
      {
        text: "Open the window, inhale the morning, and greet the neighborhood like you mean it.",
        next: "ch1_q2_warm",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "Check the weather, the schedule, and whether the city is already making avoidable mistakes.",
        next: "ch1_q2_precise",
        points: { carbonara: 2, cacioepepe: 2, bolognese: 1 }
      },
      {
        text: "Ignore the schedule. Today clearly wants something strange from you.",
        next: "ch1_q2_chaos",
        points: { pesto: 1, puttanesca: 2, arrabbiata: 1, amatriciana: 1, vodka: 1 }
      }
    ]
  },

  ch1_q2_warm: {
    chapter: 1,
    title: "The neighborhood knows your ladle",
    text:
      "By the time you reach the street, three sauces have waved, one noodle child has attached itself to your side, and old Mrs. Ragù from upstairs has already told you whose cousin is separating.\nBeing known in Ladleton is either a blessing or a timesink. Usually both.",
    image: "images/ch1_q2_warm.png",
    choices: [
      {
        text: "Stop and hear everybody out. Civic tenderness is still civic service.",
        next: "ch1_q3_warm",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Offer help, snacks, and one emotionally stabilizing compliment per resident.",
        next: "ch1_q3_warm",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Keep it kind, but moving. You can be warm without becoming public property.",
        next: "ch1_q3_warm",
        points: { vodka: 2, marinara: 1 }
      }
    ]
  },

  ch1_q2_precise: {
    chapter: 1,
    title: "You begin with due diligence",
    text:
      "The Ladleton Gazette has already published three errors, the tram to Downtown Simmer is late by seven minutes, and someone has hung a banner for the annual Sauce Parade with 'celebration' misspelled as 'celeriation.'\nYou do not enjoy being right this early, but here you are.",
    image: "images/ch1_q2_precision.png",
    choices: [
      {
        text: "Correct the banner yourself. Standards do not maintain themselves.",
        next: "ch1_q3_precise",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Make note of every failure and continue. Intervention must be strategic.",
        next: "ch1_q3_precise",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Focus on the thing that matters most and let the minor nonsense stew in its own shame.",
        next: "ch1_q3_precise",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q2_chaos: {
    chapter: 1,
    title: "The city tempts you immediately",
    text:
      "At the corner of Basil and Broth, a stranger in mirrored sunglasses is selling tickets to something called Sauce Camp. Nearby, a pigeon made entirely of parmesan steals an olive and escapes prosecution.\nThe day has opened with reckless promise.",
    image: "images/ch1_q2_chaos.png",
    choices: [
      {
        text: "Buy the ticket. Unknown plans are still plans.",
        next: "ch1_q3_chaos",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "Decline the ticket, but ask enough questions to make this your business anyway.",
        next: "ch1_q3_chaos",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Demand to know whether any of this is legal and, if not, whether that improves it.",
        next: "ch1_q3_chaos",
        points: { arrabbiata: 2, amatriciana: 1 }
      }
    ]
  },

  ch1_q3_warm: {
    chapter: 1,
    title: "A sauce in need appears",
    text:
      "Outside the tram stop, a young béchamel is sitting on the curb, visibly shaken. Their lunch has leaked through the container, and they whisper the single most terrifying phrase in the language:\n\"I think I'm making a scene.\"",
    image: "images/ch1_q3_comfort.png",
    choices: [
      {
        text: "Sit beside them and make the sidewalk feel less public.",
        next: "ch1_q4_warm",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Produce napkins, reassurance, and a replacement snack like a miracle worker.",
        next: "ch1_q4_warm",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Make one gentle joke to puncture the panic, then help them regroup.",
        next: "ch1_q4_warm",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch1_q3_precise: {
    chapter: 1,
    title: "You arrive at work already disappointed",
    text:
      "At your desk in the Bureau of Municipal Seasoning, a fresh case file waits: an unlicensed fountain of ranch has appeared in the town square. Witnesses describe it as 'aggressive' and 'spiritually Midwestern.'\nNo one else seems to understand the severity.",
    image: "images/ch1_q3_precision.png",
    choices: [
      {
        text: "Treat it as the procedural emergency it clearly is.",
        next: "ch1_q4_precise",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Study the paperwork first. Sloppy response makes sloppy aftermath.",
        next: "ch1_q4_precise",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Ask who will actually be affected and start there.",
        next: "ch1_q4_precise",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch1_q3_chaos: {
    chapter: 1,
    title: "Sauce Camp is not a camp",
    text:
      "The ticket gets you into a warehouse full of velvet curtains, smoke machines, and a hand-painted sign reading WELCOME, VISIONARY SAUCES.\nA host in sequined ladlewear announces tonight's event: open-mic prophecy.\nYou had other plans. They were weaker.",
    image: "images/ch1_q3_chaos.png",
    choices: [
      {
        text: "Sign up immediately. If fate wants a statement, give it one.",
        next: "ch1_q4_chaos",
        points: { arrabbiata: 1, pesto: 2, vodka: 1 }
      },
      {
        text: "Lurk first. A room this odd will reveal its hierarchy if you wait.",
        next: "ch1_q4_chaos",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "Heckle the host until you somehow become part of the act.",
        next: "ch1_q4_chaos",
        points: { puttanesca: 2, arrabbiata: 1, vodka: 1 }
      }
    ]
  },

  ch1_q4_warm: {
    chapter: 1,
    title: "Your reputation in Ladleton is...",
    text:
      "By noon, the city has already formed its usual impression of you. Which one feels least incorrect?",
    image: "images/ch1_q4_comfort.png",
    choices: [
      {
        text: "The one who makes chaos feel survivable.",
        next: "ch2_q1",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "The one who can comfort without condescending.",
        next: "ch2_q1",
        points: { alfredo: 2 }
      },
      {
        text: "The one who keeps things light enough to keep moving.",
        next: "ch2_q1",
        points: { vodka: 2, marinara: 1 }
      }
    ]
  },

  ch1_q4_precise: {
    chapter: 1,
    title: "Your reputation in Ladleton is...",
    text:
      "By noon, the city has already formed its usual impression of you. Which one feels least incorrect?",
    image: "images/ch1_q4_precision.png",
    choices: [
      {
        text: "The one with standards, whether or not that is convenient.",
        next: "ch2_q1",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "The one who says little and misses nothing.",
        next: "ch2_q1",
        points: { cacioepepe: 2, bolognese: 1 }
      },
      {
        text: "The one who doesn't panic when things get heavy.",
        next: "ch2_q1",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch1_q4_chaos: {
    chapter: 1,
    title: "Your reputation in Ladleton is...",
    text:
      "By noon, the city has already formed its usual impression of you. Which one feels least incorrect?",
    image: "images/ch1_q4_chaos.png",
    choices: [
      {
        text: "The one who turns weirdness into momentum.",
        next: "ch2_q1",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "The one who makes every room louder on purpose.",
        next: "ch2_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The one nobody can predict and everybody discusses.",
        next: "ch2_q1",
        points: { puttanesca: 2, vodka: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 2: THE GREAT SAUCE PARADE
  // =========================
  ch2_q1: {
    chapter: 2,
    title: "Chapter 2: The Great Sauce Parade",
    text:
      "By afternoon, all of Ladleton is flowing toward the city center for the Great Sauce Parade, an annual celebration of civic pride, regional flavor, and barely controlled pageantry.\nEvery district is represented: Marinara Row, the Cream Quarter, Basil Heights, the Spicy Wards, and the mysterious Fermented Fringe, whose permits remain controversial.",
    image: "images/ch2_q1.png",
    choices: [
      {
        text: "Join the parade properly. Community matters, even when tacky.",
        next: "ch2_q2_team",
        points: { marinara: 2, alfredo: 1, bolognese: 1 }
      },
      {
        text: "Inspect the floats first. Something about this setup feels underseasoned.",
        next: "ch2_q2_skeptical",
        points: { carbonara: 2, cacioepepe: 1, bolognese: 1 }
      },
      {
        text: "Find the weirdest float immediately. That is where the day is happening.",
        next: "ch2_q2_showy",
        points: { pesto: 1, vodka: 2, puttanesca: 1, arrabbiata: 1 }
      }
    ]
  },

  ch2_q2_team: {
    chapter: 2,
    title: "You get absorbed into a committee",
    text:
      "Someone clips a festival badge to your chest before you can object. You are now, apparently, helping coordinate the Noodle Youth Chorale, two confetti cannons, and a ceremonial wheel of parm the size of a sofa.\nNo one asks whether you consent to leadership. They simply sense it and assign you paperwork.",
    image: "images/ch2_q2_warm.png",
    choices: [
      {
        text: "Take charge calmly. If nobody leads this, the wheel kills someone.",
        next: "ch2_q3_team",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Keep morale high. Parade disasters escalate when everyone feels ugly.",
        next: "ch2_q3_team",
        points: { alfredo: 2, vodka: 1 }
      },
      {
        text: "Turn the chaos into a shared adventure and keep things moving.",
        next: "ch2_q3_team",
        points: { vodka: 2, marinara: 1 }
      }
    ]
  },

  ch2_q2_skeptical: {
    chapter: 2,
    title: "You notice the float problem first",
    text:
      "Three floats are fine. One is overdecorated. One is actively leaking. And at the end of the line sits a massive silver rocket labeled SAUCE TO THE STARS.\nYou are fairly sure this was not part of last year's parade.",
    image: "images/ch2_q2_reserved.png",
    choices: [
      {
        text: "Track down whoever approved a parade rocket and ask concise questions.",
        next: "ch2_q3_skeptical",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Read the plaque first. Hidden nonsense often announces itself in small print.",
        next: "ch2_q3_skeptical",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Watch quietly and figure out who is pretending this is normal.",
        next: "ch2_q3_skeptical",
        points: { bolognese: 2, cacioepepe: 1 }
      }
    ]
  },

  ch2_q2_showy: {
    chapter: 2,
    title: "You find the rocket float",
    text:
      "The float is magnificent and almost certainly illegal. Chrome fins. Red velvet seating. A banner reading SEE THE GALAXY, FEEL THE GLOSS.\nA peppy announcer declares that one lucky sauce will be chosen as Parade Ambassador to Space.",
    image: "images/ch2_q2_big.png",
    choices: [
      {
        text: "Volunteer before the sentence finishes.",
        next: "ch2_q3_showy",
        points: { vodka: 2, arrabbiata: 1 }
      },
      {
        text: "Ask what 'to space' means in a regulatory sense.",
        next: "ch2_q3_showy",
        points: { amatriciana: 2, carbonara: 1 }
      },
      {
        text: "Sneak aboard. If destiny wanted paperwork, it should have arrived earlier.",
        next: "ch2_q3_showy",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  ch2_q3_team: {
    chapter: 2,
    title: "The parade goes off-script",
    text:
      "Mid-procession, the rocket float begins to hum. Children cheer. Several adults stop cheering and start checking for exits. A loudspeaker crackles:\n\"Congratulations, Ladleton. We are now entering Phase Two.\"",
    image: "images/ch2_q3_warm.png",
    choices: [
      {
        text: "Get everyone to safety first. Questions can stand in line.",
        next: "ch2_q4_team",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Keep the crowd calm while figuring out whether this is deadly or merely embarrassing.",
        next: "ch2_q4_team",
        points: { bolognese: 2, vodka: 1 }
      },
      {
        text: "Grab the microphone before panic finds it first.",
        next: "ch2_q4_team",
        points: { vodka: 2, arrabbiata: 1 }
      }
    ]
  },

  ch2_q3_skeptical: {
    chapter: 2,
    title: "The plaque explains far too much",
    text:
      "You crouch beside the base and read:\nTHE COSMIC REDUCTION INITIATIVE.\nA goodwill mission from Ladleton to the Sauceosphere. Volunteer launch will occur at precisely 4:14 p.m. In the event of turbulence, remain emotionally folded.\nThe plaque is signed by the mayor in a handwriting that looks guilty.",
    image: "images/ch2_q3_reserved.png",
    choices: [
      {
        text: "Confront the mayor immediately. There are limits.",
        next: "ch2_q4_skeptical",
        points: { amatriciana: 2, carbonara: 1 }
      },
      {
        text: "Document everything before anybody claims this was consensual.",
        next: "ch2_q4_skeptical",
        points: { cacioepepe: 2, bolognese: 1 }
      },
      {
        text: "Find the weakest point in the plan and quietly take control of it.",
        next: "ch2_q4_skeptical",
        points: { carbonara: 2, bolognese: 1 }
      }
    ]
  },

  ch2_q3_showy: {
    chapter: 2,
    title: "You are now on the rocket",
    text:
      "Somehow, by charm, trespass, or volume, you have boarded the float before liftoff. Inside are velvet straps, complimentary breadsticks, and a steward whispering, \"Please do not stir too hard during ascent.\"\nOutside, the city counts down.",
    image: "images/ch2_q3_big.png",
    choices: [
      {
        text: "Wave to the crowd like you invented being chosen.",
        next: "ch2_q4_showy",
        points: { vodka: 2, marinara: 1 }
      },
      {
        text: "Demand to know the emergency protocol before you commit emotionally to the moment.",
        next: "ch2_q4_showy",
        points: { amatriciana: 2, carbonara: 1 }
      },
      {
        text: "Search the cabin for the weird lever. There is always a weird lever.",
        next: "ch2_q4_showy",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  ch2_q4_team: {
    chapter: 2,
    title: "When things go public, you become...",
    text:
      "The whole city is watching now. In spectacle and uncertainty, which role do you fall into fastest?",
    image: "images/ch2_q4_warm.png",
    choices: [
      {
        text: "The one who steadies the crowd.",
        next: "ch3_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one who keeps everyone emotionally intact.",
        next: "ch3_q1",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "The one who can hold attention long enough to redirect it.",
        next: "ch3_q1",
        points: { vodka: 2, alfredo: 1 }
      }
    ]
  },

  ch2_q4_skeptical: {
    chapter: 2,
    title: "When things go public, you become...",
    text:
      "The whole city is watching now. In spectacle and uncertainty, which role do you fall into fastest?",
    image: "images/ch2_q4_reserved.png",
    choices: [
      {
        text: "The one enforcing reality on the unserious.",
        next: "ch3_q1",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "The one quietly noticing the real threat first.",
        next: "ch3_q1",
        points: { bolognese: 2, cacioepepe: 1 }
      },
      {
        text: "The one who wastes no words and no motion.",
        next: "ch3_q1",
        points: { cacioepepe: 2, carbonara: 1 }
      }
    ]
  },

  ch2_q4_showy: {
    chapter: 2,
    title: "When things go public, you become...",
    text:
      "The whole city is watching now. In spectacle and uncertainty, which role do you fall into fastest?",
    image: "images/ch2_q4_big.png",
    choices: [
      {
        text: "The one who somehow thrives with an audience.",
        next: "ch3_q1",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "The one who becomes louder than the problem.",
        next: "ch3_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The one who pushes the dangerous button for a better plot.",
        next: "ch3_q1",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 3: SAUCE IN SPACE
  // =========================
  ch3_q1: {
    chapter: 3,
    title: "Chapter 3: You go to space",
    text:
      "With a sound like a giant stockpot being dropped by God, the rocket float tears free from the parade route and launches into the sky.\nLadleton shrinks below you. The clouds part. Stars appear.\nYou are in space.\nThere is no time to process this because something large moves past the window, trailing comet dust and ancient opinions.",
    image: "images/ch3_q1.png",
    choices: [
      {
        text: "Stay focused. Space is still a problem with variables.",
        next: "ch3_q2_logic",
        points: { carbonara: 2, cacioepepe: 1, bolognese: 1 }
      },
      {
        text: "Check on everyone first. Panic behaves badly in enclosed vessels.",
        next: "ch3_q2_care",
        points: { marinara: 2, alfredo: 1, vodka: 1 }
      },
      {
        text: "Rush the window. If this kills you, at least see it properly.",
        next: "ch3_q2_wild",
        points: { pesto: 1, arrabbiata: 1, puttanesca: 2, vodka: 1 }
      }
    ]
  },

  ch3_q2_logic: {
    chapter: 3,
    title: "You choose procedure in orbit",
    text:
      "The vessel trembles. Warning lights flash in three colors and one emotional tone. Carbonara, if present, is vindicated beyond reason. If not present, you become Carbonara-adjacent by necessity.\nThen the intercom announces: \"Minor issue: space dinosaurs.\"",
    image: "images/ch3_q2_logical.png",
    choices: [
      {
        text: "Demand a definition of 'minor' and a list of available tools.",
        next: "ch3_q3_logic",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Find the control panel and reduce the problem to essentials.",
        next: "ch3_q3_logic",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Get everyone into useful positions before fear chooses for them.",
        next: "ch3_q3_logic",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch3_q2_care: {
    chapter: 3,
    title: "You choose morale under impossible conditions",
    text:
      "Inside the cabin, one sauce is crying discreetly, one is not crying discreetly, and one has decided this whole thing is spiritually elegant. A baby pesto in a booster seat asks whether the stars can hear.\nYou decide the answer matters.",
    image: "images/ch3_q2_caring.png",
    choices: [
      {
        text: "Tell the truth gently. Fear hates being handled alone.",
        next: "ch3_q3_care",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Comfort first, explanation second, snacks whenever possible.",
        next: "ch3_q3_care",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Keep everybody talking and laughing so panic cannot set the tone.",
        next: "ch3_q3_care",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q2_wild: {
    chapter: 3,
    title: "You meet the space dinosaurs",
    text:
      "They are magnificent. Huge reptilian shapes drift between asteroids, wearing meteor dust like stage glitter. One presses its snout against the glass and blinks at you with ancient marinara-colored eyes.\nThen another bites the antenna clean off.",
    image: "images/ch3_q2_chaotic.png",
    choices: [
      {
        text: "Bite back conceptually. This is now personal.",
        next: "ch3_q3_wild",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Try to communicate. Anything this dramatic might also be lonely.",
        next: "ch3_q3_wild",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Push the weird lever. If there was ever a time, it is now.",
        next: "ch3_q3_wild",
        points: { puttanesca: 2, vodka: 1 }
      }
    ]
  },

  ch3_q3_logic: {
    chapter: 3,
    title: "The dinosaur situation worsens",
    text:
      "The control panel reveals the ugly truth: the rocket has wandered into the Cretaceous Gravy Belt, a migration zone for orbital thunder-lizards. A collision alert sounds. Then two more. Then a polite chime, which somehow feels worse.",
    image: "images/ch3_q3_logical.png",
    choices: [
      {
        text: "Pick a plan instantly and commit hard enough that others follow.",
        next: "ch3_q4_logic",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "Adapt in real time. Survival is a texture problem now.",
        next: "ch3_q4_logic",
        points: { bolognese: 2, vodka: 1 }
      },
      {
        text: "Shut off every nonessential system and every nonessential opinion.",
        next: "ch3_q4_logic",
        points: { cacioepepe: 2, amatriciana: 1 }
      }
    ]
  },

  ch3_q3_care: {
    chapter: 3,
    title: "The cabin looks to you",
    text:
      "When the vessel lurches, several sauces instinctively turn toward you. It is that terrible, flattering moment when a group decides you seem emotionally load-bearing.\nOutside, a dinosaur tail slams across the hull.",
    image: "images/ch3_q3_caring.png",
    choices: [
      {
        text: "Speak clearly, calmly, and like you fully believe they can do this.",
        next: "ch3_q4_care",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "Move through the cabin, reassuring each person one by one.",
        next: "ch3_q4_care",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Keep the mood buoyant enough that no one fully curdles.",
        next: "ch3_q4_care",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q3_wild: {
    chapter: 3,
    title: "This becomes a whole encounter",
    text:
      "The weird lever opens an exterior speaker system. Your voice blasts across space at disrespectful volume. The nearest dinosaur rears back, offended, while another begins following the rocket like it thinks this is a game.\nYou may have invented diplomacy or made it worse.",
    image: "images/ch3_q3_chaotic.png",
    choices: [
      {
        text: "Challenge the beast openly. Let history decide who embarrassed whom.",
        next: "ch3_q4_wild",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Turn the moment into spectacle. Sometimes drama is the language.",
        next: "ch3_q4_wild",
        points: { vodka: 2, pesto: 1 }
      },
      {
        text: "Improvise nonsense until it becomes strategy by accident.",
        next: "ch3_q4_wild",
        points: { puttanesca: 2, pesto: 1 }
      }
    ]
  },

  ch3_q4_logic: {
    chapter: 3,
    title: "Under impossible pressure, you become...",
    text:
      "The stars blur. The hull groans. In the exact second things become ridiculous, what part of you hardens into usefulness?",
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
        text: "The one who cuts through nonsense without apology.",
        next: "ch4_q1",
        points: { cacioepepe: 1, amatriciana: 2 }
      }
    ]
  },

  ch3_q4_care: {
    chapter: 3,
    title: "Under impossible pressure, you become...",
    text:
      "The stars blur. The hull groans. In the exact second things become ridiculous, what part of you hardens into usefulness?",
    image: "images/ch3_q4_caring.png",
    choices: [
      {
        text: "The comfort system.",
        next: "ch4_q1",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "The one who keeps everyone together.",
        next: "ch4_q1",
        points: { marinara: 2, bolognese: 1 }
      },
      {
        text: "The one who keeps the vibe from becoming fatal.",
        next: "ch4_q1",
        points: { vodka: 2, pesto: 1 }
      }
    ]
  },

  ch3_q4_wild: {
    chapter: 3,
    title: "Under impossible pressure, you become...",
    text:
      "The stars blur. The hull groans. In the exact second things become ridiculous, what part of you hardens into usefulness?",
    image: "images/ch3_q4_chaotic.png",
    choices: [
      {
        text: "The siren with opinions.",
        next: "ch4_q1",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "The wildcard nobody can responsibly plan around.",
        next: "ch4_q1",
        points: { puttanesca: 2, vodka: 1 }
      },
      {
        text: "The one who looks alive in the middle of nonsense.",
        next: "ch4_q1",
        points: { pesto: 2, vodka: 1 }
      }
    ]
  },

  // =========================
  // CHAPTER 4: PASTA APOCALYPSE
  // =========================
  ch4_q1: {
    chapter: 4,
    title: "Chapter 4: The pasta falls",
    text:
      "A silence takes the ship.\nThe dinosaurs stop moving.\nAhead of you, deep in the velvet black, a field of bright objects appears.\nFor one hopeful second, you think: stars.\nThen the first one passes close enough to see the ridges.\nIt is not stars.\nIt is boiling pasta, raining through space in enormous twisting sheets and spirals.\nThis, apparently, is how dinosaurs go extinct in your universe.",
    image: "images/ch4_q1.png",
    choices: [
      {
        text: "Protect everyone you can. The plot can wait.",
        next: "ch4_q2_guard",
        points: { marinara: 2, alfredo: 1, bolognese: 1 }
      },
      {
        text: "Find the cleanest path through. Panic is decorative now.",
        next: "ch4_q2_precise",
        points: { carbonara: 2, cacioepepe: 2 }
      },
      {
        text: "If the cosmos wants drama, give it a finale.",
        next: "ch4_q2_impact",
        points: { pesto: 1, vodka: 1, arrabbiata: 1, amatriciana: 1, puttanesca: 1 }
      }
    ]
  },

  ch4_q2_guard: {
    chapter: 4,
    title: "You choose tenderness during extinction",
    text:
      "The cabin pitches. Outside, a brontosaurus is erased by an angel-hair cascade with almost sacred elegance. Inside, everyone is either frozen, weeping, or giving advice that should not be heard.\nYour instinct remains annoyingly noble.",
    image: "images/ch4_q2_connection.png",
    choices: [
      {
        text: "Gather everybody close. Fear separates faster than impact.",
        next: "ch4_q3_guard",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "Go straight to the most frightened person and stay there.",
        next: "ch4_q3_guard",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "Hold the center and make yourself a structure.",
        next: "ch4_q3_guard",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q2_precise: {
    chapter: 4,
    title: "You choose method at the end of the world",
    text:
      "Huge ravioli bodies tumble past the windshield like cosmic verdicts. The navigation system has given up and is now displaying a cartoon colander. Even now, some part of you remains capable of narrowing the problem to what matters.",
    image: "images/ch4_q2_perfection.png",
    choices: [
      {
        text: "Take command. The shortest route through disaster is still a route.",
        next: "ch4_q3_precise",
        points: { carbonara: 2, amatriciana: 1 }
      },
      {
        text: "Strip the problem to essentials and discard every flourish.",
        next: "ch4_q3_precise",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "Balance precision with survival. Perfect is useless if nobody arrives.",
        next: "ch4_q3_precise",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q2_impact: {
    chapter: 4,
    title: "You choose drama, naturally",
    text:
      "Some sauces see annihilation and think of loss. You see annihilation and immediately understand blocking, pacing, and final lines.\nIf this is the end, it deserves shape.",
    image: "images/ch4_q2_impact.png",
    choices: [
      {
        text: "Say something unforgettable enough to outlive physics.",
        next: "ch4_q3_impact",
        points: { arrabbiata: 2, amatriciana: 1 }
      },
      {
        text: "Turn the whole disaster into accidental art.",
        next: "ch4_q3_impact",
        points: { pesto: 2, vodka: 1 }
      },
      {
        text: "Do one impossible thing and let legend handle the paperwork.",
        next: "ch4_q3_impact",
        points: { puttanesca: 2, vodka: 1 }
      }
    ]
  },

  ch4_q3_guard: {
    chapter: 4,
    title: "Then the world changes texture",
    text:
      "The boiling pasta strikes.\nLight folds.\nTime turns slippery.\nThen, all at once: quiet.\nYou are no longer in space.\nThe rocket, the dinosaurs, the stars — gone.\nYou and the others are drifting gently downward through steam toward a wide waiting plate far below.",
    image: "images/ch4_q3_connection.png",
    choices: [
      {
        text: "I hope whoever meets me feels cared for.",
        next: "ch4_q4_guard",
        points: { marinara: 2, alfredo: 1 }
      },
      {
        text: "I hope I make the landing softer for everyone else.",
        next: "ch4_q4_guard",
        points: { alfredo: 2, marinara: 1 }
      },
      {
        text: "I hope I hold together with dignity all the way down.",
        next: "ch4_q4_guard",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q3_precise: {
    chapter: 4,
    title: "You survive into plating",
    text:
      "The apocalypse resolves with suspicious neatness. Steam clears. You find yourself arranged on a grand ceremonial plate in the Hall of Service, Ladleton's most sacred civic chamber.\nThis is either salvation or presentation, which for you may be the same thing.",
    image: "images/ch4_q3_perfection.png",
    choices: [
      {
        text: "I need this to be correct from edge to center.",
        next: "ch4_q4_precise",
        points: { carbonara: 2, cacioepepe: 1 }
      },
      {
        text: "I need this to be elegant enough to silence doubt.",
        next: "ch4_q4_precise",
        points: { cacioepepe: 2, carbonara: 1 }
      },
      {
        text: "I need this to withstand pressure without showing strain.",
        next: "ch4_q4_precise",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q3_impact: {
    chapter: 4,
    title: "You survive into legend",
    text:
      "When reality returns, it returns dramatically.\nYou are sprawled across an enormous silver platter in the center of town while bells ring and citizens cheer like this was always the plan.\nSomeone in the crowd yells, \"Give them a speech!\" which is, regrettably, fair.",
    image: "images/ch4_q3_impact.png",
    choices: [
      {
        text: "I need them to remember the feeling of me.",
        next: "ch4_q4_impact",
        points: { arrabbiata: 2, vodka: 1, amatriciana: 1 }
      },
      {
        text: "I need this story to sound impossible and true.",
        next: "ch4_q4_impact",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "I need the whole city to leave changed, confused, or both.",
        next: "ch4_q4_impact",
        points: { puttanesca: 2, vodka: 1, pesto: 1 }
      }
    ]
  },

  ch4_q4_guard: {
    chapter: 4,
    title: "At the end of everything, what matters most?",
    text:
      "The city is safe. The dinosaurs are history. The pasta sky has closed.\nAs Ladleton gathers around you in awe, what truth feels most like yours?",
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
        text: "Being quietly indispensable.",
        next: "result",
        points: { bolognese: 2, marinara: 1 }
      }
    ]
  },

  ch4_q4_precise: {
    chapter: 4,
    title: "At the end of everything, what matters most?",
    text:
      "The city is safe. The dinosaurs are history. The pasta sky has closed.\nAs Ladleton gathers around you in awe, what truth feels most like yours?",
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
        text: "Remaining solid under scrutiny.",
        next: "result",
        points: { bolognese: 2, carbonara: 1 }
      }
    ]
  },

  ch4_q4_impact: {
    chapter: 4,
    title: "At the end of everything, what matters most?",
    text:
      "The city is safe. The dinosaurs are history. The pasta sky has closed.\nAs Ladleton gathers around you in awe, what truth feels most like yours?",
    image: "images/ch4_q4_impact.png",
    choices: [
      {
        text: "Being unforgettable.",
        next: "result",
        points: { arrabbiata: 2, vodka: 1, amatriciana: 1 }
      },
      {
        text: "Being original.",
        next: "result",
        points: { pesto: 2, puttanesca: 1 }
      },
      {
        text: "Being iconic in a way that worries officials.",
        next: "result",
        points: { puttanesca: 2, vodka: 1, arrabbiata: 1 }
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