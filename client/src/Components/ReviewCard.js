import React from 'react';
import { connect } from 'react-redux';


function ReviewCard(props) {
   
    console.log('PROPS FROM STORE', props.reviews)
   

    console.log('PROPS INSIDE REVIEWCARD', props.reviews)
    
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
            <p className="card-title">{i.username} | {i.review.rating}</p>
                <p className="card-text">{i.review.content}</p>
        </div>
        </div>)
        })
    }

        
    
}

const mapStateToProps = state => ({
    reviews: state.itemReviews.allItemReviews
})

export default connect(mapStateToProps)(ReviewCard);