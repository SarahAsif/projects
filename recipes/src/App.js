import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiTeapotLeaves } from "react-icons/gi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { links, social } from "./data";
import "./App.css";
import Hot from "./hot.png";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to="/">
            <img src={Hot} />
          </Logo>
          <Card>
            {/* <BsFacebook to="https://web.facebook.com/" />
            <BsLinkedin to="/linkedin.com" />
            <AiFillTwitterCircle to="/twitter.com" />
            <FaInstagramSquare to="/instagram.com" /> */}

            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <span key={id}>
                  <a href={url}>{icon}</a>
                </span>
              );
            })}
          </Card>
        </Nav>
        <Card2>
          <Search />
          <Category />
        </Card2>
        <Pages />
      </Router>
      <footer>Made By Sarah Asif</footer>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: sans-serif;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const Nav = styled.div`
  padding: 0.5rem 3rem;
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
  justify-content: space-around;
  align-items: center;
  align-text: center;
`;

export default App;
