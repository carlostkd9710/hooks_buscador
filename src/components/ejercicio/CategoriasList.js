import React from 'react';
import Cards from './Cards';

const CategoriasList = ({categorias}) => {
  return (
    <div>
        <h1>Lista de Categorias</h1>
        {
                categorias.map((cate,index)=>{
                    return(
                        <Cards categorias={cate} key={index}/>
                    )
                })
            }
    </div>
  )
};

export default CategoriasList;
