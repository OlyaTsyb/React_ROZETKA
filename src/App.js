import React ,{useState, useEffect} from "react";
import NavbarMy from "./components/header/NavbarMy";
import Top from "./components/header/Top";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carts from "./components/header/Carts";
import {useSelector,useDispatch} from "react-redux";

function App() {

    return (
    <div>
        <Top />

            <NavbarMy/>


    </div>
  )
}

export default App;
