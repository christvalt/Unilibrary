import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import qs from "qs";
//import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { render } from "@testing-library/react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
      Bookfind: [],
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
  /**
@description:find one book by a user
*/
  findbook(id) {
    axios
      .get(`http://localhost:5000/BookRoute/books/:` + id)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          Bookfind: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _handleKeyDown = (e) => {
    e.preventDefault();
    this.findbook(e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <section
          class="uk-section"
          style={{ paddingTop: " 0px", paddingBottom: "0px" }}
        >
          <div
            class="uk-position-relative uk-visible-toggle uk-dark"
            data-tabindex="-1"
            data-uk-slideshow="min-height: 300; max-height: 450"
          >
            <ul class="uk-slideshow-items">
              <li>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  data-uk-cover
                />
              </li>
              <li>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  data-uk-cover
                />
              </li>
            </ul>

            <a
              class="uk-position-center-left uk-position-small"
              href="#"
              data-uk-slidenav-previous
              data-uk-slideshow-item="previous"
            ></a>
            <a
              class="uk-position-center-right uk-position-small"
              href="#"
              data-uk-slidenav-next
              data-uk-slideshow-item="next"
            ></a>
          </div>
        </section>

        <section class="uk-section">
          <div class="uk-container">
            <div
              class="uk-tile uk-tile-default uk-text-center uk-margin"
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <h2 class="uk-h1">Welcome to UniLiBrary</h2>
            </div>

            <div class="uk-flex-center" data-uk-grid>
              <div class="uk-width-auto@m">
                <div class="uk-text-center uk-margin-medium-bottom uk-margin-medium-top">
                  <form class="uk-search uk-search-default uk-search-large">
                    <span uk-search-icon></span>
                    <input
                      // onChange={(e) => {
                      //   this.state2.Book(e.target.value);
                      // }}
                      class="uk-search-input uk-form-large uk-form-width-small"
                      style={{ fontSize: "14px" }}
                      type="search"
                      placeholder="Type something"
                      onChange={this._handleKeyDown}
                    />
                    <div class="uk-text-center" data-uk-grid>
                      {this.state.Bookfind.length ? (
                        this.state.Bookfind.map((i) => (
                          <div class="uk-width-1-4@m">
                            <Link to={"/book/" + i._id}>
                              <div
                                class="uk-inline uk-transition-toggle"
                                tabindex="0"
                              >
                                <img
                                  src={"http://localhost:5000/" + i.coverImage}
                                  alt=""
                                />
                                <div class="uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom">
                                  <p class="uk-h4">{i.title}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                      ) : (
                        <p>not book found</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="uk-section uk-margin uk-section-small">
          <div class="uk-container">
            <h2 class="uk-h2 uk-text-lead color-is-black uk-margin-medium-bottom">
              Latest Books
            </h2>
            <h4 class="uk-text-meta uk-margin-medium-bottom">
              Select the latest book found in our Bibotech
            </h4>

            <div class="uk-text-center" data-uk-grid>
              {this.state.Books.map((i) => (
                <div class="uk-width-1-4@m">
                  <Link to={"/book/" + i._id}>
                    <div class="uk-inline uk-transition-toggle" tabindex="0">
                      <img
                        src={"http://localhost:5000/" + i.coverImage}
                        alt=""
                        style={{ width: "250px", height: "350px" }}
                      />
                      <div class="uk-transition-bottom uk-overlay uk-overlay-primary uk-position-bottom ">
                        <p class="uk-h4">{i.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section class="uk-section uk-section-primary uk-section-small">
          <div class="uk-container">
            <div class="uk-child-width-expand@s uk-light" data-uk-grid>
              <div class="uk-width-auto@m">
                <img
                  src="https://source.unsplash.com/random"
                  width="300px"
                  alt=""
                />
              </div>
              <div class="uk-width-expand@m">
                <h3>Are you a student ?</h3>
                <p class="color-is-white">
                  Register now to our Bibotech and browser thousand s of books
                  <br />
                  Join us now
                </p>
                <br />

                <a class="uk-button uk-button-default uk-margin-small" href="#">
                  Register now
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Home;
