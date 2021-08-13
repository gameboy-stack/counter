import './App.css';
import React,{ useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);


  return (<>
          <div>
            <p>Just Click !!!</p>
            <p>The Number Is : <strong>{ count }</strong></p>
          </div>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <span>{ count }</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          </>
  );
}
