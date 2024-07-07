// script.js

// Define the HTML code as a string
const htmlCode = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Movie Booking</title>
      <style>
          .container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
          }
          .movie {
              margin: 10px;
              cursor: pointer;
          }
          .movie img {
              width: 200px;
              height: 300px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="movie" onclick="bookTicket('Movie 1')">
              <img src="movie1.jpg" alt="Movie 1">
              <p>Movie 1</p>
          </div>
          <div class="movie" onclick="bookTicket('Movie 2')">
              <img src="movie2.jpg" alt="Movie 2">
              <p>Movie 2</p>
          </div>
          <!-- Add more movie elements here -->
      </div>
      <script>
          function bookTicket(movieTitle) {
              console.log(\`You have booked a ticket for ${movieTitle}\`);
              // Add more functionality here
          }
      </script>
  </body>
  </html>
`;

// Create a new HTML document
const doc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
doc.documentElement.innerHTML = htmlCode;

// Get the body element
const body = doc.body;

// Add the body element to the current document
document.body.appendChild(body);

// Call the bookTicket function when a movie element is clicked
body.addEventListener("click", function(event) {
  if (event.target.classList.contains("movie")) {
    const movieTitle = event.target.querySelector("p").textContent;
    bookTicket(movieTitle);
  }
});