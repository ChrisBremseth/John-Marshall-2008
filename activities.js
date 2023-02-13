const quotes = [
  {
    quote:
      "Change is unavaoidable, but everything happens for a reason. Go with the flow be yourself, and find happiness in the little things. Have some fun.",
    author: "Alexa Anders",
  },
  {
    quote:
      "Live your life the way you want it you only got one chance. Class of 08 we did great! ",
    author: "Tessa Baker",
  },
  {
    quote:
      "Thanks for everything, and good luck 08! Now, go change the world and light up the darkness.",
    author: "Michelle Beck",
  },
  {
    quote:
      "Never stop making mistakes! Thanks for the good times class of 08! I'll never forget you Mikey, Zachariah, & Emmerz. V-Club was the best for sho! 3 down 2 to go!",
    author: "Heather Benning",
  },
  {
    quote:
      "Always think before you act before it's too late and you get grounded.",
    author: "Tracey Besaw",
  },
  {
    quote:
      "What makes the desert beautiful is that somewhere it hides a well -Exupery Be inspired by life. Good luck Micah! Psalm 143:8",
    author: "Heather Block",
  },
  {
    quote:
      "Well it's over, Football, Baseball boys I love you guys. It's been a blast, best of luck to everyone in the future. Deuces.",
    author: "Spencer Brady",
  },
  {
    quote: "BOOOAT!",
    author: "Linh Bui",
  },
  {
    quote:
      "The end of something marks the start of something new. Thanks to all my friends for a great 4 years. 08 is great! Peace & Love.",
    author: "Courtney Caron",
  },
  {
    quote:
      "3 down 2 to go girls! Great times together everyone! It has been a blast Class of '08! Erik Love You Baby.",
    author: "Katie Clark",
  },
  {
    quote:
      "Stay beautiful class of '08, Rockettes never settle, Four, kkro, SB ladies I love you Good luck Chels, Parker, and Hil Dream big, I'm out!",
    author: "Courtney Crowley",
  },
  {
    quote:
      "Celebrate we will, for life is short, but sweet for certain Good Luck Rockettes, Make us proud! &Best of Luck Kayla, Ash BFAAF It's too late. Class of 08. It's been great. <3 Thanks for everything.",
    author: "Amanda Davis",
  },
  {
    quote:
      "Dude, This year has been sick, UW-RF is gonna be sicker. JM Rocks, Peace!",
    author: "John Drews",
  },
  {
    quote:
      "It's been a great journey, and made amazing friends. Sistafriend, court, kelso, kev, charlie, lexypoo, daamir and mesh.. youre amazing. I love you! Good luck!",
    author: "Aya Elmileik",
  },
  {
    quote:
      "To Kaila- my other half, original Four- my sisters forever, Senior D-Line-best time of my life & my friends: Good Luck, Never Change & No Regrets. I Love You, AAF.",
    author: "Ashley Erickson",
  },
  {
    quote:
      "Well, Ghad! It's hard leaving friends, but I'm optimistic as we move on to bigger things. Da Detch Dawd. Keep it real, Douggie Fresh. Peace.",
    author: "Devin Farlow",
  },
  {
    quote:
      "Thanks for the memories, it's been great. Good luck class of 2008 in whatever you do.",
    author: "Krista Goergen",
  },
  {
    quote: "We've made it this far, Nothing's gonna stop us now.",
    author: "Hannah Han",
  },
  {
    quote:
      "High school at JM couldn't have been any more memorable! Live, Laugh, Love! Class of 2008 you've been awesome! College life, Get Ready! Much Love!",
    author: "Krisann Harrington",
  },
  {
    quote:
      "Friends & Family, thanks for the unforgettable memories! Tyler, Always & forever, xoxo! Best of luck Gerkamocha, love ya! Another chapter begins Follow your dreams!",
    author: "Jean Marie Hermanson",
  },
  {
    quote:
      "Senior Year has been crazy. Thanks to the Rochord and NHS. And to you wrestlers Be good! We did it class of 08! Much Love!",
    author: "MiKayla Herrick",
  },
  {
    quote:
      "Four backyards, two snowbanks and counting! 1118, Fresh, Toots, Foley, Radar, Fazy, Trips, Chip, Este, Ode, JR! Rest in peace Sean Taylor #21.",
    author: "Joey Hockert",
  },
  {
    quote:
      "And in the end, it's not the years in your life that count. It's the life in your years. Abraham Lincoln Good times and good luck class of 08!",
    author: "Alisse Indrelie",
  },
  {
    quote: "It's a trap! Our yearbooks can't repel quotes of that magnitude!",
    author: "Mark Irish",
  },
  {
    quote:
      "Time flies by moving so fast. You better make it count cause you can't get it back. KD and Kels couldn't have done it without ya. Ashley ~ BFF and love you Court ~ Good times",
    author: "Kaila Jacobson",
  },
  {
    quote:
      "Aida 50708 Was insane, Ode, Brody, the man, Par Fresh, Hurricane, Toots, Farlow, Trips and Roids, keep it real, it's been good. Good Luck Everyone.",
    author: "Este Kan",
  },
  {
    quote:
      "Beat Captains Keep it hot. Keep T Gimn alive! Swebaybay good looking out, cookies and toon Stars. I love Mr. Farlow. Goody, will you marry me?",
    author: "Evan Kasemeotes",
  },
  {
    quote:
      "Do not travel the road most often followed, but make your own path for others to follow",
    author: "Lillian Kitange",
  },
  {
    quote:
      "Oh, the places well go. Jazz we left our hearts on the floor. Seniors there's nothing on our horizons but everything. Love you. xo Karstar",
    author: "Karli Kolbert",
  },
  {
    quote:
      "Barack Obama for president! Thanks to the people that have made this experience amazing. I love you guys! Good Luck Arijana, Joe and Sebastijan! Courtney!",
    author: "Damir Kovacevic",
  },
  {
    quote:
      "Life is like a box of chocolates, you never know what you're gonna get. Congratulations Class of 2008! Thanks for the memories! Love, Laugh, Smile!",
    author: "Victoria Kreps",
  },
  {
    quote:
      "Every ending is a new beginning Thanks for the memories! Rockettes, car, wingman, saboo, crowls.. I had the best times. Good luck Millie, love you!",
    author: "Kelsey Krolak",
  },
  {
    quote:
      "Some of us will fail, but most of us will prevail. JM Baseball 2008. See you on the flip side.",
    author: "Kris Long",
  },
  {
    quote:
      "Here she comes, here she comes Booooo Cambodian, what about it? I don't know. Sunday Nights Nuff Said.",
    author: "Amanda Loth",
  },
  {
    quote:
      "To my softball team, Drummers you have had made my senior year the best ever. The best wishes to all! Best of luck Krisann love you!",
    author: "Jastene Lovelace",
  },
  {
    quote:
      "Sparkly Pants here, what an adventure! Good times, memories with Catorce, Skittles, Sondri, Cory, Josh Best wishes Concert Choir, you rock! Leaving a Legacy 2008!",
    author: "Mike Luck",
  },
  {
    quote:
      "I don't know where I'd be, without you here with me you're my best friend. Kels, Cfenck, Swe, Aydizzle, Ev, Meesh, Damir, Blo. Thanks yalls.",
    author: "Cal McNeil",
  },
  {
    quote:
      "One of the blessings of old friends, that you can afford to be stupid together. Amber and Andy Senior year was amazing with you guys!",
    author: "Megan Means",
  },
  {
    quote:
      "Friends will come and go but the memories will last forever. Seniors 08. Best of luck JM/LHS Hockey girls. Thunder and Lighting!",
    author: "Alicia Mogen",
  },
  {
    quote:
      "Live every moment to the fullest. We made it! Thanks to everyone for all the amazing memories! Go Bandies! Good luck Mitch! T] Forever.",
    author: "Lindsay Ness",
  },
  {
    quote:
      "And in the end, it's not the years in your like that counts. It's the life in vour vears. Love and thanks to wonderful friends!",
    author: "Carly Newton",
  },
  {
    quote:
      "I want to shout out to my boys Brody, JR, Trips, Hurricane, Spen, Lu Kong, Farva, Fresh. For next year Radar, Chip, Folley live it up. Keep your dreams Big. Ode",
    author: "Bryce Odegarden",
  },
  {
    quote:
      "Love with passion, live with purpose, laugh really hard! Class of 2008: Congratulations, good luck and God bless!",
    author: "Bethany Oesterlin",
  },
  {
    quote:
      "If we take every step with change on our mind, and hope in our hearts, we'll own the world in a mile.",
    author: "Sean Peterson",
  },
  {
    quote: "It's not who I am underneath, but what I do that defines me.",
    author: "Alex Plaetzer",
  },
  {
    quote:
      "When the power of love overcomes the love of power, the world will know peace.",
    author: "Kevin Podein",
  },
  {
    quote:
      "So long and thanks for all the fish. This cost two dollars. It's hard to be random when told to be random.",
    author: "Alex Puent",
  },
  {
    quote:
      "It's been crazy! Thanks for the memories! Bandies, keep it wild. Hakuna matata, it means no worries, so live it up and keep it real!",
    author: "Sondra Roerish",
  },
  {
    quote: "Memories will last forever Peace",
    author: "Steven Sadiku",
  },
  {
    quote:
      "It's been a crazy four years, but we've made it, and it's been a blast, Thanks everyone, and good luck.",
    author: "Aaron Savage",
  },
  {
    quote:
      "It is not far away or hard to find. Just take the path to Nothing and go nowhere until you reach it Peace out!",
    author: "Amanda Schuelka",
  },
  {
    quote:
      "Never let the fear of striking out keep you from playing the game. Congratulations class of 2008! We did it! Katrinna, Jerrica best of luck!",
    author: "Amanda Sinnwell",
  },
  {
    quote:
      "Thanks to all those who made it worthwhile, the memories will last forever! Good luck to my hockey girls. Thunter and Lighting!",
    author: "Michelle Steege",
  },
  {
    quote:
      "T-H-U-G-N-A-S-T-I-E, Things happen, people make mistakes but life has to go on! Good luck everyone! Noodles Rocks! Our Thing!",
    author: "Sarah Thimijan",
  },
  {
    quote:
      "Sorrow looks back, worry looks around, but happiness moves forward Andy and Megan you made senior yr. The greatest. Snap, Krackle, Rock! Under Line Forever!",
    author: "Amber Thompson",
  },
  {
    quote:
      "Thanks everyone for an unforgettable four years! Love to my hockey girls! Much love to my friends, good luck with everything life throws you!",
    author: "Alexa Turner",
  },
  {
    quote:
      "Education is the most powerful weapon which you can use to change the world.. Be the change that you want to see in the world.",
    author: "Nawal Yahya",
  },
];

