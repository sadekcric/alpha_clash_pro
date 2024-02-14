// variable part
// score
// score is connected by keyup Event.
let currentPoint = 0;
let decrementPoint = 0;

// home page to PlayGround
document.getElementById("play_now").addEventListener("click", function () {
  hiddenSection("homePage");
  visibleSection("playgroundPage");
});

// In Display screenBoard had showed random letter and keyboard keys color changed.

addEventListener("keyup", function (e) {
  const updatedKey = document.getElementById("screenLetter").innerText;

  // while You type a correct number point increment+1 and decrement+.25. and you press the wrong keyword your decrement will decrement-1;
  if (updatedKey === e.key) {
    currentPoint += 1;
    decrementPoint += 0.1;
    keyboardColorRemove(e.key);
    screenKey();
  } else {
    decrementPoint -= 1;
  }
  document.getElementById("increment_point").innerText = currentPoint;
  document.getElementById("decrement_life").innerText = decrementPoint.toFixed(2);

  // Game over section
  if (decrementPoint < 0) {
    hiddenSection("playgroundPage");
    visibleSection("finalScore");
    // final Score
    document.getElementById("total_score").innerHTML = currentPoint;
  }

});

// play Again
// Score board to PlayGround
document.getElementById("play_again").addEventListener("click", function () {
  hiddenSection("finalScore");
  visibleSection("playgroundPage");
  currentPoint -= currentPoint;
  decrementPoint -= decrementPoint;
  document.getElementById("increment_point").innerText = '0';
document.getElementById("decrement_life").innerText = '0';
});

