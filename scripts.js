document.addEventListener('DOMContentLoaded', function() {
  // Fetch Bollywood Movies
  fetch('https://moviedownloadingapi.vercel.app/movies')
    .then(response => response.json())
    .then(data => {
      const bollywoodMovies = data.movies.filter(movie => movie.type === 'Bollywood');
      const bollywoodContainer = document.getElementById('bollywood-movies');
      bollywoodMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <h3>${movie.title}</h3>
          <img src="${movie.poster}" alt="${movie.title}">
          <p>Release Year: ${movie.year}</p>
          <p>Rating: ⭐ ${movie.rating}</p>
          <p>Overview: ${movie.overview}</p>
        `;
        bollywoodContainer.appendChild(movieElement);
      });
    });

  // Fetch Hollywood Movies
  fetch('https://moviedownloadingapi.vercel.app/movies')
    .then(response => response.json())
    .then(data => {
      const hollywoodMovies = data.movies.filter(movie => movie.type === 'Hollywood');
      const hollywoodContainer = document.getElementById('hollywood-movies');
      hollywoodMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
          <h3>${movie.title}</h3>
          <img src="${movie.poster}" alt="${movie.title}">
          <p>Release Year: ${movie.year}</p>
          <p>Rating: ⭐ ${movie.rating}</p>
          <p>Overview: ${movie.overview}</p>
        `;
        hollywoodContainer.appendChild(movieElement);
      });
    });

  // Fetch Web Series
  fetch('https://moviedownloadingapi.vercel.app/movies')
    .then(response => response.json())
    .then(data => {
      const webSeries = data.movies.filter(movie => movie.type === 'Web Series');
      const webSeriesContainer = document.getElementById('webseries-list');
      webSeries.forEach(series => {
        const seriesElement = document.createElement('div');
        seriesElement.innerHTML = `
          <h3>${series.title}</h3>
          <img src="${series.poster}" alt="${series.title}">
          <p>Release Year: ${series.year}</p>
          <p>Rating: ⭐ ${series.rating}</p>
          <p>Overview: ${series.overview}</p>
        `;
        webSeriesContainer.appendChild(seriesElement);

::contentReference[oaicite:27]{index=27}
 
