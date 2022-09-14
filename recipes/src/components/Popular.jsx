import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import Err from "../pages/Err";

function Popular() {
  const numberOfRandomRecipes = 9;

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

      try {
        const api = await fetch(
          `https://json.nitroxis.com/recipes/`);
        const data = await api.json();

        setPopular(data);
      } catch (err) {
        return (<Err/>);
      }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1350: {
                perPage: 3,
              },
              865: {
                perPage: 2,
                gap: "1rem",
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.name}</p>
                    <img src={recipe.imageURL} alt={recipe.name} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 865px) {
    min-height: 10rem;
  }

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Popular;