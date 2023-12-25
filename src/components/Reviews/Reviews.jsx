import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/movies-servise';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        const reviews = data.results;

        if (!reviews.length) {
          setError(`Відгуки відсутні :(`);
          setStatus('rejected');
        }

        setReviews(reviews);
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <ReviewsList>
      {status === 'rejected' && <p>{error}</p>}

      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsList>
  );
};

export default Reviews;
