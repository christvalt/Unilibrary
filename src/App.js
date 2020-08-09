import React from "react";

import "./App.css";
import "./index.css";

import "./responsive.css";
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import Router from "./router";

UIkit.use(Icons);
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
// router()
