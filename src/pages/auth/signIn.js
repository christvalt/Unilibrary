import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

function SignIn() {
  const [data, setDate] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //console.log("testdata", data);
  //loads data on start
  useEffect(() => {}, []);
  const history = useHistory();

  const sumit = () => {
    let data = qs.stringify({
      username: username,
      password: password,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios.post("http://localhost:5000/AuthRoute/login", data, config).then(
      (response) => {
        localStorage.setItem("login", JSON.stringify(response.data));
        history.push("/");
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <React.Fragment>
      <div>
        <div
          class="uk-grid-collapse uk-child-width-expand@s uk-margin-large-top uk-margin-medium-bottom"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-row-reverse uk-background-muted uk-padding ">
            <div class="uk-card uk-card-default uk-width-1-3 uk-margin-large-left uk-margin-large-right uk-card-body">
              <h1
                style={{ color: "#8000ff" }}
                class="uk-text-bold uk-text-center"
              >
                {" "}
                UniLiBrary!
              </h1>
              <p class="uk-text-bold uk-text-center">
                <h2>Log in</h2>{" "}
              </p>
              <p class="uk-text-center uk-margin-remove-top">
                {" "}
                using Unilibrary account{" "}
              </p>{" "}
              <br></br>
              <br></br>
              <form class="uk-form-stacked">
                <div class="uk-margin">
                  <label
                    class="uk-form-label uk-align-left"
                    for="form-stacked-text"
                  >
                    Email
                  </label>
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      type="text"
                      placeholder="Email..."
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <label
                    class="uk-form-label uk-align-left"
                    for="form-stacked-text"
                  >
                    Password
                  </label>
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      type="password"
                      placeholder="Password..."
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <br></br>
                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                  <label>
                    <input class="uk-checkbox" type="checkbox" /> Remenber me
                  </label>
                </div>

                <br></br>

                <a
                  onClick={() => {
                    sumit();
                  }}
                  class="uk-button uk-button-primary uk-width-1-2 uk-margin-small-bottom "
                >
                  Login
                </a>
              </form>
            </div>
            <div class="uk-width-1-2 uk-flex-center@m uk-text-center uk-padding">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <h1 class="uk-text-bold">
                Improve your KnowLedge with UniLiBrary
              </h1>
              <p style={{ fontSize: "14px" }}>
                UniLiBrary is the unique free online library for borrowing and
                downloading thousands of books. From the platform you can find
                books various Fields, Computer science, Architec ture,
                Litterature, physics etc...
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
