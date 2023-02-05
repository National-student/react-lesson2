import { useState } from "react";
import { Input } from "./components/input";

function App() {

  let [count, setCount] = useState(0)


  return (
    <div className="App">
      
      <button onClick={() => setCount(10 + count)}>Increment</button> <br/>

      <Input />

    <h1>{count}</h1>

    </div>
  );
}

export default App;
