import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  const reset = () => setCount(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="App">
      Counter: {count}
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
