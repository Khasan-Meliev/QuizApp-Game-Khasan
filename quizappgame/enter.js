var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
function easygame() {
  document.getElementById("games").style.width = "600px";
  document.getElementById("games").style.height = "360px"
  var easy = document.getElementById("easy");
  easy.remove();
  var medium = document.getElementById("medium");
  medium.remove();
  var hard = document.getElementById("hard");
  hard.remove();
  document.getElementById("questions").style.display = "block "
}
function result() {
  var score = 0;
  if (document.getElementById("correct").checked) {
    score++;
  }
  if (document.getElementById("correct2").checked) {
    score++;
  }

  if (document.getElementById("correct3").checked) {
    score++;
  }
  alert("Your score is: " + score);
}

function mediumgame(){
  document.getElementById("games").style.width = "700px"
  document.getElementById("games").style.height = "400px"
  easy.remove()
  medium.remove()
  hard.remove()
  document.getElementById("questions2").style.display = "block "
}
function result2() {
  var score2 = 0;
  if (document.getElementById("correct4").checked) {
    score2++;
  }
  if (document.getElementById("correct5").checked) {
    score2++;
  }

  if (document.getElementById("correct6").checked) {
    score2++;
  }
  alert("Your score is: " + score2);
}
function hardgame(){
  document.getElementById("games").style.width = "700px"
  document.getElementById("games").style.height = "400px"
  easy.remove()
  medium.remove()
  hard.remove()
  document.getElementById("questions3").style.display = "block "
}
function result3() {
  var score3 = 0;
  if (document.getElementById("correct7").checked) {
    score3++;
  }
  if (document.getElementById("correct8").checked) {
    score3++;
  }

  if (document.getElementById("correct9").checked) {
    score3++;
  }
  alert("Your score is: " + score3);
}