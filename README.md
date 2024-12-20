

# MovieDB

MovieDB is a web application built using the TMDB API. It allows users to search for movies, compare their favorite titles, and manage their own accounts with login and registration functionality.

## Features

- **User Authentication**  
  - Login and Registration using secure form validation.
  
- **Movie Search**  
  - Search for movies with details powered by the TMDB API.
  
- **Movie Comparison**  
  - Compare movies side-by-side based on their key attributes like rating, runtime, and release date.

## Technologies Used

- **Frontend**: React.js / Next.js  
- **Backend**: Node.js / Express.js  
- **Authentication**: JWT / OAuth  
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)  

## Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/monirhrabby/movieDB.git
   cd movieDB
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your mongodb atlas key
   NEXT_PUBLIC_APP_URL=your base url
   ```

4. Start the application:  
   ```bash
   npm run dev
   ```

5. Access the app at `http://localhost:3000`.

## How to Use

1. **Register/Login**:  
   - Create an account or log in using your credentials.
   
2. **Search Movies**:  
   - Use the search bar to find movies by title.
   
3. **Compare Movies**:  
   - Select movies to compare their details side by side.

