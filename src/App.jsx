import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {

const [input,setInput]=useState('')
const [images,setImages]=useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      //console.log("response", res.data.results); //this is the response object that contains all the info we need to display
      const pokemon = res.data.results;
      setImages(pokemon);
    });
  },[]);




  return (
      <div className="main-container">
      <Search setInput={setInput}/>
      <Card images={images} input={input}/>
    </div>
  );



};

export default App;
