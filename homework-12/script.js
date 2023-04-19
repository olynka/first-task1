const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");
const btnFilm = document.querySelector(".btnFilm");
const btnCharacters = document.querySelector(".btnCharacters");
const form = document.querySelector(".input-form");

let chapter='' ;
console.log(chapter);



    async function getFilm() {
       const getFilms= await fetch("https://swapi.dev/api/films/").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
        )
        return getFilms
    
    }

    async function getPlanets() {
        const getPlanets=await fetch("https://swapi.dev/api/planets/").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
        )
        return getPlanets
    
    }

    async function getFilmsId(number) {
       
        const getFilmsId=await fetch(`https://swapi.dev/api/films/${number}/`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
        )
        return   getFilmsId
    
    }
   async function getCharacter() {
        const getCharacter=await fetch(`https://swapi.dev/api/people/`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
        )
        return   getCharacter
    
    }




// newStarWarsApi.getFilmsId()

function getCharacterFilmId(number) {
       getFilmsId(number).then((e) => { return (e.characters)}).then(a => a.forEach(a => { 
       fetch(a).then(
     (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
      
    }).then(a=>{userList.innerHTML+=(`<li class="gallery-item"><p class="gallery-name"><b>Name</b>: ${a.name}</p>
      <p class="gallery-name"><b>birth year</b>: ${a.birth_year}</p>
       <p class="gallery-name">sex</b>: ${a.gender}</p>
           <img src="images/characters/${a.name}.jpg" alt="no pic" class="gallery-image-film" />
        </li>`
    )
    })
        
    }))
   }
 fetchUsersBtn.addEventListener('click', () => {
    getPlanets().then((planet) =>renderUserList(planet.results))
         .catch((error) => console.log(error));
 })

 btnFilm.addEventListener('click', () => {
  getFilm().then((character) => renderFilmList(character.results))
         .catch((error) => console.log(error));
 })


btnCharacters.addEventListener('click', () => {
   let chapters = document.querySelector(".input-form").value

     if(chapters===''){getCharacter().then((character) =>renderCharacterList(character.results))
       .catch((error) => console.log(error));
     } else {
       getCharacterFilmId(document.querySelector(".input-form").value)
  }
  return chapter=chapters
})
 
function renderUserList(planets) {
  const markup = planets
      .map((planet) => {
      return `<li class="gallery-item"><p class="gallery-name"><b>Name</b>: ${planet.name}</p>
            <img src="images/planet/planets/${planet.name}.jpg" alt="no pic" class="gallery-image" />
        </li>`;
        
    })
    .join("");
  userList.innerHTML = markup;
}

function renderFilmList(films) {
  const markup = films
      .map((film) => {
      return `<li class="gallery-item"><p class="gallery-name"><b>Name</b>: ${film.title}</p>
            <img src="images/film/${film.title}.jpg" alt="no pic" class="gallery-image-film" />
        </li>`;
        
    })
    .join("");
  userList.innerHTML = markup;
}

function renderCharacterList(characters) {
  const markup = characters
      .map((character) => {
          return `<li class="gallery-item"><p class="gallery-name"><b>Name</b>: ${character.name}</p>
      <p class="gallery-name"><b>birth year</b>: ${character.birth_year}</p>
       <p class="gallery-name">sex</b>: ${character.gender}</p>
           <img src="images/characters/${character.name}.jpg" alt="no pic" class="gallery-image-film" />
        </li>`;
        
    })
    .join("");
  userList.innerHTML = markup;
}


