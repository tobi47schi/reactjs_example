import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clicker from './Clicker';
import ExampleForm from './ExampleForm';

function App() {

  const alertShit = () => {
    alert("shit");
  }

  return (
    <div className="App">
      <Clicker click={alertShit}></Clicker>
      <ExampleForm></ExampleForm>


    </div>
  );
}

export default App;
