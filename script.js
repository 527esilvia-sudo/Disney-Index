
const card = document.getElementById("card-container");
movieBank.forEach(movie => {

    movie.characters.forEach(character => {
        card.innerHTML += `
     <div class="col-6 mb-4">
    <div class="card h-100 w-100 text-white">

        <!-- Character Image -->
        <img 
            class="card-img img-character" 
            src="https://cdn.shopify.com/s/files/1/0472/9900/2520/files/p19527_k_h9_ab_480x480.jpg?v=1718648724" 
            alt="${character.cname}"
        >

        <!-- Overlay -->
        <div class="card-img-overlay p-0 d-flex flex-column justify-content-between">

            <!-- Top Character Banner -->
            <div class="bg-dark bg-opacity-75 w-100 py-2 px-3">
                <h4 class="card-title m-0">
                    ${character.cname}
                </h4>
            </div>

            <!-- Bottom Area -->
            <div>

                <!-- Character Info -->
                <div class="bg-dark bg-opacity-50 p-2">
                    <p class="card-text m-0">Role: ${character.role}</p>
                    <p class="card-text m-0">Personality: ${character.personality}</p>
                    <p class="card-text m-0">Species: ${character.species}</p>
                </div>

                <!-- Movie Banner -->
                <div class="bg-primary w-100 py-2 px-3">
                    <h5 class="m-0">
                        ${movie.movie}
                    </h5>
                </div>
                 <button class="btn btn-primary mt-auto"
              data-bs-toggle="modal"
              data-bs-target="#characterModal"
              onclick="openModal()">
              View
            </button>
               

            </div>

        </div>

    </div>
</div>
        `
    })
});
// function openModal() {
//     document.getElementById('modalRole').textContent = character.role
// }
const button = document.getElementById('modalBtn')

function openModal () {
    movieBank.forEach(movie => {
  movieBank.characters.forEach(character => {

    console.log(character.cname);
    console.log(character.role);

  });
});
    //  document.getElementById('modalRole').textContent = movieBank[0].characters[0].cname;
     
}