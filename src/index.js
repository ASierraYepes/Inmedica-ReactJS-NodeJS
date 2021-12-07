import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App';
import Consultah from './Consultah';
/*import '../%PUBLIC_URL%/css/bootstrap.min.css';
import '../%PUBLIC_URL%/js/bootstrap.bundle.min.js';*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/consultah" element={<Consultah/>} />
        <Route path="/consultae" element={<Consultah/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
