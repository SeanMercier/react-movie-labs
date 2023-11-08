import React, { useEffect, useState } from 'react';

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'fbfcd17fd29948eff8cc6822d1d9b1a6';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUpcomingMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [apiKey]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Upcoming Movies</h1>
      {upcomingMovies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          {/* Add more movie details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UpcomingMoviesPage;