import React from 'react';

const ItemCard = (props) => {

    const { item } = props;

    return(<div className="col mb-4">
        <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">${item.price}</h5>
            <p className="card-text">{item.description}</p>
            </div>
        </div>
    </div>)
};

export { ItemCard };

