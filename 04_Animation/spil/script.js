let myRand;
let points;
let life;
let speed;

// mine elementer
const good1 = document.querySelector("#strawberry_container");
const good2 = document.querySelector("#rasberry_container");
const good3 = document.querySelector("#blueberry_container");
const good4 = document.querySelector("#oreo_container");
const good5 = document.querySelector("#choco_container");
const good6 = document.querySelector("#cookie_container");
const good7 = document.querySelector("#cherry_container");
const bad1 = document.querySelector("#brocoli_container");
const bad2 = document.querySelector("#cheese_container");
const bad3 = document.querySelector("#fish_container");
const bad4 = document.querySelector("#pizza_container");
const bad5 = document.querySelector("#tomato_container");

// load vindue
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  // window.addEventListener("resize", windowResize);
  // windowResize();

  //Skjul andre skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#info").classList.add("hide");

  //Vis start skærm
  // console.log("startskærm");
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  // startGame();
  document.querySelector("#start_knap").addEventListener("click", infoScreen);
}

function infoScreen() {
  //Vis info skærm
  console.log("infoScreen");
  document.querySelector("#info").classList.remove("hide");

  //Klik på info_knap
  console.log("startGame");
  document.querySelector("#info_knap").addEventListener("click", startGame);

  //Skjul skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
}

// start spillet
function startGame() {
  console.log("startGame");

  //Skjul skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#info").classList.add("hide");
  document.querySelector("#start").classList.add("hide");

  // start værdier
  points = 0;
  life = 3;

  //nulstil point
  document.querySelector("#point").textContent = points;

  //nulstil alle liv
  document.querySelector("#life1").classList.remove("fjernet");
  document.querySelector("#life2").classList.remove("fjernet");
  document.querySelector("#life3").classList.remove("fjernet");

  // starter timer
  document.querySelector("#time_board").classList.add("roter");

  // når timer animation er færdig, kaldes stopGame
  document
    .querySelector("#time_board")
    .addEventListener("animationend", stopGame);

  //Giv en random position og random delay til container
  myRand = Math.floor(Math.random() * 5) + 1;
  good1.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 4) + 1;
  good1.classList.add("delay" + myRand);
  good1.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good2.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 4) + 1;
  good2.classList.add("delay" + myRand);
  good2.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good3.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  good3.classList.add("delay" + myRand);
  good3.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good4.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  good4.classList.add("delay" + myRand);
  good4.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good5.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  good5.classList.add("delay" + myRand);
  good5.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good6.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  good6.classList.add("delay" + myRand);
  good6.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  good7.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  good7.classList.add("delay" + myRand);
  good7.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  bad1.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  bad1.classList.add("delay" + myRand);
  bad1.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  bad2.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  bad2.classList.add("delay" + myRand);
  bad2.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  bad3.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  bad3.classList.add("delay" + myRand);
  bad3.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  bad4.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 4) + 1;
  bad4.classList.add("delay" + myRand);
  bad4.classList.add("speed" + myRand);

  myRand = Math.floor(Math.random() * 10) + 1;
  bad5.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 6) + 1;
  bad5.classList.add("delay" + myRand);
  bad5.classList.add("speed" + myRand);

  //Start fald-animationer på alle elementer
  good1.classList.add("fald");
  good2.classList.add("fald");
  good3.classList.add("fald");
  good4.classList.add("fald");
  good5.classList.add("fald");
  good6.classList.add("fald");
  good7.classList.add("fald");
  bad1.classList.add("fald");
  bad2.classList.add("fald");
  bad3.classList.add("fald");
  bad4.classList.add("fald");
  bad5.classList.add("fald");

  //Lyt efter om fald animation er færdig
  good1.addEventListener("animationiteration", goodReset);
  good2.addEventListener("animationiteration", goodReset);
  good3.addEventListener("animationiteration", goodReset);
  good4.addEventListener("animationiteration", goodReset);
  good5.addEventListener("animationiteration", goodReset);
  good6.addEventListener("animationiteration", goodReset);
  good7.addEventListener("animationiteration", goodReset);
  bad1.addEventListener("animationiteration", badReset);
  bad2.addEventListener("animationiteration", badReset);
  bad3.addEventListener("animationiteration", badReset);
  bad4.addEventListener("animationiteration", badReset);
  bad5.addEventListener("animationiteration", badReset);

  //Lyt efter klik på alle elementer
  good1.addEventListener("mousedown", clickGood);
  good2.addEventListener("mousedown", clickGood);
  good3.addEventListener("mousedown", clickGood);
  good4.addEventListener("mousedown", clickGood);
  good5.addEventListener("mousedown", clickGood);
  good6.addEventListener("mousedown", clickGood);
  good7.addEventListener("mousedown", clickGood);
  bad1.addEventListener("mousedown", clickBad);
  bad2.addEventListener("mousedown", clickBad);
  bad3.addEventListener("mousedown", clickBad);
  bad4.addEventListener("mousedown", clickBad);
  bad5.addEventListener("mousedown", clickBad);

  if (points >= 30) {
    console.log("ikke nok point");
    gameover();
  }

  //baggrunds musik
  document.querySelector("#background_sound").play();
  document.querySelector("#background_sound").volume = 0.5;
  document.querySelector("#background_sound").currentTime = 0;
}
// Good click
function clickGood() {
  console.log("clickGood");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickGood);

  //Point_________________________________________________
  points = points + 5;
  document.querySelector("#point").textContent = points;

  //start frys og forsvind animationer på sprite element
  this.classList.add("frys");
  this.firstElementChild.classList.add("forsvind");

  //Spil lyd til godt element
  document.querySelector("#sound_good").volume = 0.5;
  document.querySelector("#sound_good").currentTime = 0;
  document.querySelector("#sound_good").play();

  //Lyt efter om animation er færdig
  this.addEventListener("animationend", goodReset);
}

