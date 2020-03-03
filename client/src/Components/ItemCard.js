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
            <p className="card-text">{item.description}</p>
            {item.size ? <p>Size {item.size} | Price ${item.price}</p> : <p>Price ${item.price}</p>}
            <button onClick={() => handleAddItem(item)} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>)
};

export default connect(null, { addItem })(ItemCard);

