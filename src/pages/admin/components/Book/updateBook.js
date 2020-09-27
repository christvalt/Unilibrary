import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

const UpdateBook = () => {
  const initialBookState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const [currentBook, setCurrentBook] = useState(initialBookState);
  const [message, setMessage] = useState("");

  const getBook = (id) => {
    axios
      .get("http://localhost:5000/BookRoute/books/id" + id)
      .then((response) => {
        setCurrentBook(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBook(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      // il manque le status du livre
      id: currentBook.id,
      title: currentBook.title,
      description: currentBook.description,
      published: status,
      pageCount: currentBook.pageCount,
      longDescription: currentBook.longDescription,
      publishedDate: currentBook.publishedDate,
      coverImage: currentBook.coverImage,
    };

    axios
      .update("http://localhost:5000/BookRoute/books/id", currentBook.id, data)
      .then((response) => {
        setCurrentBook({ ...currentBook, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const UpdateBook = () => {
    axios
      .update(
        "http://localhost:5000/BookRoute/books/id",
        currentBook.id,
        currentBook
      )
      .then((response) => {
        console.log(response.data);
        setMessage("The book was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteBook = () => {
    axios
      .remove(currentBook.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBook ? (
        <div className="edit-form">
          <h4>Book</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentBook.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentBook.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentBook.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteBook}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={UpdateBook}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a book...</p>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;
