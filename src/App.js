import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <div>
      <form action="">
      <textarea style={{background: color, height: '25vh'}} name="" id="" cols="40" rows="10"></textarea>
      <br />
      <input type="text" onChange={(e) => setColor(e.target.value)}/>
     </form>
      </div>
    </div>
  );
}

export default App;
