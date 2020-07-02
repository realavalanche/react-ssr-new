import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  const [persons, dispatch] = React.useReducer((state, action) => {
    const { type, data } = action
    switch (type) {
      case 'ADD_PERSON':
        return [...state, data] // for redux reducer always a big store is returned; here it can be array as well (because it just one field of store which has array) 
      default:
        return state
    }



  }, [{ name: 'abc', age: 10 }])

  const reset = () => setCount(0)
  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count - 1)
  const addPerson = () => dispatch({ type: 'ADD_PERSON', data: { name: 'def', age: 15 } })
  const checkRadioValue = e => dispatch({ type: 'ADD_PERSON', data: { name: e.target.value, age: 0 } })

  return (
    <div className="App">
      <div>
        <select>
          <option value="abc">ABC</option>
          <option value="def">DEF</option>
        </select>
      </div>
      <div onChange={checkRadioValue}>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">FeMale</label>
      </div>
      {/* radio another way but requires you to put handlers on each radio input so that only one of them is checked at a time */}
      {/* <label>
        <input type="radio" value="option1" checked={true} />
        Option 1
      </label>
      <label>
        <input type="radio" value="option2" />
        Option 2
      </label> */}
      <div>Counter: {count}</div>
      {persons.map(person => {
        return (
          <div key={`${person.name}${person.age}`}>
            <span>Name: {person.name}</span>
            <span>Age: {person.age}</span>
          </div>
        )
      })}
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div>
          <button onClick={addPerson}>Add def</button>
        </div>
      </div>
    </div>
  );
}

export default App;
