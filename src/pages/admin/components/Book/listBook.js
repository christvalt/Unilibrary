import React, { Component } from "react";
import axios from "axios";

export class listBook extends Component {
  state = {
    Books: [],
    currentBook: null,
    currentIndex: -1,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/BookRoute/books").then((res) => {
      const Books = res.data;
      this.setState({ Books });
    });
  }

  handleDelete(id) {
    //const id = this.state.id;
    axios.delete("http://localhost:5000/BookRoute/books/id", id).then((res) => {
      console.log(res);
      console.log(res.data);

      //const Books = this.state.Books.filter((item) => item.id !== id);
      //this.setState({ Books });
    });
  }

  render() {
    return (
      <section class="uk-section uk-margin uk-section-small">
        <div class="uk-overflow-auto">
          <h1 class="uk-text-meta uk-margin-medium-bottom">
            List of all our present books
          </h1>

          <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
            <thead>
              <tr>
                <th class="uk-table-shrink"></th>
                <th class="uk-table-shrink">id</th>
                <th>status</th>
                <th class="uk-width-small">title</th>
                <th>pageCount</th>
                <th>publishedDate</th>
                <th>authors</th>
                <th class="uk-table-shrink">quantity</th>
                <th class="uk-table-shrink">actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Books.map((book) => (
                <tr>
                  <td>
                    <input class="uk-checkbox" type="checkbox" />
                  </td>
                  <td>{book._id}</td>
                  <td>{book.status}</td>
                  <td>{book.title}</td>
                  <td>{book.pageCount}</td>
                  <td>{book.publishedDate}</td>
                  <td>{book.authors}</td>
                  <td>{book.quantity}</td>
                  <td>{book.actions}</td>

                  <td>
                    <a
                      className="uk-link-heading"
                      onClick={(e) => this.handleDelete(book.id, e)}
                    >
                      Delete
                    </a>
                    |
                    <a
                      className="uk-link-heading"
                      onClick={(e) => this.handleDelete(book.id, e)}
                    >
                      Update
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default listBook;

/**import React, { useEffect, useState } from "react";

import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Listbook(props) {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const [data, setDate] = useState([]);
  const [datas, setDatas] = useState("");
  const [loading, setLoading] = useState(true);

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    //let response = localStorage.getItem("login");
    ///let final = JSON.parse(response);
    //setDatas(final);
    //console.log(datas);
    axios
      .get("http://localhost:5000/BookRoute/books")
      .then((responce) => {
        setBooks(responce.data);
        console.log(responce.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    //let response = localStorage.getItem("login");
    ///let final = JSON.parse(response);
    //setDatas(final);
    //console.log(datas);
    axios
      .delete(
        "http://localhost:5000/BookRoute/books/:id" + props.match.params.id
      )
      .then((response) => {
        console.log(response.data);
        ///refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <section class="uk-sectio uk-section-large">
        <div class="uk-container">
          <h2>
            <style>float:center</style>Add a New Book in your home
          </h2>
          <ul class="uk-list uk-list-striped">
            {Books.map((book) => (
              <li>{book.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Listbook; */

/**import React, { useEffect, useState } from "react";

import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Listbook(props) {
  const [data, setDate] = useState([]);
  const [datas, setDatas] = useState("");
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <section class="uk-sectio uk-section-large">
        <div class="uk-container">
          <h2>
            <style>float:center</style>Add a New Book in your home
          </h2>
          <table class="uk-table uk-table-hover uk-table-divider">
            <thead>
              <tr>
                <th>status</th>
                <th>waitingList</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {data.title}</td>
                <td> {!loading ? data.status : "loading..."}</td>
                <td> {!loading ? data.waitingList : "loading..."}</td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
export default Listbook; */

/**import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import qs from "qs";
//import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { render } from "@testing-library/react";

class Listbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    };

    this.state2 = {
      Books: [],
    };
  }
  getBooksData() {
    axios
      .get(`http://localhost:5000/BookRoute/books`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          Books: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getBooksData();
  }

  render() {
    return (
      <React.Fragment>
        <section class="uk-section uk-margin uk-section-small">
          <div class="uk-container">
            <h4 class="uk-text-meta uk-margin-medium-bottom">
              List of all our present books
            </h4>

            <div class="uk-text-center" data-uk-grid>
              {this.state.Books.map((i) => (
                <div class="uk-width-1-4@m"></div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Listbook;
 */
