import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://json.nitroxis.com/recipes/${params.name}`);
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="imageWrapper">
        <h2>{details?.name}</h2>
        <img src={details?.imageURL} alt="" />
      </div>
      <Info>
        <div style={{display: 'flex'}}>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        </div>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details?.steps.join("<br>") }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details?.ingredients.map((ingredient) => {
              return <li key={ingredient.name}>{ingredient.quantity} {ingredient.name}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left:3rem;
  display: flex;
  color: var(--gray-800);

  .active {
    color: white;
  }

  p {
    color: white;
    line-height: 1.25rem;
  }

  h2 {
    margin-bottom: 2rem;
    color:white;
  }
  a{
    color:gray;
    text-decoration:none;
  }

  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }

  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .imageWrapper {
      display: flex;
      flex-direction: column;
      justifycontent: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #313131;
  background: black;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: gray;
    color: var(--gray-50);
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  width: 700px;
  max-width: 100%;
  color:white;
  ul {
    margin-top: 0;
  }

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export default Recipe;