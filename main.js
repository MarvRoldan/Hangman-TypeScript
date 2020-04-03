var list = ["crossing", "organ", "past", "green", "insight"];
var randomWord = list[Math.floor(Math.random() * list.length)];
var letterCorrect = [];
var i;
var start = function () {
    for (i = 0; i < randomWord.length; i++) {
        letterCorrect[i] = "__";
    }
    document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
    console.log(randomWord);
};
var letterCheck = function () {
    var letterGuess;
    var letterWrong = [];
    var match = false;
    document.onkeyup = function (event) {
        letterGuess = event.key.toLowerCase();
        for (i = 0; i < randomWord.length; i++) {
            if (letterGuess === randomWord[i]) {
                letterCorrect[i] = letterGuess;
                document.getElementById("hidden").innerHTML = letterCorrect.join(" ");
                match = true;
            }
        }
        if (match)
            return;
        if (letterWrong.indexOf(letterGuess) < 0) {
            letterWrong.push(letterGuess);
            document.getElementById("wrongGuess").innerHTML = letterWrong.join(" ");
        }
    };
};
start();
letterCheck();
//# sourceMappingURL=main.js.map