// Bad click
function clickBad() {
  console.log("clickBad");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickBad);

  //Mister et liv og fjerner en shake______________________________
  document.querySelector("#life" + life).classList.add("fjernet");
  life--;
  console.log("life er " + life);

  // start frys, drej, forsvind animationer på sprite element
  this.classList.add("frys");
  this.firstElementChild.classList.add("drej");
  this.firstElementChild.classList.add("forsvind");

  //Spil lyd til dårligt element
  document.querySelector("#sound_bad").volume = 0.5;
  document.querySelector("#sound_bad").currentTime = 0;
  document.querySelector("#sound_bad").play();

  //Lyt efter om animation er færdig
  this.addEventListener("animationend", badReset);

  if (life <= 0) {
    console.log("ikke flere liv");
    stopGame();
  }
}

// restart god animation_______________________________________________________
function goodReset() {
  console.log("goodReset");

  // ryd op, fjern alt på container og sprite _________________________________
  this.classList = "";
  this.firstElementChild.classList = "";

  // for at kunne genstarte fald animation, fjerner vi og tilføjer samme function
  this.offsetLeft;

  // random tal mellem 1 og 10 til random pos
  myRand = Math.floor(Math.random() * 10) + 1;

  // giver random position til container
  this.classList.add("pos" + myRand);

  // random tal mellem 1 og 4 til random pos
  myRand = Math.floor(Math.random() * 4) + 1;
  this.classList.add("delay" + myRand);

  // start fald animation på element
  this.classList.add("fald");

  //sæt speed på
  this.classList.add("speed" + speed);

  // lyt efter klik på element
  this.addEventListener("mousedown", clickGood);
}

// restart dårlig animation________________________________________________________________________
function badReset() {
  console.log("badReset");

  // ryd op, fjern alt på container og sprite _____________________________________________________
  this.classList = "";
  this.firstElementChild.classList = "";

  // for at kunne genstarte fald animation, fjerne vi og tilføjer samme function__________________
  this.offsetLeft;

  // random tal mellem 1 og 10
  myRand = Math.floor(Math.random() * 10) + 1;

  // giver random position til container
  this.classList.add("pos" + myRand);

  // start fald animation på element
  this.classList.add("fald");

  //sæt speed på
  this.classList.add("speed" + speed);

  // klik på element
  this.addEventListener("mousedown", clickBad);
}

