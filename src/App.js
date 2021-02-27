import React from "react";
import "./shared/reset.css";
import "./shared/viewer.scss";
import NewsPage from "./pages/NewsPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
}

export default App;
