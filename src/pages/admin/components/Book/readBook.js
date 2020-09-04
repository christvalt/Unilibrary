import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";


function Readbook () {


  const [data, setDate] = useState([]);
  const [id, setid] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);
  const history = useHistory();

  

  const submit = () => {

    let data = qs.stringify({
 
      id:id,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios.get("http://localhost:5000/BookRoute/books/:id", data, config).then(
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



return (

  <div>
    <section class="uk-sectio uk-section-large">
        <div class="uk-container">

          <h2 ><style>float:center</style>Read a specific book</h2>
          <div
            class="uk-child-width-1-2@m  uk-flex uk-flex-center"
            data-uk-grid
          >
            <form class="uk-form-stacked">
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                   onChange={(e) => {
                    setid(e.target.value);
                  }}
                 
                    class="uk-input"
                    id="form-stacked-text"
                    type="title"
                    placeholder="book id"
                  />
                </div>
              </div>

              
              <a
                 onClick={() => {
                  submit();
                }}
             
                class="uk-button uk-button-primary"
              >
                read book
              </a>

              <div class="uk-margin"></div>
              
            </form>

          </div>
        </div>
      </section>
</div>
  
);

};
export default Readbook

