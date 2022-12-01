window.addEventListener("load", sidenVises);

//TILFÆLDIGE TAL
function ranNumb(n) {
  return Math.floor(Math.random() * n) + 1;
}

//BAGGRUND
function sidenVises(){
    console.log("sidenVises")


document.querySelector("#kameraudstyr_container1").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container2").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container3").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container4").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container5").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container6").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container7").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container8").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container9").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container10").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container11").classList.add("delay" + ranNumb(7), "drop2", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container12").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container13").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container14").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container15").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));
document.querySelector("#kameraudstyr_container16").classList.add("delay" + ranNumb(7), "drop1", "pos" + ranNumb(7));

}