import { getMovieCredits } from "../../fetches/gets/getMovieCast";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "../Container/Container.jsx";
import {
  CastWrap,
  CastList,
  CastItem,
  CastImg,
  CastDown,
  CastName,
  CastRole,
  Text,
} from "./Cast.js";
import woman from "../../images/woman.png";
import man from "../../images/man.png";
import noGender from "../../images/no-gender.png";

export const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await getMovieCredits(id);
      setMovieCast(data.cast);
    };

    fetchMovieCast();
  }, [id]);

  if (!movieCast) {
    return <p>Loading...</p>;
  }

  return (
    <CastWrap>
      <Container>
        {movieCast.length === 0 ? (
          <Text>There is no cast</Text>
        ) : (
          <CastList>
            {movieCast.map((mov) => (
              <CastItem key={mov.id}>
                {console.log(mov)}
                <CastImg
                  src={
                    mov.profile_path
                      ? `https://image.tmdb.org/t/p/w200${mov.profile_path}`
                      : mov.gender === 1
                      ? woman
                      : mov.gender === 2
                      ? man
                      : noGender
                  }
                  alt={mov.name}
                />
                <CastDown>
                  <CastName>{mov.name}</CastName>
                  <CastRole>Character: {mov.character}</CastRole>
                </CastDown>
              </CastItem>
            ))}
          </CastList>
        )}
      </Container>
    </CastWrap>
  );
};
