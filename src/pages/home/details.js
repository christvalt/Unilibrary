import React, { useState, useEffect } from "react";
import axios from "axios";

function Details(props) {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/BookRoute/books/" + props.match.params.id)
      .then(
        (response) => {
          setLoading(false);
          setDate(response.data);
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <React.Fragment>
      <section class="uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium" data-uk-grid>
            <div class="uk-width-1-1@m">
              <h1 class="uk-article-title">
                <a class="uk-link-reset" href="">
                  {!loading ? data.title : "loading..."}
                </a>
              </h1>

              <p class="uk-article-meta">
                {!loading ? data.publishedDate : "today"}
              </p>
              <div class="uk-margin-top" data-uk-grid>
                <div class="uk-width-1-3@m">
                  <img
                    src="https://source.unsplash.com/user/erondu/1600x900"
                    alt=""
                  />
                </div>
                <div class="uk-width-2-3@m uk-flex-left">
                  <p className="uk-text-left">
                    {!loading ? data.longDescription : "loading..."}
                  </p>
                  <b>
                    <p className="uk-text-left">
                      Page count : {!loading ? data.pageCount : 0}
                    </p>
                  </b>
                  <b>
                    <p className="uk-text-left uk-text-success">
                      Book status : {!loading ? data.status : 0}
                    </p>
                  </b>

                  <button
                    class="uk-button uk-button-primary"
                    onClick={() => setShow(!show)}
                  >
                    Rent this book
                  </button>
                </div>
              </div>
              {show && (
                <div class="uk-margin-large-top">
                  <form class="uk-form-stacked">
                    <div class="uk-margin">
                      <p>Please enter your return date</p>
                      <label
                        class="uk-form-label"
                        for="form-stacked-text"
                      ></label>
                      <div class="uk-form-controls">
                        <input
                          class="uk-input uk-form-width-medium"
                          id="form-stacked-text"
                          type="date"
                          placeholder="Some text..."
                          min={Date()}
                        />
                      </div>
                    </div>
                    <a class="uk-button uk-button-primary">Rent</a>
                  </form>
                </div>
              )}

              <h3 class="uk-text-bold uk-text-left uk-margin-large-top ">
                Similare Books
              </h3>
              <div class="uk-margin-large-top" data-uk-grid>
                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Details;
