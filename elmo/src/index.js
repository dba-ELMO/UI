import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";

// index.js
ReactDOM.render(
  <BrowserRouter>
       <main>
            <Switch>
              <Route path='/' component={HomePage} /> 
            </Switch>
        </main>
  </BrowserRouter>, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


// <IndexRoute component={MainPage} />
//    <Route path="/some/where" component={SomePage} />
// <Route path="/some/otherpage" component={SomeOtherPage} />
//<Route path="/" component={HomePage}>
//<Route path="/home" component={HomePage} />
//</Rout