//previous quotes
let previousQuotes = [];

//running score
let runningScore = 0;

// collect DOM objects
const startButton = document.querySelector("#start-quote");
const buttonDiv = document.querySelector("#buttons");
const quoteText = document.querySelector("#quote-text");
const guessScore = document.querySelector("#guess-score");
const quoteHeader = document.querySelector("#quote-header");

//start game
document.addEventListener("click", function (e) {
  const target = e.target.closest("#start-quote");

  if (target) {
    runningScore = 0;
    guessScore.innerHTML = runningScore;
    previousQuotes = [];
    quoteHeader.innerHTML = "Can you guess who wrote that senior quote?";
    getNewQuote();
  }
});

// Get new quote from the list
function getNewQuote() {
  const quoteIndex = getRandomInt(quotes.length);
  console.log("quote index is: " + quoteIndex);
  if (previousQuotes.includes(quoteIndex) == false) {
    displayNewQuote(quoteIndex);
  } else if (previousQuotes.length == quotes.length) {
    quoteHeader.innerHTML = "Your final score is: " + runningScore;
    buttonDiv.innerHTML =
      "<button id='start-quote' class='btn btn-primary'>Play Again</button>";
    quoteText.innerHTML = "";
  } else {
    getNewQuote();
  }
}

//Display quote and guesses

