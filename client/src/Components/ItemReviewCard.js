import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../Actions/Review';

function ItemReviewCard(props) {

    const { item } = props;

    console.log('PROPS INSIDE ITEMREVIEWCARD', item)

    let submitReview = (e) => {
        e.preventDefault()
        let formData = {
            "rating": e.target["rating"].value, 
            "content": e.target["content"].value
        }
        // console.log('INSIDE FUNCTION', formData, item.id)
        props.createReview(formData, item.id)
    }

    return(<div className="card">
    <img src={item.imageUrl} className="img-review-display" alt="..." />
    <div className="card-body">
    <p className="card-text">{item.description}</p>
    <p className="card-text">Price ${item.price}</p>
    <p className="card-text">Size {item.size}</p>
    </div>
    <div className="modal fade" id="item-review" tabIndex="-1"  aria-hidden="true">
    <div className="modal-dialog" >
        <div className="modal-content">
            <form onSubmit={submitReview}>
                <div className="form-group">
                    <label>Rating</label>
                    <select className="form-control" name="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Tell us what you think</label>
                    <textarea className="form-control" name="content"></textarea>
                </div>
                    <button className="btn btn-warning" type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
  </div>)
}

export default connect(null, { createReview })(ItemReviewCard);