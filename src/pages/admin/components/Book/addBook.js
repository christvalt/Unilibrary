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

  const [selectedFile, setselectedFile] = useState([]);

  //console.log("testdata", data);
  //loads data on start
  useEffect(() => {}, []);
  const history = useHistory();

  //selectet file handle

  // this.handleInputChange = this.handleInputChange.bind(this);

  // const handleInputChange = (event) => {
  //   this.setState({
  //     setselectedFile: event.target.files[0],
  //   });
  // };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setcoverImage(img);
    }
  };

  const submitImage = () => {
    var bodyFormData = new FormData();

    bodyFormData.append("avatar", coverImage);
    bodyFormData.append("title", title);
    bodyFormData.append("authors", authors);
    bodyFormData.append("pageCount", pageCount);
    bodyFormData.append("status", status);
    bodyFormData.append("longDescription", longDescription);
    bodyFormData.append("publishedDate", publishedDate);

    console.log("my data", bodyFormData);

    //voici ca ici
    // data.append("file", (coverImage = coverImage));
    console.warn(data);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    //surement voici lerreurr
    //cet possible?
    //jai changer le form data
    //ok
    let url = "http://localhost:5000/test/create/image_book";

    axios.post(url, bodyFormData, config).then(
      (response) => {
        console.log(bodyFormData);
        // then print response status

        console.warn(response);
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
  /*
  const submit = () => {
    let data = qs.stringify({
      title: title,
      authors: authors,
      pageCount: pageCount,
      status: status,
      longDescription: longDescription,
      publishedDate: publishedDate,
      coverImage: coverImage,
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
*/
  // const submitImage = () => {
  //   let data2 = qs.stringify({
  //     coverImage: coverImage,
  //   });

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   };
  //   axios
  //     .post("http://localhost:5000/test/create/image_book", data2, config)
  //     .then(
  //       (response) => {
  //         console.log(response);
  //         setLoading(false);
  //         setSuccess(response.data2);
  //         console.log("success", success);
  //       },
  //       (error) => {
  //         console.log(error);
  //         setLoading(false);
  //         setError(error);
  //       }
  //     );
  // };

  return (
    <React.Fragment>
      <div>
        <section class="uk-sectio uk-section-large uk-padding-remove">
          <div class="uk-container">
            <div class="uk-width-1-2">
              <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Books </h2>
            </div>

            <div class="uk-child-width-1-1@m uk-flex-center  " data-uk-grid>
              <div class="uk-card uk-card-default uk-width-1-1 uk-card-body ">
                <div class="uk-card-header">
                  <h3 class="uk-align-left@s">Add Book</h3>
                </div>
                <form class="uk-form-horizontal uk-margin-top uk-grid">
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Book Title
                    </label>
                    <div class="uk-form-controls uk-margin-remove-bottom">
                      <input
                        onChange={(e) => {
                          settitle(e.target.value);
                        }}
                        class="uk-input uk-form-small uk-margin-remove-adjacent "
                        id="form-stacked-text"
                        type="title"
                        placeholder="title"
                      />
                    </div>
                  </div>
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Authors
                    </label>
                    <div class="uk-form-controls  ">
                      <input
                        onChange={(e) => {
                          setauthors(e.target.value);
                        }}
                        class="uk-input uk-form-small uk-margin-remove-adjacent"
                        id="form-stacked-text"
                        type="text"
                        placeholder="authors"
                      />
                    </div>
                  </div>
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Page count
                    </label>
                    <div class="uk-form-controls">
                      <input
                        onChange={(e) => {
                          setpageCount(e.target.value);
                        }}
                        class="uk-input uk-form-small"
                        id="form-stacked-text"
                        type="text"
                        placeholder="pageCount"
                      />
                    </div>
                  </div>
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Long description
                    </label>
                    <div class="uk-form-controls">
                      <textarea
                        onChange={(e) => {
                          setlongDescription(e.target.value);
                        }}
                        class="uk-textarea uk-form-small"
                        rows="5"
                        placeholder="longDescription"
                      ></textarea>
                    </div>
                  </div>
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Published date
                    </label>
                    <div class="uk-form-controls">
                      <input
                        onChange={(e) => {
                          setpublishedDate(e.target.value);
                        }}
                        class="uk-input uk-form-small"
                        id="form-stacked-text"
                        type="date"
                        placeholder="publishedDate"
                        min={Date()}
                      />
                    </div>
                  </div>
                  <div class="uk-margin uk-width-1-1">
                    <label
                      class="uk-form-label uk-text-bold"
                      for="form-horizontal-text"
                    >
                      Status
                    </label>
                    <div class="uk-form-controls">
                      <input
                        onChange={(e) => {
                          setstatus(e.target.value);
                        }}
                        class="uk-input uk-form-small"
                        id="form-stacked-text"
                        type="text"
                        placeholder="bookstatus"
                      />
                    </div>
                  </div>
                  *{" "}
                  <div class="js-upload" uk-form-custom>
                    <input
                      type="file"
                      multiple
                      onChange={onImageChange}
                      // onClick={() => {
                      //   submitImage();
                      // }}
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
                  </div>
                  <br></br>
                  <br></br>
                  <div class="uk-container uk-width-1-1 uk-padding-large uk-padding-remove-bottom">
                    <div class=" uk-margin-left  uk-margin-top uk-align-left@s ">
                      <button
                        onClick={() => {
                          alert("You will Cancel the action .Are tou?");
                        }}
                        class="uk-button uk-button-default "
                      >
                        Cancel
                      </button>
                    </div>
                    <div class=" uk-align-right@s uk-margin-top ">
                      <button
                        onClick={() => {
                          submitImage();
                        }}
                        class="uk-button uk-button-primary "
                      >
                        Add book
                      </button>
                    </div>
                  </div>
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
                      {success.message}, add successfully
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
export default Addbook;
