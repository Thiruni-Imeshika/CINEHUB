# 🎬 CINEHUB - Movie Discovery & Smart Trailer Search

CINEHUB is a responsive web application designed for cinema lovers to instantly discover movie details and watch their official trailers. This project marks a significant step in my full-stack development journey, moving from basic movie metadata to dynamic video integration.

<img width="1920" height="1080" alt="Screenshot (389)" src="https://github.com/user-attachments/assets/b9f5f360-a274-4b91-b660-5e4f3d8d69ed" />
<img width="1920" height="1080" alt="Screenshot (390)" src="https://github.com/user-attachments/assets/820ecda2-6e40-4eda-b90c-8f1b6a348c17" />


## Key Features

*   **Instant Movie Search:** Fetch real-time data for thousands of movies using the OMDB API.
*   **Comprehensive Insights:** View high-quality movie posters, plot summaries, and director information.
*   **Smart Trailer Integration:** A dedicated "Watch Trailer" feature that dynamically generates an intelligent YouTube search link based on the movie title, ensuring you always find the right video without "unavailable" errors.
*   **Modern UI:** A visually appealing dark-themed interface with smooth animations and responsive layouts.
*  **Secure Data Handling:** Uses Environment Variables (.env) to protect API keys and CORS for secure communication between the frontend and the local server.
*  **Efficient Navigation:** Utilizes Browser LocalStorage to pass data between pages (index.html to loaded.html) without complex URL parameters.
*  
## Technologies Used

*   **HTML5 & CSS:** For structured content and a professional, cinematic design using gradients and fixed backgrounds.
*   **JavaScript :** Powering the API integration, local storage handling, and smart link generation.
*   **Node.js & Express:** Providing a robust backend environment and server-side routing to handle API requests securely.
*   **JSON (JavaScript Object Notation):** The lightweight data format used for seamless communication and data exchange between the frontend, backend, and the OMDb API.
*   **OMDB API:** The primary data source for movie metadata.
*   **LocalStorage:** Used to pass search queries between the home and details pages seamlessly.
*   **CORS (Cross-Origin Resource Sharing):**Implemented in the backend to allow secure communication between the frontend and the local server.
*   **Dotenv:** Used to manage sensitive information like API keys through environment variables, following industry security best practices.
*   
## Project Structure

*   `index.html`: The main search portal.
*   `loaded.html`: The movie details and trailer display page.
*   `index.css`: The central stylesheet for the entire application.
*   `index.js`: The logic behind data fetching and the smart trailer system.
*   `server.js`: The Node.js/Express backend that securely handles API requests to the OMDb server.
*   `.env`: (Environment File) Used to store sensitive API keys securely to prevent exposure in          public repositories.
*   `package.json`: Manages project metadata and backend dependencies like express, cors, and            dotenv.
*   `package-lock.json`: Automatically generated file that records the exact version of every            installed dependency, ensuring consistent environments across different machines.
*  `.gitignore`: Ensures that node_modules and the .env file are not tracked by Git for security         and optimization.
*  
##  How to Get Started

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Thiruni- Imeshika/cinehub.git](https://github.com/Thiruni-Imeshika/cinehub.git)
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
    install express ,cors ,dotenv
4.   **Set Up Environment Variables:**
      Create a .env file in the root directory and add your OMDb API key:
      ```Code snippet
      API_KEY=your_actual_api_key_here
      ```
5.  **Run the Backend Server:**
    Start the Node.js server to enable data fetching:
    ```bash
    node server.js
    ```
6.  **Launch the App:**
    Simply open the `index.html` file in any modern web browser.
7.  **Explore:**
    Type the name of any movie and hit "Search" to view its details and trailer.

##  Future Roadmap

I am continuously working to improve CINEHUB. Here is what's coming next:

1.  **Full Movie Streaming:** Integration of third-party streaming players to allow users to watch the full movie directly within the app.
2.  **User Accounts:** Ability for users to create profiles and save their "Favorite Movies" list.
3.  **Advanced Filtering:** Filter movies by genre, rating, and release year for better discovery.
4.  **AI Recommendations:** Integrating basic AI logic to suggest movies based on previous searches.

**Developed by:** [J.A.Thiruni Imeshika]  
*A Computer Science student passionate about Full-Stack development and Advanced AI technologies.*
