import React, { useEffect, useRef, useState } from 'react';

const CategoriasAdd = ({setCategorias}) => {

    const [search, setSearch] = useState('');
    const searchRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setCategorias(categorias =>[search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e)=>{
        setSearch(e.target.value)
    }

    useEffect(() => {
      searchRef.current.focus()
    }, []);

  return (
  <>
    <form onSubmit={handleSubmit}>
        <input
            ref={searchRef}
            name="search"
            placeholder='Categorias'
            value={search}
            onChange={handleInputChange}
        />
    </form>
  </>
  )
};

export default CategoriasAdd;
