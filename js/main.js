let elButton = document.querySelector("#siteTheme")
let themePink = document.querySelector("#themePink")
let themeBlue = document.querySelector("#themeBlue")
let themeBlack = document.querySelector("#themeBlack")
let themeYellow = document.querySelector("#themeYellow")
let closeButton = document.querySelector("#close")
let showModal = document.querySelector("#showModal");
let elBody = document.querySelector("body")
let elInput = document.querySelector("input")
let elSubmit = document.querySelector("#submit")

elButton.addEventListener("click", () => {
  showModal.classList.toggle("themea")
});

themePink.addEventListener("click", () => {
  elBody.classList.toggle("active__instagram__bg")
})

themeBlue.addEventListener("click", () => {
  elBody.classList.toggle("active__blue__theme")
})

themeBlack.addEventListener("click", () => {
  elBody.classList.toggle("active__black")
})

themeYellow.addEventListener("click", () => {
  elBody.classList.toggle("active__yellow")
})

pokemons.forEach(element => {

  const elUl = document.querySelector("ul")
  const newCard = document.createElement("li")
  newCard.innerHTML = `
  <img class = "mx-auto" src="${element.img}">
  <hr class ="w-full mt-16 mb-4" >
  <h4 class="text-2xl">Name: ${element.name}</h4>
  <p>Type: ${element.type}</p>
  <p>Weaknesses: ${element.weaknesses}</p>
  <p>Height: ${element.height}</p>`
  elUl.appendChild(newCard)
});

function search(filteredArray){
  elSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    const searchText = elInput.value.trim().toLowerCase();
      const filteredArray = []
      pokemons.forEach((pokemon) =>{
        if (pokemon.name.toLowerCase().includes(searchText)) {
            filteredArray.push(pokemon);
        }
      
  })
})
};
console.log(search(filteredArray))