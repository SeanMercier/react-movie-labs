import React, { useEffect, useState } from 'react';

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const apiKey = 'fbfcd17fd29948eff8cc6822d1d9b1a6';
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setUpcomingMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiKey]);

  return (
    <div>
      {/* Display upcoming movies here */}
      {upcomingMovies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          {/* Add more movie details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UpcomingMoviesPage;