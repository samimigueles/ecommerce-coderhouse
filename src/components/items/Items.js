import React from 'react';
import { Link } from 'react-router-dom';



const Items = ({ item: { id, name, price, description, imageID } }) => {
    return (<div className='col-md-4 fadein'>
        <div className='card mb-4 shadow-sm' style={{border:'solid black'}}>
            <Link to={`/item/${id}/${name}`}> <img src={imageID} style={{ width:250, border:'dashed brown'}}></img>
            </Link>
            <div className='card-body'>
                <p className='card-text'> {name} - price: ${price} -{description}</p>
                <div className='d-flex justify-content-between align-items-center'>

                </div>
            </div>
        </div>
    </div>

    )

}

export default Items