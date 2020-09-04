import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";


function Updatebook () {


  const [data, setDate] = useState([]);
  const [id, setid] = useState("");
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
 
      id:id,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios.put("http://localhost:5000/BookRoute/books/:id", data, config).then(
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

          <h2 >Update information of your selected book</h2>
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
                Update book
              </a>

              <div class="uk-margin"></div>
              
            </form>

          </div>
        </div>
      </section>
      <section class="uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium" data-uk-grid>
            <div class="uk-width-1-1@m">
              <h1 class="uk-article-title">
                <a class="uk-link-reset" href="">
                  {!loading ? data.title : "loading..."}
                </a>
              </h1>

              <p class="uk-article-meta">
                {!loading ? data.publishedDate : "today"}
              </p>
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
                    <p className="uk-text-left">
                      Author : {!loading ? data.authors: "loading..."}
                    </p>
                  </b>
                  <b>
                    <p className="uk-text-left uk-text-success">
                      Book status : {!loading ? data.status : 0}
                    </p>
                  </b>

               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
</div>
  
);

};
export default Updatebook

