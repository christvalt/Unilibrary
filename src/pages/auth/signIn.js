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
  const sumit=() =>{
    console.log('username',username)
    console.log('password',password)

  let data = {
      "username": username,
      "password": password,
  }

  axios . post ( '/ login' ,  { 
    
   data
 }) 
 . then ( ( réponse )  =>  { 
   console . log ( réponse ); 
 },  ( erreur )  =>  { 
   console . log ( erreur ); 
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
