import React from 'react';
import logo from './logo.svg';
import './App.css';

import WordCard from './WordCard';
const word = "Hello";

function App() {
 return (
 <div>
     {
        <div>
       <WordCard value="hello"/>
        </div>
     }
 </div>

 );
}
export default App;