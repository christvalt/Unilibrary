import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function SignUp() {
  const [data, setDate] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = () => {
    setLoading(true);
    console.log("username", username);
    console.log("password", password);

    axios
      .post("http://localhost:5000/AuthRoute/register", {
        body: {
          name: username,
          password: password,
          role: "client",
          email: email,
        },

        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log(response);
          setLoading(false);
          setSuccess(response);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          setError(error);
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
                      setEmail(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Username"
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
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>

              <a
                onClick={() => {
                  submit();
                }}
                class="uk-button uk-button-primary"
              >
                Register
              </a>

              {loading && (
                <div class="uk-margin">
                  <div uk-spinner="ratio: 3"></div>
                </div>
              )}
              {error && (
                <div class="uk-margin">
                  <a class="uk-text-danger" href="/signin">
                    {error}
                  </a>
                </div>
              )}
              {success && (
                <div class="uk-margin">
                  <a class="uk-text-success">{success.message}</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
