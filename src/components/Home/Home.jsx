import React, { useState, useEffect } from 'react';
// face cereri HTTP către server
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
const KEY_API = '47654636e0a81733a8194af924ebd404';
function Home() {
  //initializam lista de filme cu un array gol
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        //cerem filmele
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`
        );
        //afisam rezultatele
        setMovies(response.data.results);
      } catch (error) {
        console.error('Failed', error);
      }
    };
    fetchMovies();
    //[] este o dependenta goala a.i. efectul sa fie apelat o singura data
  }, []);
  return (
    <div className={styles.homeContainer}>
      <h1>Popular Movies</h1>
      <div className={styles.moviesList}>
        {movies.map(movie => (
          //pt fiecare film din lista movies afiram elem link pt a ne duce la ruta specififca a filmului
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={styles.movieItem}
          >
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <img
              // imaginea posterului
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
