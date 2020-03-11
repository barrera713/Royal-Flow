import React from 'react';
// import { getItemReviews } from '../Actions/Review';
import { connect } from 'react-redux';
import ItemReviewCard from '../Components/ItemReviewCard';


class ItemReviews extends React.Component {

    render() {

        console.log('REVIEWS', this.props.reviews)
        console.log('ITEM', this.props.item)
        return(<div>
            <p>Review Page</p>
            <div className="container-review-item">
                <div className="item-box">
                    {this.props.item.map(i => { return ( <ItemReviewCard item={i} />)})}
                </div>
                <div className="rating-box">
                    <p>Rating</p>
                    <p>Content</p>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = state => ({
    reviews: state.itemReviews.allItemReviews,
    item: state.items.allItems.data
})

export default connect(mapStateToProps)(ItemReviews);