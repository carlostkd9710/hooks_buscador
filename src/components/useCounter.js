import React, { useState } from 'react';

const useCounter = (value=5) => {

    const [counter, setCounter] = useState(value);
    
    const handleReset = ()=>{
        setCounter(0);
    }

    const handleAdd = ()=>{
        setCounter(counter + 1);
    }

    const handleSubstrac = ()=>{
        setCounter(counter - 1);
    }

  return{
      counter,
      handleAdd,
      handleReset,
      handleSubstrac
  }
};

export default useCounter;
