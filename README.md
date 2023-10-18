**MovieFix**

MovieFix is a mobile-friendly React web app for exploring movies by year and genre. Enjoy seamless scrolling to load movies from various years and genres. Includes a powerful search function for finding movies by title and genre. Responsive design ensures a great experience on all devices, with efficient data retrieval through debouncing.

![Movie Poster](/src/assets/images/movie-poster.png)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your system.
- A TMDb API key. You can obtain one [here](https://www.themoviedb.org/documentation/api).

**How to Get Started:**
1. Clone the repository to your local machine: 
   ```bash
   git clone https://github.com/utkarsh160/Moviefix-app.git
2. Install project dependencies with `npm install`.
3. Start the development server using `npm run dev`.

**Requirements**
1. Layout and UI:

 - Create custom UI components for the app, using React.
 - Display a list of movies sorted in descending order of popularity.
 - Show the movie title, image, genre, cast, director, and a short description related to the movie in each information card.(You have to click on movie card to see movie information.)


2. Default page load state:

 - Load a total of only 20 movies for each year.
 - By default, when a user lands on the page, display a list of movies for the year 2012.
 - Implement smooth scrolling behavior to load more movies as the user scrolls in any direction.

3. Genre Filter:

 - Provide a filter UI that allows users to filter movies by genre.
 - Fetch genres from the TMDb API and show them as filters.
 - When a user selects one or more genres, the list should only display movies of the selected genres.

 4. Search Functionality

- Users can enter search keywords in the search bar located in the navigation area.
- The app will make a request to the TMDb API to fetch movies matching the search criteria.
- The search results will be displayed below the search bar.

5. Known Issues and Limitations
- Infinite Scrolling Issue: The infinite scrolling functionality may not work properly in some scenarios. There might be issues related to detecting when to load more movies. This is a known limitation of the current implementation.

**Key Features:**
- Explore movies by year and genre with smooth scrolling.
- Efficiently load additional content as you scroll using Intersection Observers.
- Search for movies by title and genre, with user-friendly results.
- Mobile-responsive design for an optimal viewing experience on smartphones and tablets.

**Technologies:**
- Built with React for a dynamic user interface.
- Utilizes Intersection Observer API for efficient content loading.
- Integrates external APIs, including the Movie Database (TMDb) API, for up-to-date movie data.
- Responsive design created with SCSS for flexible and modular styling.
- Written in TypeScript for type safety and improved development experience.
- Data retrieval optimized with debouncing.

