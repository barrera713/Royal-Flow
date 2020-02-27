import React from 'react';

const ItemCard = (props) => {

    const { item } = props;

    const addItem = (item) => {
        // Currently only adds one Item to local storage
        const addedItem = JSON.stringify(item)
        localStorage.setItem('item', addedItem)
    }

    return(<div className="col mb-4" key={item.id}>
        <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">${item.price}</h5>
            <p className="card-text">{item.description}</p>
            <button onClick={() => {addItem(item)}} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>)
};

export { ItemCard };

