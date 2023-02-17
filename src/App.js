import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import axios from "axios";
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import Main from "./component/Main"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path = '/' element={<Main />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
