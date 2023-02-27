import logo from './logo.svg';
import './App.css';
import './about.css';
import PasswordGenerator from './About';
import Cards from './Component/Profilecards'
import { useState } from 'react';

function App() {

  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"10px"}}>
      <PasswordGenerator />
    </div>
  );
}

export default App;

