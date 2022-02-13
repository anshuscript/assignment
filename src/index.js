import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import './index.css';
import Main from './components/Main';
import Photo from './components/Photo'
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path = "/home" element= {<Main/>}>
    </Route>
    <Route path='/photos' element= {<Photo/>}>
    </Route>
  </Routes>
  </BrowserRouter>, 
  document.getElementById('root')
);