import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

function Details(props) {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  //for borrow
  const [userId, setuserId] = useState("");
  const [bookId, setbokId] = useState("");
  const [username, setusername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [datas, setDatas] = useState("");

  useEffect(() => {
    let response = localStorage.getItem("login");
    let final = JSON.parse(response);
    setDatas(final);
    console.log(datas);
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

  const borrowBook = () => {
    //dichiaration for the borrow action
    //const [data2, setDate] = useState([]);

    var data2 = qs.stringify({
      // userId: datas.user._id,
      bookId: props.match.params.id,
      boorowingdate: new Date(),
      returningdate: new Date(),
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("http://localhost:5000/borrow/users/:userId/books", data2, config)
      .then(
        (response) => {
          console.log(response);
          setLoading(false);
          setSuccess(response.data2);
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
      <section class="uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium" data-uk-grid>
            <div class="uk-width-1-1@m">
              <h1 class="uk-article-title">
                <a class="uk-link-reset" href="">
                  {!loading ? data.title : "loading..."}
                </a>
              </h1>

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
                    <p class="uk-article-meta">
                      {!loading ? data.publishedDate : "today"}
                    </p>
                  </b>

                  <b>
                    <p className="uk-text-left">
                      Author : {!loading ? data.authors : "loading..."}
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
                    Boorrow book
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
                    <a
                      onClick={() => {
                        borrowBook();
                      }}
                      class="uk-button uk-button-primary"
                    >
                      Boorrow
                    </a>
                    {loading && (
                      <div class="uk-margin">
                        <div uk-spinner="ratio: 3"></div>
                      </div>
                    )}
                    {error && (
                      <div class="uk-margin">
                        <a class="uk-text-danger" href="/home">
                          {error}
                        </a>
                      </div>
                    )}
                    {!!success && (
                      <div class="uk-margin">
                        <a class="uk-text-success" href="/home">
                          {success.message}, clikc here to login
                        </a>
                      </div>
                    )}
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
