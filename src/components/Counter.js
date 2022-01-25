import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCounter from './useCounter';

const Counter = () => {

    /* const handleReset = ()=>{
        setCounter(0);
    }

    const handleAdd = ()=>{
        setCounter(counter + 1);
    }

    const handleSubstrac = ()=>{
        setCounter(counter - 1);

    
    const [counter, setCounter] = useState(0);
    } */

const {counter, handleAdd,handleReset,handleSubstrac}= useCounter()

  return <div>
        <h1>Cunter: {counter}</h1>
        <Button variant="warning"onClick={handleAdd}>Sumar</Button>{' '}
        <Button variant="danger"onClick={handleReset}>Reset</Button>{' '}
        <Button variant="warning"onClick={handleSubstrac}>Restar</Button>{' '}
  </div>;
};

export default Counter;
