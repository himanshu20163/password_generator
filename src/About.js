import './about.css';
// export default PasswordGenerator;
import React, { useState } from 'react';
import copy from "copy-to-clipboard";

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let chars = '';
    if (includeUppercase) {
      chars += uppercaseChars;
    }
    if (includeLowercase) {
      chars += lowercaseChars;
    }
    if (includeNumbers) {
      chars += numberChars;
    }
    if (includeSpecialChars) {
      chars += specialChars;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

  function handleGeneratePassword() {
    setPassword(generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars));
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert(`You have copied "${password}"`);
 }
  return (
    <div className="password-generator">
    <h1>Password Generator</h1>
    <div className="form">
    <div className="result">
      <input className="result-input" type="text" value={password} readOnly />
      <i class="fa fa-clone" aria-hidden="true" onClick={copyToClipboard}></i>
    </div>
      <div className="form-group1">
        <label> Select Password Length:</label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div className="form-group">
        
        <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
        <label>Include Uppercase:</label>
      </div>
      <div className="form-group">
        
        <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
        <label>Include Lowercase:</label>
      </div>
      <div className="form-group">
        
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        <label>Include Numbers:</label>
      </div>
      <div className="form-group">
        
        <input type="checkbox" checked={includeSpecialChars} onChange={(e) => setIncludeSpecialChars(e.target.checked)} />
        <label>Include Special Characters:</label>
      </div>
      <button className="generate-btn" onClick={handleGeneratePassword}>Generate Password</button>
      
    </div>
    
  </div>
  );
}

export default PasswordGenerator;



