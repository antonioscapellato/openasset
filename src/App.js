import React, {useState, useEffect, useCallback, useRef} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//COMPONENTS
import NavBar from './components/NavBar';
import SuggestionsBar from './components/SuggestionsBar';
import VideoLoading from './components/VideoLoading';
import PageLoading from './components/PageLoading';

//PAGES
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Post from './pages/Post';
import Footer from './components/Footer';


var axios = require("axios");

function App() {

  const [pageLoading, SetPageLoading] = useState(false);

  useEffect(() => {
    SetPageLoading(true);
    setTimeout(() => {
      SetPageLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">

      <Router>
        <Routes>
          
          {pageLoading ? "" : <Route path='*' element={<PageNotFound />} />}

          {pageLoading ? "" : <Route exact path='/' index element={<Home />} />}
          {pageLoading ? "" : <Route exact path='/watch/:link' element={<Watch />} />}
          {pageLoading ? "" : <Route exact path='/post/:link' element={<Post />} />}
          
        </Routes>
      </Router>

      
      {pageLoading ? <PageLoading /> : ""}
      {pageLoading ? "" : <Footer />}
    </div>

  );
}

export default App;
