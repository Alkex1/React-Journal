import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {

// three ways to change the buttons locations using the changeLocation method call. 
// 1. put an id on the button, 
// 2. put a callback function before the this.changeLocation inside the curly brackets, 
// 3. put a return inside the getLocation method, as shown above
    render() {
        return(
            <div>
                <BrowserRouter>
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/entry">New Entry</Link>
                        <Link to="/category">Categories</Link>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/category" component={CategorySelectionPage} />
                        <Route exact path="/entry" component={NewEntryPage} />
                    </>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;