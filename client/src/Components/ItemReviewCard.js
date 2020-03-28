import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../Actions/Review';
import StarRatingComponent from 'react-star-rating-component';



class ItemReviewCard extends React.Component {

    state = {
        rating: 0
    }

    
    onStarClick = (nextValue, prevValue) => {
        console.log('[onStarClick]', nextValue)
        this.setState({
            rating: nextValue
        })
    }


    submitReview = (e) => {
        e.preventDefault()
        // ----------- Use state in component to dispatch to Create Review Action ----------------------------
        let formData = {
            "rating": this.state.rating, 
            "content": e.target["content"].value
        }
        // console.log('[FORM DATA]', formData)
        this.props.createReview(formData, this.props.item.id)
    }



    render() {
        
        const { item } = this.props
        
        // console.log('[ITEM REVIEW CARD] props', item)

        
        return(<div className="form-and-card-container">
        <div className="card-container">
        <img src={item.imageUrl} className="img-review-display" alt="..." />
        <div className="card-body-review">
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price ${item.price}</p>
        <p className="card-text">Size {item.size}</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={this.submitReview}>
                <StarRatingComponent 
                editing={true}
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
                />
                <div className="form-group">
                    <label >Tell us what you think</label>
                    <textarea className="form-control" name="content"></textarea>
                </div>
                    <button className="btn btn-warning form" type="submit">Submit</button>
            </form>
        </div>
      </div>)
    }

}

export default connect(null, { createReview })(ItemReviewCard);