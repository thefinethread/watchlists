# Watchlists

Watchlists is a movie watchlist application built using React.js. It allows users to search for movies, view details about them, and manage their personal watchlists.

## Features

- **Search Movies**: Users can search for movies by title.
- **View Movie Details**: Users can view details about a movie, including its title, release year, poster, and plot summary.
- **Personal Watchlist**: Users can add movies to their personal watchlist and remove movies from it.
- **User Authentication**: Users can create a new account or log in using their email addresses. No verification is required for account access.

## Getting Started

1. Clone the repository: `git clone https://github.com/thefinethread/watchlists.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory.
4. Add your OMDB API key to the `.env` file: `REACT_APP_OMDB_API_KEY=<your-api-key>`
5. Start the development server: `npm start`

## Tech Stack

- React.js
- Open Movie Database API ([OMDb API](http://www.omdbapi.com/))
- State Management (Context API)
- Routing (React Router)
- Local Storage

## Usage

1. Create a new account by providing your email address.
2. Log in using your email address.
3. Search for movies and add them to your watchlist.
4. View your watchlist and manage the movies in it.
