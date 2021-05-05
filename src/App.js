import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Pizzadelivery from "./components/Pizzadelivery";
import Clients from "./components/Clients";
import PizzaProduct from './pages/pizzacategery';
import PizziniProduct from './pages/pizzinicategery';
import Footer from "./components/Footer";


function App() {
  return (
    <div>
   <Header />
   <About />
   <Shop />
   <Menu />
   <Pizzadelivery />
   <Clients />
   <PizzaProduct />
   <PizziniProduct />
   <Footer />
  

    </div>
  );
}

export default App;
