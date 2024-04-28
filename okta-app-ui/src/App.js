import './App.css';
import Home from "./components/Home";
import {BASE_NAME} from "./Constants";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
      <BrowserRouter basename={BASE_NAME}>
        <Route path="/" exact={true} render={(props) => (<Home/>)}/>
          <Route path="/about" exact={true} render={(props) => (<About/>)}/>
      </BrowserRouter>
  );
}

export default App;
