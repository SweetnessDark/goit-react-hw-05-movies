import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from './../../services/apiMovies';
import sass from './Review.module.scss';

const Review = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovie(movieId).then(setReview);
  }, [movieId]);

  if (!setReview) {
    return;
  }

  return review.length > 0 ? (
    <ul>
      {review.map(({ id, content, author }) => (
        <li key={id}>
          <p className={sass.authorTitle}>User: {author}</p>
          <p className={sass.contentTitle}>
            <span>Comment:</span> {content}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry, we don't have any reviews on this movie</p>
  );
};

export default Review;
