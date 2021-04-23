import React from 'react';

const Items = () =>{
    const productos= [
        {
            id: '01',
            nombre: "Notebook Hp 240",
            precio: 70000,
            caracteristicas:{
                micro: 'Intel Dual Core',
                ram: '8GB',
                discoduro: '500GB HD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: "./images/hp-240.jpg",
            stock: 6
        },
        {
            id: '02',
            nombre: "Notebook Dell Inspiron",
            precio: 70000,
            caracteristicas:{
                micro: 'Ryzen 5',
                ram: '8GB',
                discoduro: '256GB SSD',
                so:'Windows 10'
            },
            pantalla: '15.6´',
            img: `https://http2.mlstatic.com/D_NQ_NP_812015-MLA45598699817_042021-O.webp`,
            stock: 5
        },
        {
            id: '03',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 3
        },
        {
            id: '04',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 2
        },
        {
            id: '05',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 1
        },
        {
            id: '06',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 7
        },
        {
            id: '07',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 5
        },
        {
            id: '08',
            nombre: "Xview Novabook V2",
            precio: 25000,
            caracteristicas:{
                micro: 'Atom N3450',
                ram: '4GB',
                discoduro: '64GB SSD',
                so:'Windows 10'
            },
            pantalla: '14´',
            img: `./images/xview.png`,
            stock: 3
        }
    
    ]

    return productos;
}

export default Items;