function displayNewQuote(quoteIndex) {
  //get new quote index and push it into previous quotes
  previousQuotes.push(quoteIndex);
  //get quote and author from quotes
  const newQuote = quotes[quoteIndex];
  const correctAuthor = newQuote.author;
  const authors = getAuthors(quoteIndex);
  console.log(authors);
  //display quote and buttons
  quoteText.innerHTML = newQuote.quote;
  buttonDiv.innerHTML = "";
  authors.forEach((author) => console.log(author));
  authors.forEach((author) => (buttonDiv.innerHTML += author));
  console.log(authors);
  console.log(previousQuotes);
}

//generate authors list
function getAuthors(quoteIndex) {
  const authors = [];
  authors.push(
    "<button type='button' class='btn btn-outline-secondary correct guess'>" +
      quotes[quoteIndex].author +
      "</button>"
  );
  const incorrectMatches = incorrectAuthors(quoteIndex);
  incorrectMatches.forEach((element) => authors.push(element));
  shuffleArray(authors);
  return authors;
}

//get an incorrect author from the quote list
function incorrectAuthors(quoteIndex) {
  let incorrectMatches = [];
  let incorrectMatch;
  for (i = 0; i < 2; i++) {
    let incorrectIndex = getRandomInt(quotes.length - 2);
    if (
      incorrectIndex < quoteIndex &&
      incorrectMatches.includes(incorrectIndex) == false
    ) {
      incorrectMatch = quotes[incorrectIndex].author;
    } else {
      incorrectMatch = quotes[incorrectIndex + 1].author;
    }
    incorrectMatches.push(
      "<button type='button' class='btn btn-outline-secondary incorrect guess'>" +
        incorrectMatch +
        "</button>"
    );
  }
  return incorrectMatches;
}
//evaluate guesses

document.addEventListener("click", function (e) {
  const target = e.target.closest(".guess"); // Or any other selector.
  if (target) {
    evaluateGuess(target);
  }
});
function evaluateGuess(button) {
  if (button.classList.contains("correct")) {
    console.log("correct!");
    runningScore += 1;
    button.style.background = "green";
    button.style.color = "white";
  } else {
    console.log("incorrect!");
    button.style.background = "red";
    const correctAnswer = document.querySelector(".correct");
    console.log(correctAnswer);
    correctAnswer.style.background = "green";
    correctAnswer.style.color = "white";
  }
  console.log(button);
  guessScore.innerHTML = runningScore;
  setTimeout(() => {
    getNewQuote();
  }, 500);
}

//generate random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
