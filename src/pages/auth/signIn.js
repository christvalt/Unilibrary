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
      <div
        class="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top"
        uk-grid
      >
        <div>
          <div class="uk-background-muted uk-padding">
            <div class="uk-grid-item-match  uk-flex-right@m ">
              <div class="uk-card uk-card-default uk-width-1-3 uk-card-body ">
                <h1 style={{ color: "#A9A9C9" }} class="uk-padding">
                  {" "}
                  Unilibrary!!
                </h1>
                <p class="uk-text-bold uk-text-center ">
                  <h4>Log in</h4>{" "}
                </p>
                <p class="uk-text-center"> using unilibrary account </p>{" "}
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
                    class="uk-button uk-button-primary uk-width-1-2 uk-margin-small-bottom"
                  >
                    Login
                  </a>

                  <div class="uk-margin"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
