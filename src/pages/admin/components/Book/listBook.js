import React, { useEffect, useState, Component } from "react";
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
                <div class="uk-width-1-4@m">
                  <Link to={"/book/" + i._id}>
                    <div class="uk-inline uk-transition-toggle" tabindex="0">
                      <img src="https://source.unsplash.com/random" alt="" />
                      <div class="uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom">
                        <p class="uk-h4">{i.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </React.Fragment>
    );
  }
}
export default Listbook;
