import React, { useEffect, useState } from 'react';

const useFormulario = () => {

    const [data, setData] = useState({
        name: '',
        email:''
    });

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleInputChange = ({target})=>{
        console.log(target);
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    useEffect(() => {
      console.log("componente montado");
      return () => {
        console.log("componente desmontado");
      };
    }, [data]);

  return {
      data,
    useEffect,
    handleInputChange,
    handleSubmit
  };
};

export default useFormulario;
