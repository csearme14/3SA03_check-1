import React from 'react';
import logo from './logo.svg';
import './App.css';

import WordCard from './WordCard';
const word = "Hello";

function App() {
 return (
    <header classname="App_header"> 
     <div classname="App">
        <h1>Game Start!!</h1>
        <p1>Play by arranging the words correctly, the program will 
            refresh the font position indefinitely, 
            But the game will stop when you win.
        </p1>
        <div>{
       <WordCard value="hello"/>
        }
        </div>
        <h2>
         CHALISA SINBAN COE 6135512020 sec02
        </h2>
    </div>
    </header>
 

 );
}
export default App;
