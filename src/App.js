import logo from './logo.svg';
import './App.css';
import './about.css';
import PasswordGenerator from './About';
import Cards from './Component/Profilecards'
import { useState } from 'react';
import TestimonialSlider from './img/Slider';

function App() {

  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"10px"}}>
      <PasswordGenerator />
      <TestimonialSlider />
    </div>
  );
}

export default App;

