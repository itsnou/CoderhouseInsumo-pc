import React,{useState} from 'react';
import ItemCount from './ItemCount';


const ItemList = ({productos}) =>{

    return(
        <div>
            <h1>PRODUCTOS</h1>
            <div className="row w-75 m-auto">
                {
                    productos.map((item)=>
                        <div className="wrapper" key={item.id}>
                            <div className="container">
                                <div className="top">
                                    <img className=" pt-0 mt-0" src={item.img} alt={item.nombre} height="300"/>
                                </div>
                                <div className="bottom">
                                    <div className="details">
                                        <h1>{item.nombre}</h1>
                                        <h3>$ {item.precio}</h3>
                                    </div>
                                    <ItemCount item={item} />
                                </div>
                            </div>
                            {/* <div className="inside">
                                <div className="icon" key={item.id}><i className="fas fa-info-circle"></i></div>
                                <div className="contents">
                                    <table>
                                        <tr>{item.caracteristicas.micro}</tr>
                                        <tr>{item.caracteristicas.ram}</tr>
                                        <tr>{item.caracteristicas.discoduro}</tr>
                                        <tr>{item.caracteristicas.so}</tr>
                                    </table>
                                </div>
                            </div> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemList;