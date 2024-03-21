import React, { useState} from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const onAdd = () => {
    setCounter(counter + 1);
  }

  const Reset = () => {
    setCounter(0);
  }

  const onRemove = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
        <div className="buttons">
          <button className='btn-1' onClick={onAdd}>+</button>
          <button className='btn-2' onClick={Reset}>🔁</button>
          <button className='btn-3' onClick={onRemove}>-</button>
          <br />
          <br />
          <h1>Value : {counter}</h1>
        </div>
    </div>
  );
}

export default App;
