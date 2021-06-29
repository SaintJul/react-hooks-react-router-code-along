import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import App from "./components/App"


ReactDOM.render( 
  <BrowserRouter>
  <App /> 
  </BrowserRouter>,
  document.getElementById("root")
); 

/*import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

ReactDOM.render(
<BrowserRouter>
<Route path ="/">
<Home />
</Route>
</BrowserRouter>, document.getElementById("root")
);*/
