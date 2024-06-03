
import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay"

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <div>
      <CounterDisplay count={count} setCount={setCount} />
    </div>
  );
}

export default App;
