// in HTML class added 'hidden' class;
function hiddenSection(tagName) {
  const id = document.getElementById(tagName);
  id.classList.add("hidden");
  return id;
}

// from HTML class remove 'hidden' class;
function visibleSection(tagName) {
  const id = document.getElementById(tagName);
  id.classList.remove("hidden");
  return id;
}

// in keyboard added a color class;
function keyboardColor(id){
 const key=document.getElementById(id);
 key.classList.add('bg-orange-500')
}

// from keyboard remove background-color;
function keyboardColorRemove(id){
  const key=document.getElementById(id);
  key.classList.remove('bg-orange-500');
 }

// random letter Create Function;
function randomLetter() {
  const letter = `abcdefghijklmnopqrstuvwxyz/`;
  const letterArr = letter.split("");
  const randomNumber = Math.floor(Math.random() * 27);
  const randomLetter = letterArr[randomNumber];
  return randomLetter;
}

// in Screen Random color set;
function screenKey() {
  const alphabet=randomLetter()
  const screenKey = document.getElementById("screenLetter");
  screenKey.innerText = alphabet.toUpperCase();
  
  keyboardColor(alphabet);
  
}



