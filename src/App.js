import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";
import { Switch, Route } from "react-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Product></Product>
    </div>
  );
}

export default App;
