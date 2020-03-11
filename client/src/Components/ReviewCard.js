import React from 'react';


function ReviewCard(props) {
    const { review } = props;
    console.log('PROPS INSIDE REVIEWCARD', review)
    let formatDate = new Date(review.review.createdAt)
    
    if(!review) {
        return(<div>Loading...</div>)
    }
    return(<div className="card">
    <div className="card-header">
        <p className="card-text">{formatDate.toDateString()}</p>
    </div>
    <div className="card-body">
        <p className="card-title">{review.username} | {review.review.rating}</p>
        <p className="card-text">{review.review.content}</p>
    </div>
    </div>)
        
}

export default ReviewCard;