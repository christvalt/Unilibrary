import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignIn() {
  const  [ data, setDate] = useState([]);
  const  [ username, setUsername] = useState('');
  const  [ password, setPassword] = useState('');
  console.log( 'testdata',data)  
  useEffect(()=>{
setDate([1])
  },[0])
  const   sumit=() =>{
    console.log('username',username)
    console.log('password',password)

  let data = {
      "username": username,
      "password": password,
  }


    fetch("http://localhost:5000/AuthRoute/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    
      //make sure to serialize your JSON body
      body:  JSON.stringify(data)
    })
    .then(r =>  r.json())
    .then( (response) => { 
      console.log(response)
       //do something awesome that makes the world a better place
    }).catch((response)=>{
      console.log(response)
     
    });
    
  }
  return (
    <React.Fragment>
      <section class="uk-sectio uk-section-large">
        <div class="uk-container">
          <div
            class="uk-child-width-1-2@m  uk-flex uk-flex-center"
            data-uk-grid
          >
            <form class="uk-form-stacked">
              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                  onChange={(e)=>{setUsername(e.target.value)}}
                    class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div class="uk-margin">
                <div class="uk-form-controls">
                  <input
                  onChange={(e)=>{setPassword(e.target.value)}}
                     class="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="password"
                  />
                </div>
              </div>

              <a onClick={()=>{sumit()}} class="uk-button uk-button-primary">Login</a>

              <div class="uk-margin"></div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignIn;
