import React, { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import qs from "qs";

function Deletebook(props) {
  const [data, setDate] = useState([]);
  const [id, setid] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  //const history = useHistory();

  const handleDelete = () => {
    axios
      .get("http://localhost:5000/BookRoute/books/id", +props.match.params.id)
      .then((response) => {
        console.log(response.data);
        //refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <div></div>;
}
export default Deletebook;
