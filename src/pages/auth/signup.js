import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import qs from "qs";

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

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    var data = qs.stringify({
      name: username,
      password: password,
      role: "client",
      email: email,
    });
    axios.post("http://localhost:5000/AuthRoute/register", data, config).then(
      (response) => {
        console.log(response);
        setLoading(false);
        setSuccess(response.data);
        console.log("success", success);
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
      <div
        class="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top"
        uk-grid
      >
        <div>
          <div class="uk-background-muted uk-padding">
            <div class="uk-grid-item-match uk-flex uk-flex-center">
              <div class="uk-card uk-card-default uk-width-1-3 uk-card-body ">
                <h1
                  style={{ color: "#8000ff" }}
                  class="uk-margin-remove-top uk-text-bold uk-text-center"
                >
                  {" "}
                  UniLiBrary!
                </h1>
                <p class="uk-text-bold uk-text-center ">
                  <h2>Register for Unilibrary</h2>{" "}
                </p>
                {/* <p class="uk-text-center"> using unilibrary account </p> <br></br>  */}
                <br></br>

                <form class="uk-form-stacked">
                  <div class="uk-padding">
                    {" "}
                    <br></br>
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
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <label
                      class="uk-form-label uk-align-left"
                      for="form-stacked-text"
                    >
                      Username
                    </label>
                    <div class="uk-form-controls">
                      <input
                        class="uk-input"
                        id="form-stacked-text"
                        type="text"
                        placeholder="Username..."
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
                    onCl
                    ick={() => {
                      submit();
                    }}
                    class="uk-button uk-button-primary uk-width-1-2 uk-margin-small-bottom"
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
                  {!!success && (
                    <div class="uk-margin">
                      <a class="uk-text-success" href="/signin">
                        {success.message}, clic here to login
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
