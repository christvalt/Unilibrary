import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Addbook() {
  const [data, setDate] = useState([]);
  const [data2, setDate2] = useState([]);
  const [title, settitle] = useState("");
  const [authors, setauthors] = useState("");
  const [pageCount, setpageCount] = useState("");
  const [status, setstatus] = useState("");
  const [longDescription, setlongDescription] = useState("");
  const [publishedDate, setpublishedDate] = useState("");
  const [coverImage, setcoverImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  //console.log("testdata", data);
  //loads data on start
  useEffect(() => {}, []);
  const history = useHistory();

  const submit = () => {
    let data = qs.stringify({
      title: title,
      authors: authors,
      pageCount: pageCount,
      status: status,
      longDescription: longDescription,
      publishedDate: publishedDate,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios.post("http://localhost:5000/BookRoute/books", data, config).then(
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
  const submitImage = () => {
    let data2 = qs.stringify({
      coverImage: coverImage,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios
      .post("http://localhost:5000/test/create/image_book", data2, config)
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
    <div>
      <section class="uk-sectio uk-section-large">
        <div class="uk-container">
          <h2>
            <style>float:center</style>Add a New Book in your home
          </h2>
          <div
            class="uk-child-width-1-2@m  uk-flex uk-flex-center"
            data-uk-grid
          >
            <form class="uk-form-stacked">
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="title"
                    placeholder="title"
                  />
                </div>
              </div>

              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setauthors(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="authors"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setpageCount(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="pageCount"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="book status"
                  />
                </div>
              </div>
              <div class="uk-margin">
                <h4>book status</h4>
                <select class="uk-select">
                  <option
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    Available
                  </option>
                  <option
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    Maintenance
                  </option>
                  <option
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    Option 03
                  </option>
                  <option
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    Option 04
                  </option>
                </select>
              </div>
              <div class="uk-margin">
                <textarea
                  onChange={(e) => {
                    setlongDescription(e.target.value);
                  }}
                  class="uk-textarea"
                  rows="5"
                  placeholder="longDescription"
                ></textarea>
              </div>

              <div class="uk-margin">
                <p>publishedDate</p>
                <label class="uk-form-label" for="form-stacked-text"></label>
                <div class="uk-form-controls">
                  <input
                    onChange={(e) => {
                      setpublishedDate(e.target.value);
                    }}
                    class="uk-input uk-form-width-medium"
                    id="form-stacked-text"
                    type="date"
                    placeholder="publishedDate"
                    min={Date()}
                  />
                </div>
              </div>

              {/* <div class="js-upload" uk-form-custom>
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    setcoverImage(e.target.value);
                  }}
                  onClick={() => {
                    submitImage();
                  }}
                />
                <button
                  onClick={() => {
                    submitImage();
                  }}
                  class="uk-button uk-button-default"
                  type="button"
                  tabindex="-1"
                >
                  Select
                </button>
              </div> */}
              <a
                onClick={() => {
                  submit();
                }}
                class="uk-button uk-button-primary"
              >
                Add book
              </a>

              <div class="uk-margin"></div>
            </form>
            {error && (
              <div class="uk-margin">
                <a class="uk-text-danger" href="/Addbook">
                  {error}
                </a>
              </div>
            )}
            {!!success && (
              <div class="uk-margin">
                <a class="uk-text-success" href="/admin">
                  {success.message}, add seccesfully
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Addbook;
