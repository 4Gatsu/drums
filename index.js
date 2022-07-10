// var numofbuttons = document.querySelectorAll(".drum").lenght;

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom2.mp3");
        tom2.play();
        break;

    default: console.log(buttonInnerHTML);
// default aka else
  }



});

}
