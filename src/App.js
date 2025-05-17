import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 3)
      setCount(prevState => prevState + 1);
    else
      setCount(0);
  };

  

  return (
    <div className="App" style={{ padding: '20px'}}>
      <h1>{count}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click me
      </button>    
    </div>
  );
}

export default App;
