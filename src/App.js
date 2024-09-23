
import './App.css';
import { useState } from "react";
import Balance from './Components/balance';


function App() {
  const [color, setcolor] = useState("");
  
  return (
    <>
      <div className="container">
        <h2>Expense Tracker</h2>
        <Balance/>
      </div>
    </>
  );
}

export default App;
