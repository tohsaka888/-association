import React from 'react';
import Home from "./Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {

    return (
        <div>
            <Router>
                <Route path='/home' component={Home}></Route>
                <Route exact component={Login} path='/login'></Route>
                <Route exact component={Register} path='/register'></Route>
            </Router>
        </div>
    )
}

export default App;