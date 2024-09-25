                     // FOR THE PERCENTAGE AND CHANGING TEXTS

let x = document.querySelector("h2");
let percent = Math.floor(Math.random() * 101);

x.innerHTML = percent + "%";

let text = document.querySelector(".conclusion");

let img = document.querySelector("img.couple-img");

if (percent >= 1 & percent <= 40) {
   text.innerHTML = "You two go together like oil and water💀";
   img.src= "images/a distance between them.jpg";
}

else if (percent >= 41 & percent <= 60) {
   text.innerHTML = "You're better off just being friends😢";
   img.setAttribute("src", "images/looks like they're fighting.jpg");
   img.setAttribute("alt", "photo of a couple that aren't  compatible");
}

else if (percent >= 61 & percent <= 70) {
  text.innerHTML = "Yayy!!, you're compatible🤩";
  img.setAttribute("src", "images/highly compatible.jpg");
  img.setAttribute("alt", "photo of a couple that are compatible");
}

else if (percent >= 71 & percent <= 90) {
   text.innerHTML = "You're meant for each other😊";
   img.setAttribute("src", "images/the watering the plant own.jpg");
   img.setAttribute("alt", "photo of a couple that are highly compatible");
}

else {
   text.innerHTML = "SOULMATES!!😍";
   img.setAttribute("src", "images/soulmates.jpg");
   img.setAttribute("alt", "photo of a couple that are soulmates");
}


                              // THE BACK BUTTON

let goBack = document.querySelectorAll("button")[1];

 goBack.addEventListener("click", function () {
   history.back();
 });


                         // REFESHING THE PAGE TO THE HOME PAGE

if (window.performance.navigation.type == 1) {
   window.location.replace("index.html");
} else {
}
