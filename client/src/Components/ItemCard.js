import React from 'react';
import { connect } from 'react-redux';
import { addItem, cartCount } from '../Actions/ActiveCart';
import { getItemReviews } from '../Actions/Review';
import history from '../history';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';



const ItemCard = (props) => {

    const { item } = props;

    // console.log('[inside ItemCard]', item.itemReviews)

    let ratings = item.itemReviews.map(i => i.review.rating)
    console.log('[RATINGS]', ratings)
    // ---------------- Checks if Rating arr is NOT empty then gets average rating for each item -----------------------------
    const checkRatings = (arr) => {
        if(arr.length > 0) {
            return arr.reduce((total, rating) => total += rating ) /arr.length
        }
    };

    let aveverageRating = checkRatings(ratings)
    console.log('[AVERAGE RATING]', aveverageRating)


    const handleAddItem = (item) => {
        let userLoggedIn = sessionStorage.getItem('Bearer');
        //---------- checks if item exist in props.cart --------------
        let findItem = props.cart.find(i => i.id === item.id)
        // console.log('item', findItem)
        if(userLoggedIn === null ) {
            history.push('/login');
        }
        else if (findItem === undefined && userLoggedIn !== null) {
            props.addItem(item)
            props.cartCount()
        } else {
            window.alert(`${item.description} is already in your cart.`)
        }
    };


    return(<div className="col mb-4" key={item.id}>
        <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt="..." />
            <div className="item-flex-container">
                <div className="card-body">
                <p className="card-text">{item.description}</p>
                {item.size ? <p>Size {item.size} | ${item.price}</p> : <p>Price ${item.price}</p>}
                </div>
                <div className="star-rating">
                <StarRatingComponent 
                            value={aveverageRating} 
                            starCount={5} 
                            editing={false}
                            />
                <Link to={{pathname: `/reviews/${item.id}`, state: {item: item.id } }}>
                    {ratings.length > 0 ? <p>total ratings {ratings.length}</p> : <p>Be the first to review!</p>}
                </Link>
                </div>
            </div>
            <div className="add-to-cart-btn">
                <button type="button" className="btn btn-warning add-to-cart" onClick={() => handleAddItem(item)} >
                        <i className="fas fa-cart-arrow-down"></i>
                        Add to Cart
                </button>
            </div>
        </div>
    </div>)
};


const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps, { addItem, cartCount, getItemReviews })(ItemCard);

