import React from "react"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Navbar from "./Navbar"
import { Route, Switch } from "react-router-dom";

function App(){
    return(
    <div>
        <Navbar/>
        <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route exact path="/">
            <Home />
      </Route>      
        </Switch>
    </div>
    )
}
export default App
