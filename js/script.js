document.getElementById("play_now").addEventListener("click", function () {
  hiddenSection("homePage");
  visibleSection("playgroundPage");
});

// In Display screenBoard had showed random letter and keyboard keys color changed.
const screenKey= document.getElementById("screenLetter").innerText = randomLetter();
keyboardColor(screenKey);
