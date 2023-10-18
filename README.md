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

### Functional Requirements

1. **Movie Listing:**
   - The app must display a list of movies from The Movie Database (TMDb) API, sorted in descending order of popularity.
   - Each movie card in the list should include the movie title, image, genre, cast, director, and a short description.

2. **Default Page Load State:**
   - Upon initial load, the app should display a list of 20 movies for the year 2012.

3. **API Integration:**
   - The app should use the TMDb API to fetch movie data.
   - It should utilize the `primary_release_year` filter to fetch movies of specific years.
   - The app should sort movies by popularity score.
   - The `vote_count.gte` parameter should be used to ensure movies have received at least 100 votes for popularity.

4. **Genre Filter:**
   - The app should provide a user interface that allows users to filter movies by genre.
   - Genres should be fetched from the TMDb API and displayed as filter options.
   - When users select one or more genres, the list should display only movies of the selected genres.

5. **Search Functionality:**
   - The app should enable users to search for movies based on specific keywords.
   - The search results should be displayed when users enter search queries.

6. **Custom UI Components:**
   - Custom UI components should be created for the app using React or a suitable JavaScript library for reusability.

7. **Infinite Scrolling:**
   - The app should continue loading more movies when the user scrolls to the end of the list in any direction (up or down).
   - Movies from the previous or next year should be loaded based on the user's scrolling direction.

8. **Error Handling:**
   - The app should have robust error handling to manage and recover from errors gracefully.
   - Errors should be logged for debugging and troubleshooting.

### Non-Functional Requirements

1. **Performance:**
   - The app should load quickly, with minimal latency, even when fetching and displaying large sets of movie data.
   - Scrolling and navigation should be smooth and responsive, providing a seamless user experience.

2. **Scalability:**
   - The app should be able to handle an increasing number of users and movie data without a significant decrease in performance.

3. **Security:**
   - User data, such as search history or user preferences, should be stored securely and protected from unauthorized access.
   - Ensure that API keys and sensitive information are securely stored and not exposed in client-side code.

4. **Availability and Reliability:**
   - The app should be available for users with minimal downtime.
   - It should be reliable, with features that work as expected and minimal unexpected errors.

5. **Usability:**
   - The user interface should be intuitive and user-friendly, making it easy for users to navigate, search, and filter movies.
   - Text and content should be readable and user-friendly, and the app should be accessible to a diverse range of users, including those with disabilities.

6. **Compatibility:**
   - The app should be compatible with a range of web browsers and devices, ensuring that it works correctly and looks good on various screen sizes and resolutions.

7. **Maintainability:**
   - The codebase should be well-organized and follow best practices to make it easy for developers to understand, maintain, and extend.
   - Documentation should be comprehensive, making it easy for new developers to understand the project's structure and architecture.

8. **Performance Monitoring and Optimization:**
   - Implement performance monitoring to identify bottlenecks and areas for optimization.
   - Continuously monitor and improve the app's performance as it scales and evolves.

9. **Data Privacy and Compliance:**
   - The app should comply with data protection regulations and maintain user privacy.
   - Data, including user preferences and search history, should be handled in accordance with relevant laws and best practices.

10. **Error Handling and Logging:**
    - Implement robust error handling to gracefully manage and recover from errors.
    - Use logging to capture and analyze errors for debugging and troubleshooting.

11. **Cross-Browser and Cross-Platform Compatibility:**
    - The app should be tested and optimized to work consistently across various web browsers and platforms (Windows, macOS, mobile devices, etc.).

12. **Load Testing:**
    - Perform load testing to ensure the app can handle a high number of concurrent users and traffic spikes.

13. **Caching and Data Storage:**
    - Implement appropriate caching mechanisms to improve response times and minimize unnecessary API requests.
    - Choose suitable data storage solutions to efficiently store and retrieve movie data.

14. **Deployment and Infrastructure:**
    - Ensure a reliable and scalable hosting infrastructure to deploy and serve the application.

15. **Accessibility:**
    - The app should be designed and tested for accessibility, ensuring that it can be used by individuals with disabilities.

**Known Issues and Limitations**
- **Infinite Scrolling Issue:** The infinite scrolling functionality may not work properly in some scenarios. There might be issues related to detecting when to load more movies. This is a known limitation of the current implementation.

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

