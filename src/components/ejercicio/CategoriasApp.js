import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CategoriasList from './CategoriasList';
import CategoriasAdd from './CategoriasAdd';

const CategoriasApp = () => {
    const [categorias, setCategorias] = useState([]);
    const [nombre, setNombre] = useState('Horror');


    const imgGif = async()=>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(nombre)}&limit=10&api_key=PQ3LOEeKfhMy2mM79JBxUO04KPYfT3ue`
        const resp = await fetch(url)
        const {data} = await resp.json()

        const imgData = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return imgData
    }

    useEffect(() => {
        imgGif(categorias).then(imgDat=>setCategorias(imgDat))
    }, [categorias]);


    const handleAdd = ()=>{
        setNombre( 'Risas' )
    }
  return(
    <div>
        <h1>componentes hooks</h1>
        <ol>
            <CategoriasAdd setCategorias={setCategorias}/>
            <CategoriasList categorias={categorias}/>
        </ol>
        <Button variant='warning' type='button' onClick={handleAdd}>Agregar categoria</Button>
    </div>
  )
};

export default CategoriasApp;
