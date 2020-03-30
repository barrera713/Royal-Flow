import React from 'react';
import { connect } from 'react-redux';
import { deleteReview } from '../Actions/Review';
import StarRatingComponent from 'react-star-rating-component';



function ReviewCard(props) {
   

    let activeUser = sessionStorage.getItem('activeUser')
    console.log('user form storage', activeUser)
    
    const handleDelete = (id) => {
        // console.log('inside function', id)
        props.deleteReview(id)
    }

    if(props.reviews === undefined) {
        return(<div>Loading...</div>)
    }
    if(props.reviews !== undefined) {
        return props.reviews.map(i => {
        let formatDate = new Date(i.review.createdAt)
        return(<div className="card">
        <div className="card-header">
                <p className="card-text">{formatDate.toDateString()}</p>
        </div>
        <div className="card-body">
            <StarRatingComponent 
            value={i.review.rating} 
            starCount={5} 
            editing={false}
            />
            <p className="card-title">{i.username}</p>
            <p className="card-text">{i.review.content}</p>
            {activeUser === i.username ? <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(i.review.id)}>Delete</button> : null }
        </div>
        </div>)
        })
    }
}

const mapStateToProps = state => ({
    reviews: state.itemReviews.allItemReviews
})

export default connect(mapStateToProps, { deleteReview })(ReviewCard);