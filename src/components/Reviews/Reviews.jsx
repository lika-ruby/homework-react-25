import { getMovieReviews } from "../../fetches/gets/getMovieReviews";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ReviewsWrap,
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
  Text,
} from "./Reviews.js";
import { Container } from "../Container/Container.jsx";

export const Reviews = () => {
  const { id } = useParams();
  const [movieRev, setMovieRev] = useState(null);

  useEffect(() => {
    const fetchMovieRev = async () => {
      const data = await getMovieReviews(id);
      setMovieRev(data.results);
    };

    fetchMovieRev();
  }, [id]);

  if (!movieRev) {
    return <p>Loading...</p>;
  }

  return (
    <ReviewsWrap>
      <Container>
        {movieRev.length === 0 ? (
          <Text>There are no reviews</Text>
        ) : (
          <ReviewsList>
            {movieRev.map((rev) => (
              <ReviewItem key={rev.id}>
                <ReviewAuthor>
                  Author: {rev.author_details.username}
                </ReviewAuthor>
                <ReviewContent>{rev.content}</ReviewContent>
              </ReviewItem>
            ))}
          </ReviewsList>
        )}
      </Container>
    </ReviewsWrap>
  );
};
