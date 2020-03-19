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
        
        return(<div className="reviewpage-container">
            <p>Review Page</p>
                <ItemReviewCard item={this.props.item}/>
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