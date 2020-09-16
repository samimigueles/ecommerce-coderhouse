import React from "react";
import { Link } from 'react-router-dom';



const ItemDetail = ({ item: { id, name, price, description, imageID } }) => {
    return (
        <div className='card mb-4 shadow-sm' style={{border:'solid black', alignContent:'center', alignItems:'center'}}>
            <img src={imageID} alt={id} style={{ width:250}}></img>
            <div className='card-body'>
                <p className='card-text'> {name} - price: ${price} -{description}</p>
            </div>
        </div>
    

    )

}

export default ItemDetail








/* export default function ItemDetail({
  item: { id, name, price, description, imageID },
}) {

    return(
        <div className="card-body">
          <p>{id}</p>
          <p> {name}</p>
          <img src={imageID} alt={name} style={{ width: 250 }}></img>
          <p> {description}</p>
          <p>price: ${price}</p>
        </div>
      
      )
}
 */