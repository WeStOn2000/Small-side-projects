let animals = document.querySelector("#animals");
let breeds = document.querySelector("#breeds");
let dataBreed = document.querySelectorAll("option[data-breed]");
animals.addEventListener('change',() =>{
     for(let i= 0; i < dataBreed.length; i++){
       if(animals.value !== dataBreed[i].getAttribute("data-breed")){
         dataBreed[i].hidden = true;
         dataBreed[i].disabled = true;
       }else{
        dataBreed[i].hidden = false;
        dataBreed[i].disabled = false;
       }
     }
     if(breeds.value !== ""){
      breeds.value = "reselect";
     }

});


const form = document.querySelector("#form");
const icon = document.querySelector("img");
icon.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isMatch =
    document
      .querySelector("#breeds")
      .value.includes(document.querySelector("#animals").value) &&
    document.querySelector("#animals").value !== "";

  if (isMatch) {
    icon.style.display = "inherit";
  } else {
    icon.style.display = "inherit";
  }
  updateIcon(isMatch);
});

function updateIcon(isMatch) {
  icon.className = "";
  if (isMatch) {
    icon.src = "./images/success.png";
    icon.alt = "form success icon";
  } else {
    icon.src = "./images/error.png";
    icon.alt = "form error icon";
  }
  setTimeout(() => {
    icon.style.display = "none";
  }, 1500);
}
