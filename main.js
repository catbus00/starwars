const moviesUrl = 'https://swapi.dev/api/films/';
const charactersUrl = 'https://swapi.dev/api/people/';
const starshipUrl = 'https://swapi.dev/api/starships/';

async function fetchStarWarsInfo() {
  try {
    const movieResponse = await fetch(moviesUrl);
    const movieData = await movieResponse.json();
    const movies = movieData.results;

    const movieInfo = document.querySelector('#movie-list');
    movieInfo.innerHTML = '';
    movies.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');
      movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Title:</strong> ${movie.title}</p>
        <p><strong>Episode ID:</strong> ${movie.episode_id}</p>
        <p><strong>Opening Crawl:</strong> ${movie.opening_crawl}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Producer:</strong> ${movie.producer}</p>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
      `;
      movieInfo.appendChild(movieDiv);
    });

    const characterResponse = await fetch(charactersUrl);
    const characterData = await characterResponse.json();
    const characters = characterData.results;

    const characterInfo = document.querySelector('#character-list');
    characterInfo.innerHTML = '';
    characters.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('character');
      characterDiv.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Mass:</strong> ${character.mass} kg</p>
      `;
      characterInfo.appendChild(characterDiv);
    });
    const starshipResponse = await fetch(starshipUrl);
    const starshipData = await starshipResponse.json();
    const starships = starshipData.results;
    
    const starshipInfo = document.querySelector('#starship-list');
    starshipInfo.innerHTML = '';
    starships.forEach(starship => {
      const starshipDiv = document.createElement('div');
      starshipDiv.classList.add('starship');
      starshipDiv.innerHTML = `
        <h3>${starship.name}</h3>
        <p><strong>Name:</strong> ${starship.name}</p>
        <p><strong>Model:</strong> ${starship.model}</p>
        <p><strong>Manufacturer:</strong> ${starship.manufacturer}</p>
        <p><strong>Cost in Credits:</strong> ${starship.cost_in_credits}</p>
        <p><strong>Length:</strong> ${starship.length}</p>
        <p><strong>Max Atmosphering Speed:</strong> ${starship.max_atmosphering_speed}</p>
        <p><strong>Crew:</strong> ${starship.crew}</p>
        <p><strong>Passengers:</strong> ${starship.passengers}</p>
        <p><strong>Cargo Capacity:</strong> ${starship.cargo_capacity}</p>
        <p><strong>Consumables:</strong> ${starship.consumables}</p>
        <p><strong>Hyperdrive Rating:</strong> ${starship.hyperdrive_rating}</p>
        <p><strong>MGLT:</strong> ${starship.MGLT}</p>
        <p><strong>Starship Class:</strong> ${starship.starship_class}</p>
      `;
      starshipInfo.appendChild(starshipDiv);
    });
  } catch (error) {
    console.log(error);
  }
} 
fetchStarWarsInfo();
