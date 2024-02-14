let currentPoint = 0;

document.getElementById("play_now").addEventListener("click", function () {
  hiddenSection("homePage");
  visibleSection("playgroundPage");
});

// In Display screenBoard had showed random letter and keyboard keys color changed.

addEventListener("keyup", function (e) {
  const updatedKey = document.getElementById("screenLetter").innerText;

  // while You type a correct number point increment+1;
  if (updatedKey === e.key) {
    currentPoint += 1;
    keyboardColorRemove(updatedKey);
    screenKey();
  }
  document.getElementById("increment_point").innerText = currentPoint;
});
