import React from 'react';
import { connect } from 'react-redux';
import { getItemReviews } from '../Actions/Review';
import ItemReviewCard from '../Components/ItemReviewCard';
import ReviewCard from '../Components/ReviewCard';



class ItemReviews extends React.Component {

    componentDidMount() {
        console.log('COMPONENT DID MOUNT: ITEM', this.props.location.state.item)
        // ----------------- Get itemId from "this.props.location.state" passed from Link tag inside ItemCard  ----------------------
        this.props.getItemReviews(this.props.location.state.item)
    }

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
            <ReviewCard />
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    item: state.itemReviews.item
})

export default connect(mapStateToProps, { getItemReviews })(ItemReviews);