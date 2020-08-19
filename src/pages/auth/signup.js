import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignUp() {
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
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Name "
                  />
                </div>
              </div>

              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
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
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="password"
                  />
                </div>
              </div>

              <button class="uk-button uk-button-primary">Register</button>

              <div class="uk-margin"></div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
