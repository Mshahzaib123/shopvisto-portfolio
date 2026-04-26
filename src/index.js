import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.scss';
import './fonts/fonts.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router basename="/">
    <App />
  </Router>
)
