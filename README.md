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

## Functional Requirements

1. **Movie Listing:**
   - Display a list of movies from TMDb API, sorted by popularity.
   - Show movie title, image, genre, cast, director, and short description.

2. **Default Page Load State:**
   - On initial load, display 20 movies from the year 2012.

3. **API Integration:**
   - Use TMDb API to fetch movie data.
   - Utilize `primary_release_year` filter for specific years.
   - Sort movies by popularity score.
   - Ensure movies have at least 100 votes for popularity.

4. **Genre Filter:**
   - Provide a user interface to filter movies by genre.
   - Fetch genres from TMDb API and display them as filter options.
   - Display movies of selected genres.

5. **Search Functionality:**
   - Enable users to search for movies using keywords.
   - Display search results.

6. **Custom UI Components:**
   - Create custom UI components for reusability.

7. **Infinite Scrolling:**
   - Load more movies when users scroll to the list's end.
   - Load movies from previous or next year based on scrolling direction.

8. **Error Handling:**
   - Handle errors gracefully and log them for debugging.

## Non-Functional Requirements

1. **Performance:**
   - Ensure quick load times and responsive scrolling.
   - Efficiently handle large data sets.

2. **Scalability:**
   - Handle increased user and data volume without performance degradation.

3. **Security:**
   - Protect user data and API keys.
   - Store sensitive information securely.

4. **Availability and Reliability:**
   - Ensure minimal downtime and reliable features.

5. **Usability:**
   - Provide a user-friendly and intuitive interface.
   - Ensure accessibility for diverse user needs.

6. **Compatibility:**
   - Make the app work across browsers and devices, adapting to various screen sizes and resolutions.

7. **Maintainability:**
   - Keep the codebase organized and well-documented.

8. **Performance Monitoring and Optimization:**
   - Continuously monitor and optimize performance.

9. **Data Privacy and Compliance:**
   - Comply with data protection regulations.
   - Secure user data and preferences.

10. **Error Handling and Logging:**
    - Implement robust error handling and error logging for debugging.

11. **Cross-Browser and Cross-Platform Compatibility:**
    - Ensure consistent functionality across different platforms.

12. **Load Testing:**
    - Verify high concurrent user and traffic capacity.

13. **Caching and Data Storage:**
    - Implement efficient caching and data storage solutions.

14. **Deployment and Infrastructure:**
    - Utilize a reliable hosting infrastructure.

15. **Accessibility:**
    - Design and test for accessibility.

**Known Issues and Limitations**
- **Infinite Scrolling Issue:** The infinite scrolling functionality may not work properly in some scenarios. There might be issues related to detecting when to load more movies. This is a known limitation of the current implementation.

**Technologies:**
- Built with React for a dynamic user interface.
- Utilizes Intersection Observer API for efficient content loading.
- Integrates external APIs, including the Movie Database (TMDb) API, for up-to-date movie data.
- Responsive design created with SCSS for flexible and modular styling.
- Written in TypeScript for type safety and improved development experience.
- Data retrieval optimized with debouncing.

