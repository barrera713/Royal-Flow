import React from 'react';
import { connect } from 'react-redux';
import ItemReviewCard from '../Components/ItemReviewCard';
import ReviewCard from '../Components/ReviewCard';



class ItemReviews extends React.Component {

    render() {


        console.log('REVIEWS: inside ItemReview', this.props.item)
        
        return(<div>
            <p>Review Page</p>
            <div className="container-review-item">
                <div className="item-box">
                    <ItemReviewCard item={this.props.item}/>
                </div>
                <div className="rating-box">
                    <p>Rating</p>
                    <p>Content</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#item-review">Write a Review</button>
                </div>
            </div>
            <div>
            {this.props.reviews.map(i => {
                return <ReviewCard review={i} />
            })}
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    reviews: state.itemReviews.allItemReviews,
    item: state.itemReviews.item
})

export default connect(mapStateToProps)(ItemReviews);