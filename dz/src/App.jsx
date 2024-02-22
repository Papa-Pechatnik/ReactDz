import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0);
  
  return (
    <div className="content">
    <div> count: { count }</div>
    {/* варіант 1 - як колбек функція, сама себе повертає */}
    {/* <button onClick={()=> setcount (count+1)}>кнопашка</button> */}

    {/* варіант 2 - як колбек функція, сама себе повертає */}
    <button onClick={()=> setcount (callBack => callBack + 1)}>кнопашка</button>
    </div>
  );
};

export default App;
