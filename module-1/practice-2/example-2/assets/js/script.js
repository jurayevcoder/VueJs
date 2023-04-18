let cardItems = document.getElementById("card-items");
let search = document.getElementById("search");

function fillCards(lim = "") {
	cardItems.innerHTML = "";
	for (const i in pokemons) {
		if (!lim || pokemons[i].name.includes(lim)) {
			cardItems.innerHTML += `
        <div class="card" id="${pokemons[i].id}">
          <img
            class="card-img"
            src="${pokemons[i].img}"
            alt="image" />
          <div class="bottom">
            <div class="bottom-center-left">
              <h3>${pokemons[i].name}</h3>
              <p>${pokemons[i].type.join()}</p>
            </div>
            <div class="bottom-center-right">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
          <div class="bottom-bottom">
            <h5>Weight: ${pokemons[i].weight}</h5>
            <h5>Height: ${pokemons[i].height}</h5>
          </div>
        </div>
      `;
		}
	}
}

search.addEventListener("input", (e) => {
	fillCards(e.target.value);
});

fillCards();
