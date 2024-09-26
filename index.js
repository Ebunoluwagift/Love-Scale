                                            // TO GET TO TE RESULT PAGE FROM HOME PAGE
let button = document.querySelectorAll("button")[1];

let form1 = document.querySelectorAll("input")[0];
let form2 = document.querySelectorAll("input")[1];
let form3 = document.querySelectorAll("input")[2];
let form4 = document.querySelectorAll("input")[3];
let form5 = document.querySelectorAll("input")[4];
let form6 = document.querySelectorAll("input")[5];
let form7 = document.querySelectorAll("input")[6];
let form8 = document.querySelectorAll("input")[7];



  button.addEventListener("click", validateForm, {once : true});
  function validateForm() {
    if (form1.value === "" || form2.value === "" || form3.value === "" || form4.value === "" || form5.value === "") {
       alert("⚠️ Please fill in the details before submitting");
    }
    else if (form6.value === "" || form7.value === "" || form8.value === "") {
      alert("⚠️ Please fill in the details before submitting");
    }
    else{
      setTimeout(calc, 1000);

      function calc() {
            let image = document.createElement("img");

        image.src = "Images/Spinner@1x-1.0s-200px-200px (1).svg";
        image.alt = "loading icon";
        image.style = "padding-left: 12px";
        document.querySelector(".load-icon").appendChild(image);

            document.querySelector(".load-icon").classList.add("visible");
            document.querySelectorAll("button")[1].classList.remove("button");
            document.querySelectorAll("button")[1].classList.add("Calculating");
            document.querySelectorAll("div")[19].classList.remove("Submit");
            document.querySelectorAll("div")[19].classList.add("calculate");
            document.querySelector(".calculate").innerHTML = "Calculating";
      }

      setTimeout(initial, 8000);

      function initial() {
        document.querySelector(".calculate").innerHTML = "initializing";
      }

          setTimeout(function () {
            window.location.assign("result.html");
          }, 9000);

       setTimeout(function(){
           document.querySelector(".load-icon").removeChild(image);
           document.querySelector(".load-icon").classList.remove("visible");
           document.querySelectorAll("button")[1].classList.remove("Calculating");
           document.querySelectorAll("button")[1].classList.add("button");
           document.querySelectorAll("div")[19].classList.remove("calculate");
           document.querySelectorAll("div")[19].classList.add("Submit");
           document.querySelector(".Submit").innerHTML = "Submit";
          }, 10000);
    }
  }


                        // EVENT LISTENER FOR KEYPRESS

let input = document.querySelectorAll("input");

for (var i = 0; i < input.length; i++) {

  input[i].addEventListener("keyup", moveNext);

  function moveNext(event) {
    if (event.keyCode == 13) {

      if (this.parentElement.nextElementSibling.querySelector("input")) {
        this.parentElement.nextElementSibling.querySelector("input").focus();
    }
}
}
}

  input[3].addEventListener("keyup", moveAgain);

  function moveAgain() {
    if (event.keyCode === 13) {

      this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.querySelector("input").focus();
        }
    }

  input[7].addEventListener("keyup", moveToButton);

  function moveToButton() {
    if (event.keyCode === 13) {

     this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.querySelector("button").click();
    }
  }
