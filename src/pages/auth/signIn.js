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
      <section class="uk-sectio uk-section-large">
        <div class="uk-container">
          <div
            class="uk-child-width-1-2@m  uk-flex uk-flex-center"
            data-uk-grid
          >
            <form class="uk-form-stacked">
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="email"
                    placeholder="email"
                  />
                </div>
              </div>

              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="password"
                  />
                </div>
              </div>

              <a
                onClick={() => {
                  sumit();
                }}
                class="uk-button uk-button-primary"
              >
                Login
              </a>

              <div class="uk-margin"></div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignIn;
