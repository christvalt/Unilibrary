import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import qs from "qs";
//import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { render } from "@testing-library/react";

class allBoorowNotReturn extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        Boorows: [],
    };

  }
  getBoorowData() {
    axios
      .get(`http://localhost:5000/borrow/users/:userId/books`, {})
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

  render() {
    return (
      <React.Fragment>
    

        <section class="uk-section uk-margin uk-section-small">
          <div class="uk-container">
        
            <h4 class="uk-text-meta uk-margin-medium-bottom">
              List of all borrowed book
            </h4>

            <div class="uk-text-center" data-uk-grid>
              {this.state.Boorows.map((i) => (
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
export default allBoorowNotReturn;
