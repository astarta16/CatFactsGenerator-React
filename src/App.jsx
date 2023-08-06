import { useState } from 'react';
import './App.css'
import Axios from "axios";
import { useEffect } from 'react';



function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
  .then((res) => {
  setCatFact(res.data.fact);
});
}

  useEffect (() => {
 Axios.get("https://catfact.ninja/fact")
  .then((res) => {
  setCatFact(res.data.fact);
});
  }, []);
 


  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate cat facts</button>
      <p> {catFact}</p>
    </div>
  );
}
 


export default App
