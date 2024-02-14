<!-- import { SearchInput } from 'components/SearchInput/SearchInput';
import { ShowMoviesList } from '../ShowMovieList/ShowMovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        //searchMovies(query) pentru a obține lista de filme corespunzătoare căutării.
        setMoviesList(await searchMovies(query));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    //Valoarea din câmpul de căutare este extrasă și setată ca parametru de căutare folosind setSearchParams({ query: form.elements.query.value }). Astfel, URL-ul se actualizează cu noul parametru de căutare.
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <SearchInput onSubmit={handleSubmit} />
      <ShowMoviesList movies={moviesList} navigate={''} />
    </>
  );
};

export default Movies; -->
