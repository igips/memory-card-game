import React, {useState} from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";


function App() {

  return (
    <>
      <Header></Header>
      <Card src="1" name="Hagia Sophia — Istanbul, Turkey"></Card>
    </>
    
  );
}

export default App;
