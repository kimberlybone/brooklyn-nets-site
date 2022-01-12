import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Product from './Views/Product.js';
import Search from './Views/Search.js';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Product/>, <Search/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
