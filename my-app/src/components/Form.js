import { ReactDOM } from "react";
import logo from "./logo.jpg";
import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Fourth from "./Fourth";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    VIN: "",
    Make: "",
    Model: "",
    Length: "",
    Days: "",
    Price: "",
    Home: "",
    RV: "",
    Year: "",
    Button: "",
  });
  const questionArray = [
    "Question: 1/4",
    "Question: 2/4",
    "Question: 3/4",
    "Question: 4/4",
  ];
  const PageArray = [
    "Where is the RV primarily located?",
    "Let’s get some details about the RV",
    "Additional RV Info",
    "Would you like to add another RV?",
  ];
  const progressbar = ["box1", "box2", "box3", "box4"];
  const Display = () => {
    if (page == 0) {
      return (
        <>
          <SignUpInfo formData={formData} setFormData={setFormData} />
        </>
      );
    } else if (page == 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 3) {
      return <Fourth formData={formData} setFormData={setFormData} />;
    }
  };
  const BASEURL = "http://localhost:3000";
  function App() {
    const [first, setFirst] = useState([]);
    // const [secondForm, setSecondForm] = useState([]);
    // book values
    const [firstForm, setfirstForm] = useState({
      id: "",
      address: "",
      type_of_home: "",
    });
  }
  function doSave() {
    fetch(BASEURL + "/first", { method: "GET" });
  }

  return (
    <div className="form">
      <header>
        <div class="navbar-header page-scroll">
          <a class="navbar-brand" href="#page-top">
            <img src={logo} />
          </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="page-scroll">
              <a href="#portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
                Arizona, Colorado, Florida, Georgia, Texas, Utah
              </a>
            </li>

            <li class="page-scroll">
              <a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
                (646) 423-2772
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="form-container">
        <div className="left-side">
          <h1 className="heading">RV</h1>
          <div id="question">{questionArray[page]}</div>
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{
                width:
                  page === 0
                    ? "24%"
                    : page == 1
                    ? "50%"
                    : page == 2
                    ? "75%"
                    : "100%",
              }}
            ></div>
            <div className="timeline-items">
              <div className="timeline-item"></div>
              <div className="timeline-item"></div>
              <div className="timeline-item"></div>
              <div className="timeline-item"></div>
              <div className="timeline-item"></div>
            </div>
            <span>
              <button
                disabled={page == 0}
                onClick={() => {
                  setPage((currentPage) => currentPage - 1);
                }}
              >
                <svg
                  className="svg1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" />
                </svg>
              </button>
              <button
                className="svg2"
                onClick={() => {
                  if (page === PageArray.length - 1) {
                    alert("done");
                    console.log(formData);
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z" />
                </svg>
              </button>
            </span>
          </div>

          <div className="body">
            <h1>{PageArray[page]}</h1>
            {Display()}
          </div>
        </div>
        <div className="right-side">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
          </svg>
          <div className="down-progressbar"></div>
          <div className="summary-container">
            <div>
              <h1>Summary </h1>
            </div>
            <div className="down-progressbar">
              <p className="pa">Insurance type</p>
            </div>
            <h4>
              <strong>RV Insurance</strong>
            </h4>
            <div className="down-progressbar">
              <h5>
                <b>RV</b>
              </h5>
              <h3>You are right here</h3>
            </div>
            <div className="down-progressbar">
              <p className="pa">Driver</p>
            </div>
            <div className="down-progressbar">
              <p className="pa">Insurance</p>
            </div>
            <div className="down-progressbar">
              <p className="pa">Contact</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              if (page === PageArray.length - 1) {
                alert("done");
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === PageArray.length - 1 ? "Submit" : "Next"}
          </button>
          <button onClick={() => doSave()}></button>
        </div>
      </div>
    </div>
  );
}

export default Form;
