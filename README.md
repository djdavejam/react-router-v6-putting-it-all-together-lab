# Movie Directory App

A React application for managing a directory of movie directors and their films, built with React Router v6.

## Features

- **Browse Directors**: View a complete list of movie directors
- **Director Details**: Click on any director to see their biography and filmography
- **Add Directors**: Create new director profiles with name and bio
- **Movie Management**: Add movies to directors' filmographies
- **Movie Details**: View detailed information about individual movies including duration and genres
- **Navigation**: Seamless routing between different sections of the app

## Routes

- `/` - Home page with welcome message and navigation links
- `/about` - Information about the Movie Directory application
- `/directors` - Main directors page with list of all directors
- `/directors/new` - Form to add a new director
- `/directors/:id` - Individual director's profile page
- `/directors/:id/movies/new` - Form to add a new movie to a director
- `/directors/:id/movies/:movieId` - Individual movie details page

## Technologies Used

- **React** - Frontend framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and development server
- **JSON Server** - Mock backend for data storage

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install React Router:**
   ```bash
   npm install react-router-dom@6
   ```

3. **Start the JSON server (backend):**
   ```bash
   npm run server
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Run tests:**
   ```bash
   npm run test
   ```

## Key React Router Concepts Implemented

- **Nested Routing**: Movies are nested under directors
- **Dynamic Routing**: URLs with parameters for specific directors and movies
- **Programmatic Navigation**: Automatic redirect after form submissions
- **Outlet Context**: Sharing data between parent and child routes
- **NavLink**: Active navigation styling

## Usage

1. **Browse Directors**: Start at the home page and navigate to the directors section
2. **Add a Director**: Click "Add New Director" and fill out the form
3. **View Director Details**: Click on any director's name to see their profile
4. **Add Movies**: From a director's page, click "Add New Movie" to expand their filmography
5. **View Movie Details**: Click on any movie title to see detailed information

