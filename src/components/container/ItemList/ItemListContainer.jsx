import React,{ useState, useEffect } from 'react';
import ItemList from './ItemList';
import Items from './Items';

const Lista = () =>{
    const [productos, setProductos] = useState(Items);

    useEffect(() => {
        const task = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productos)
            },3000)
        })
        .then(rest => {setProductos(rest);});
    },[]);

    return(
        <ItemList productos={productos}/>
    )
}

export default Lista;