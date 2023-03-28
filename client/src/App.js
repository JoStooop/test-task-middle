import React from "react";
import {HashRouter as Router} from 'react-router-dom';
import './styles/App.scss';

import {Header} from "./components/header/Header";
import {RoutesPage} from "./pages/routes-page/RoutesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RoutesPage />
      </Router>
    </div>
  );
}

export default App;
