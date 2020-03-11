import React from 'react';


function ItemReviewCard(props) {

    const { item } = props;

    return(<div className="card">
    <img src={item.imageUrl} className="img-review-display" alt="..." />
    <div className="card-body">
    <p className="card-text">{item.description}</p>
    <p className="card-text">Price ${item.price}</p>
    <p className="card-text">Size {item.size}</p>
    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Write a Review</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Rating</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Tell us what you think</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    </div>
    </div>
  </div>)
}

export default ItemReviewCard;