// _____________________________________________________________
// stop spillet
function stopGame() {
  console.log("stopGame");

  //Stop timer
  document.querySelector("#time_board").classList.remove("roter");
  document
    .querySelector("#time_board")
    .removeEventListener("animationend", stopGame);

  //fjern alt er på alle elementers container og sprite
  document.querySelector("#strawberry_container").classList = "hide";
  document.querySelector("#strawberry_sprite").classList = "";
  document.querySelector("#rasberry_container").classList = "hide";
  document.querySelector("#rasberry_sprite").classList = "";
  document.querySelector("#blueberry_container").classList = "hide";
  document.querySelector("#blueberry_sprite").classList = "";
  document.querySelector("#oreo_container").classList = "hide";
  document.querySelector("#oreo_sprite").classList = "";
  document.querySelector("#choco_container").classList = "hide";
  document.querySelector("#choco_sprite").classList = "";
  document.querySelector("#cookie_container").classList = "hide";
  document.querySelector("#cookie_sprite").classList = "";
  document.querySelector("#cherry_container").classList = "hide";
  document.querySelector("#cherry_sprite").classList = "";
  document.querySelector("#brocoli_container").classList = "hide";
  document.querySelector("#brocoli_sprite").classList = "";
  document.querySelector("#cheese_container").classList = "hide";
  document.querySelector("#cheese_sprite").classList = "";
  document.querySelector("#fish_container").classList = "hide";
  document.querySelector("#fish_sprite").classList = "";
  document.querySelector("#pizza_container").classList = "hide";
  document.querySelector("#pizza_sprite").classList = "";
  document.querySelector("#tomato_container").classList = "hide";
  document.querySelector("#tomato_sprite").classList = "";

  //fjern alle event listener på alle containere
  document
    .querySelector("#strawberry_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#strawberry_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#strawberry_container")
    .removeEventListener("mousedown", clickGood);
  document
    .querySelector("#rasberry_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#rasberry_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#rasberry_container")
    .removeEventListener("mousedown", clickGood);
  document
    .querySelector("#blueberry_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#blueberry_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#blueberry_container")
    .removeEventListener("mousedown", clickGood);
  document
    .querySelector("#oreo_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#oreo_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#oreo_container")
    .removeEventListener("mousedown", clickGood);
  document
    .querySelector("#choco_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#choco_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#choco_container")
    .removeEventListener("mousedown", clickGood);

  document
    .querySelector("#cookie_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#cookie_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#cookie_container")
    .removeEventListener("mousedown", clickGood);

  document
    .querySelector("#cherry_container")
    .removeEventListener("animationiteration", goodReset);
  document
    .querySelector("#cherry_container")
    .removeEventListener("animationend", goodReset);
  document
    .querySelector("#cherry_container")
    .removeEventListener("mousedown", clickGood);

  document
    .querySelector("#brocoli_container")
    .removeEventListener("animationiteration", badReset);
  document
    .querySelector("#brocoli_container")
    .removeEventListener("animationend", badReset);
  document
    .querySelector("#brocoli_container")
    .removeEventListener("mousedown", clickBad);
  document
    .querySelector("#cheese_container")
    .removeEventListener("animationiteration", badReset);
  document
    .querySelector("#cheese_container")
    .removeEventListener("animationend", badReset);
  document
    .querySelector("#cheese_container")
    .removeEventListener("mousedown", clickBad);
  document
    .querySelector("#fish_container")
    .removeEventListener("animationiteration", badReset);
  document
    .querySelector("#fish_container")
    .removeEventListener("animationend", badReset);
  document
    .querySelector("#fish_container")
    .removeEventListener("mousedown", clickBad);

  document
    .querySelector("#pizza_container")
    .removeEventListener("animationiteration", badReset);
  document
    .querySelector("#pizza_container")
    .removeEventListener("animationend", badReset);
  document
    .querySelector("#pizza_container")
    .removeEventListener("mousedown", clickBad);

  document
    .querySelector("#tomato_container")
    .removeEventListener("animationiteration", badReset);
  document
    .querySelector("#tomato_container")
    .removeEventListener("animationend", badReset);
  document
    .querySelector("#tomato_container")
    .removeEventListener("mousedown", clickBad);

  if (life <= 0) {
    console.log("ikke flere liv");
    gameover();
  } else if (points >= 30) {
    console.log("ikke nok point");
    winner();
  } else {
    gameover();
  }
}

// game over
function gameover() {
  console.log("gameover");

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");

  //Klik på reStart1
  document.querySelector("#reStart1").addEventListener("click", startGame);

  //Spil lyd til taber-skærm
  document.querySelector("#sound_loser").currentTime = 0;
  document.querySelector("#sound_loser").play();
}

// winner
function winner() {
  console.log("Hurra du vandt");

  //Vis levelComplete skærm
  console.log("winner");
  document.querySelector("#level_complete").classList.remove("hide");

  //Klik på reStart2
  document.querySelector("#reStart2").addEventListener("click", startGame);

  //Spil lyd til winnerskærm
  document.querySelector("#sound_winner").currentTime = 0;
  document.querySelector("#sound_winner").play();

  //udskriv points
  document.querySelector("#level_complete_points").textContent =
    "Du har fået " + points + " point";
}
