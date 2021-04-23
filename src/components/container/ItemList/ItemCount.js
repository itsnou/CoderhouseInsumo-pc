import React, { useState } from 'react';

const ItemCount = ({item})=>{

    const [stockT, stockTotal] = useState(item.stock);
    const [contador, setContador] = useState(1);
    const [precioTotal, setPrecioTotal]= useState(item.precio);


    function calcularTotal(){
        setPrecioTotal(item.precio * contador)
    }

    const sumar = () =>{
        setContador(contador+1)
    }

    const controlStock= () =>{
        stockTotal(stockT-1)
    }

    const restar = () =>{
        if(contador <= 1 ){
            return false
        }else{
            stockTotal(stockT+1);
            setContador(contador-1);
        }
    }

    function controlarTodo(){
        if(stockT > 1){
            calcularTotal()
            sumar()
        };
        controlStock();
    }
    
    
    
    return(
        <>
            <div className="details">
                
                <p>$ {precioTotal}</p>  {/* crear componente para calcular total <CalcularTotal stock={item.stock} precio={item.precio} debe retornar también el nombre del producto en un h1*/}
            </div>
            <div>Cantidad de productos a comprar: {contador} </div>
            <button className="boton--restar btn" onClick={controlarTodo}>+</button> 
            <button className="boton--sumar btn" onClick={restar}>-</button>
            <button className="buy btn bg-gray"><i className="fas fa-shopping-cart"></i>COMPRAR</button>
        </>
    )
}

export default ItemCount;