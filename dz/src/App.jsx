import { useRef } from 'react';
import './App.css';

import { useState } from 'react';

const App = () => {
  // const [count, setcount] = useState(0);

  const name = useRef();
  const age = useRef();
  const [user, setUser] = useState({});

console.log(user);

  const save = (event) => {
  event.preventDefault()
    console.log (name.current.value);
    console.log (age.current.value);
  }



  const handler = (event) => {
    event.preventDefault();
    setUser( prev => ({...prev, [event.target.name]:event.target.value}));
  }

  
  return (
    <div className="content">

    {/* <div> count: { count }</div> */}
    {/* варіант 1 - як колбек функція, сама себе повертає */}
    {/* <button onClick={()=> setcount (count+1)}>кнопашка</button> */}

    {/* варіант 2 - як колбек функція, сама себе повертає */}
    {/* <button onClick={()=> setcount (callBack => callBack + 1)}>кнопашка</button> */}

    <form>
      {/* <input type='text' placeholder={'name'} ref={name} onChange={handler}></input>
      <input type='text' placeholder={'age'} ref={age} onChange={handler}></input> */}
      <input type='text' placeholder={'name'} name = 'name' onChange={handler}></input>
      <input type='text' placeholder={'age'} name = 'age' onChange={handler}></input>

      <button onClick={save}>save</button>
    </form>

    </div>
  );
};

export default App;
