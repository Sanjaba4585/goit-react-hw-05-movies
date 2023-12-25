import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'service/movies-servise';
import { Container, ListOfFilm, Title } from './MoviesListStyled';

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getTrending();
        const films = data.results;
        setFilms(films);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilms();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>

      {error && <p>Вибачте, але щось пішло не так :</p>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default FilmList;
