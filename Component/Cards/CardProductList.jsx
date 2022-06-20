import React, { useState } from 'react';
import Cards from "./card";
import style from '../../styles/Cards.module.css'


const CardProductList = ({products}) => {
    console.log("============", products)
  
    return (
        <div className={style.cardprop}>
            {
                products?.data.products.map((e, i) => <Cards key={i} data={e} />)
            }
        </div>
    );
};

export default CardProductList;