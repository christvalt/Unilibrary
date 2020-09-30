import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UIkit from "uikit";

class Listboorows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Boorows: [],
    };
  }
  getBoorowData() {
    axios
      .get(`http://localhost:5000/borrow/borrowed`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          Boorows: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getBoorowData();
  }
  handleDelete(id) {
    //const id = this.state.id;
    axios.delete("http://localhost:5000/BookRoute/books/" + id).then((res) => {
      console.log(res);
      console.log(res.data);
      axios.get("http://localhost:5000/BookRoute/books").then((res) => {
        const Books = res.data;
        this.setState({ Books });
        UIkit.notification(
          "<span uk-icon='icon: check'></span> Succesfull Delection  "
        );
      });
      //const Books = this.state.Books.filter((item) => item.id !== id);
      //this.setState({ Books });
    });
  }

  render() {
    return (
      <div>
        <section class="uk-sectio uk-section-large">
          <div class="uk-container">
            <div class="uk-width-1-1 uk-align-left">
              <h2>&nbsp;&nbsp;&nbsp;&nbsp;Manage Books </h2>
            </div>

            <div class="uk-child-width-1-1@m uk-flex-center  " data-uk-grid>
              <div class="uk-card uk-card-default uk-width-1-1 uk-card-body ">
                <div class="uk-card-header">
                  <h3 class="uk-align-left@s">List of borrowed Books</h3>

                  <table class="uk-table  uk-table-hover uk-table-middle uk-table-divider uk-table-justify uk-table-striped uk-table-small uk-table-responsive">
                    <thead className="tab-header uk-text-bold">
                      <tr>
                        <th class="uk-table-shrink "></th>
                        <th class="uk-table-shrink">
                          <h5>Id</h5>
                        </th>
                        <th class="uk-table-shrink">
                          <h5>Book Id</h5>
                        </th>
                        <th class="uk-table-shrink ">
                          <h5>User Id </h5>
                        </th>
                        <th class="uk-text-bold">
                          <h5>Borrowing Date</h5>
                        </th>
                        <th class="uk-width-small">
                          <h5>Returning Date</h5>
                        </th>
                        <th>
                          <h5>Actual Returning Date</h5>
                        </th>
                        <th>
                          <h5>Returned</h5>
                        </th>

                        {/*<th class="uk-table-shrink">copies</th>*/}
                        <th class="uk-table-shrink">
                          <h5>Actions</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="ant-table-body">
                      {this.state.Boorows.map((book) => (
                        <tr>
                          <td>
                            <input class="uk-checkbox" type="checkbox" />
                          </td>
                          <td>{book._id}</td>
                          <td>{book.bookId}</td>
                          <td>{book.userId}</td>
                          <td>{book.boorowingdate}</td>
                          <td>{book.returningdate}</td>
                          <td>{book.actualReturnDate}</td>
                          <td>{book.returned}</td>
                          {/* <td>{book.quantity}</td>*/}

                          <td>
                            {book.actions}
                            <a
                              className="uk-link-heading"
                              onClick={() => this.handleDelete(book._id)}
                            >
                              <button class="uk-button uk-button-link">
                                Delete
                              </button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul class="uk-pagination">
                  <li>
                    <a href="#">
                      <span
                        class="uk-margin-small-right"
                        uk-pag
                        ination-previous
                      ></span>{" "}
                      Previous
                    </a>
                  </li>
                  <li class="uk-margin-auto-left">
                    <a href="#">
                      Next{" "}
                      <span
                        class="uk-margin-small-left"
                        uk-pagination-next
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Listboorows;
