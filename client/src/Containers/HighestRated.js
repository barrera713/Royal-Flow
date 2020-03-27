import React from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import ItemCard from '../Components/ItemCard';


class HighestRated extends React.Component {

    render() {

        if(this.props.items === undefined) {
            return <h3>Loading...</h3>
        }


        console.log('[HIGHEST RATED]', this.props.items)


        return(<div>
            <p>Highest Rated</p>
            <div className="row row-cols-1 row-cols-md-3">
            {this.props.items.map(i => {
              return <ItemCard item={i} key={i.id}/>
            })}
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    items: state.items.allItems.data
});


export default connect(mapStateToProps, {getAllItems })(HighestRated);