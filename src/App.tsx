import React from 'react';
import './App.scss';
import "./App.scss";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app-router";
import { Header } from "./modules/layout/header";
import { Homepage } from "./modules/pages/homepage/homepage";
import { NotFound } from "./modules/pages/not-found/not-found";
import { Animals } from "./modules/pages/animals/animals";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-content">
        
        </div>
      </Router>
    </div>
  );
}

export default App;
