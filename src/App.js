import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import PizzaProduct from './pages/pizzacategery';
import PizziniProduct from './pages/pizzinicategery';

function App() {
  return (
    <div>
   <Header />
   <About />
   <Shop />
   <Menu />
   <Clients />
   <PizzaProduct />
   <PizziniProduct />

    </div>
  );
}

export default App;
