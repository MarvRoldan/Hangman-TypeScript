const list: string[] = ["crossing", "organ", "past", "green", "insight"];
const randomWord: string = list[Math.floor(Math.random() * list.length)];
const letterCorrect: string[] = [];
let i;

function start(): void {
  for (i = 0; i < randomWord.length; i++) {
    letterCorrect[i] = "__";
  }
  document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
  console.log(randomWord);
}

function letterCheck(): void {
  let letterGuess: string;
  const letterWrong: string[] = [];
  let match: boolean = false;

  document.onkeyup = event => {
    letterGuess = event.key.toLowerCase();

    for (i = 0; i < randomWord.length; i++) {
      if (letterGuess === randomWord[i]) {
        letterCorrect[i] = letterGuess;
        document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
        match = true;
      }
    }

    if (match) return;

    if (letterWrong.indexOf(letterGuess) < 0) {
      letterWrong.push(letterGuess);
      document.getElementById("wrongGuess").innerHTML = letterWrong.join(" ");
    }
  };
}

start();
letterCheck();
