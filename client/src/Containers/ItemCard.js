import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../Actions/ActiveCart';

const ItemCard = (props) => {

    const { item } = props;

    const handleAddItem = (item) => {
       props.addItem(item);
    }

    return(<div className="col mb-4" key={item.id}>
        <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">${item.price}</h5>
            <p className="card-text">{item.description}</p>
            <button onClick={() => handleAddItem(item)} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>)
};

export default connect(null, { addItem })(ItemCard);

