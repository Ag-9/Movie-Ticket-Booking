/ JavaScript
const movies = [
  { id: 'movie1', title: 'Movie 1', banner: 'movie1-banner.jpg' },
  { id: 'movie2', title: 'Movie 2', banner: 'movie2-banner.jpg' },
  { id: 'movie3', title: 'Movie 3', banner: 'movie3-banner.jpg' },
  // Add more movies here
];

const movieContainer = document.getElementById('movie-container');

movies.forEach((movie) => {
  const movieBanner = document.createElement('div');
  movieBanner.className = 'movie-banner';
  movieBanner.innerHTML = `
    <img src="${movie.banner}" alt="${movie.title} Banner">
    <h2>${movie.title}</h2>
  `;
  movieBanner.onclick = () => {
    // Route to seat booking page with the selected movie ID
    window.location.href = `seat-booking.html?movieId=${movie.id}`;
  };
  movieContainer.appendChild(movieBanner);
});

// CSS (optional)
const styles = `
  .movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .movie-banner {
    margin: 20px;
    cursor: pointer;
  }
  .movie-banner img {
    width: 200px;
    height: 300px;
  }
  .movie-banner h2 {
    text-align: center;
  }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// HTML (optional)
const html = `
  <div id="movie-container"></div>
`;
document.body.innerHTML = html;

  window.location.href = 'book-seats.html';