
    const card = document.getElementById("card-container");
movieBank.forEach(movie => {

    movie.characters.forEach(character => {
   card.innerHTML +=   `
            <div class="col-6 mb-4">
                <div class="card h-100 w-100">

                    <img class="card-img-top img-character" src="" alt="${character.cname}">

                    <div class="card-body">

                        <h4 class="card-title">${character.cname}</h4>

                        <p class="card-text">Movie: ${movie.movie}</p>
                        <p class="card-text">Role: ${character.role}</p>
                        <p class="card-text">Personality: ${character.personality}</p>
                        <p class="card-text">Species: ${character.species}</p>

                    </div>

                </div>
            </div>
        `
    })
});