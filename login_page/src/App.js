import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/comfortaa";
import { ReactComponent as svg } from "./j2.svg";
import footer from "./p3.png";

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
  localStorage.setItem("Email", JSON.stringify(email));
  let emailvar = localStorage.getItem("Email");
  let emailvarup = JSON.parse(emailvar);
  console.log(emailvarup);

  return (
    <div className="App">
      <div className="container">
        <div className=" row d-flex justify-content-center align-items-center h-25 ">
          <img
            src={require("./j2.svg").default}
            alt="mySvgImage"
            className="svg mt-5"
          />
        </div>
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col-md-4">
            <div>
              <div className="mb-2">
                <b>Welcome to Jubilee Insurance Platform</b>
              </div>
              <div>Please log in using your credentials</div>
            </div>
            <form id="loginform" onSubmit={(e) => loginSubmit}>
              <div className="form-group">
                <div className="column d-flex justify-content-center align-items-center">
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                    <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z" />
                  </svg> */}
                </div>
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="text-primary font-bold mt-3">
                <a>
                  <b>Forgot password?</b>
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => console.log("s")}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="text-center text-danger">
          <p>Version: 1.1.9</p>
          <img src={footer} />
        </footer>
      </div>
    </div>
  );
}
export default App;
