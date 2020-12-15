import React, { useState } from "react";
/*
function UseStateHook() {
    const initialCount = 0;
    const [ count, setCount ] = useState(initialCount);

    const incrementBy5 = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return(
        <div>
            Count: {count}
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick = {() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick = {incrementBy5}>Increment 5</button>
        </div>
    )
}
*/

/*
function UseStateHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <h2>FirstName is {name.firstName}</h2>
      <h2>LastName is {name.lastName}</h2>
    </form>
  );
}
*/

function UseStateHook() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add an item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateHook;
