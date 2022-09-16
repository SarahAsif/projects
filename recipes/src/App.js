import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import "./App.css";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleFetch = () => {
    setIsLoading(true);
    fetch("/")
      .then((respose) => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
  };
  const renderUser = <div>Loading</div>;
  return (
    <>
      {isLoading ? <App /> : renderUser}

      <div className="App">
        <Router basename="/">
          <Nav>
            <Logo to="/">
              <h1>SARAH's COOKBOOK</h1>
            </Logo>
          </Nav>
          <Card2>
            <Search />
            <Category />
          </Card2>
          <Pages />
        </Router>
        <footer>Made By Sarah Asif</footer>
      </div>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  font-family: sans-serif;
  text-align: center;
`;

const Nav = styled.div`
  padding: 1.5rem 3rem;
  width: 100%;
  background: linear-gradient(to right, #f27121, #e94057);

  svg {
    color: black;
    font-size: 3rem;
  }
`;
const Card = styled.div`
  display: inline;
  align-text: center;
  position: absolute;
  right: 1rem;

  svg {
    font-size: 2rem;
    margin-top: 0.6rem;
    margin-right: 2rem;
    color: white;
    cursor: pointer;
  }
`;
const Card2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  flex-direction: column;
  margin: 2rem;
`;

export default App;
