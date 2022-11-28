import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  
  return (
    <div className="App">
        <h1>
          <img src="https://colorhunt.co/img/color-hunt-logo.gif" alt=""/>
         COLOR PICKER
        </h1>

        <form>
          <textarea className='common' style={{ background: color }} name="text-area" cols="40" rows="10" readOnly></textarea>

          <br />

          <input className='common' type="text" onChange={(e) => setColor(e.target.value)} placeholder="Enter color name/code" />
        </form>
    </div>
  );
}

export default App;
