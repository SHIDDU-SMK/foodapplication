import React from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";

function App() {
  return (
    <div>
   <Header />
   <About />
   <Shop />
   <Menu />
   <Clients />
    </div>
  );
}

export default App;
