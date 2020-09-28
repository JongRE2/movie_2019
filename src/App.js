import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Navigation from "./components/Navigation";

import Login from "./routes/login";
function App() {
  return (
        
    <div>
      <Login/>
    </div>
  );
}

export default App;