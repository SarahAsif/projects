import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);

  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin-left: 1rem;
  
  div {
position: relative;
    width: 30rem;
    margin-left:2rem;
    max-width: 100%;

    @media (max-width: 838px) {
      position:absolute;
      display:flex;
      text-align:center;
      align-items:center;
      justify-content:center;
}
 }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;