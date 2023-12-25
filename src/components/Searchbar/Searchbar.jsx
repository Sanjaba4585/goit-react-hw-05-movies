import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, StyledField, StyledForm } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import { ErrorMessage, Formik } from 'formik';

export const Searchbar = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return onQueryChange(movieName);
  }, [movieName, onQueryChange]);
  const handleSearchSubmit = (value, action) => {
    const quary = value.quary;
    const nextParams = quary !== '' ? { quary } : {};
    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSearchSubmit}>
      <StyledForm>
        <StyledField
          type="text"
          name="query"
          title="Please enter movie name."
          placeholder="Movie name"
          required
        />
        <ErrorMessage name="name" component="div" />
        <Button type="submit">
          <FaSearch />
          Search
        </Button>
      </StyledForm>
    </Formik>
  );
};
