import React from "react";
import "./App.scss";
import Main from "./pages/main/main.container";
import { fetchFindingsRequest } from "./store/findings/actions";

const App: React.FC = () => {
  
  React.useEffect(() => {
    fetchFindingsRequest();
  }, []);


  return (
    <div className="App">
      <header>
        <h1>See-Mode Front-End Tech Task</h1>
      </header>
      <Main />
    </div>
  );
};

export default App;
