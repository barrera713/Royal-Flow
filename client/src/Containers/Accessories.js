import React from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import ItemCard from '../Components/ItemCard';


class Accessories extends React.Component {

    render() {

        if(this.props.items === undefined) {
            return <h3>Loading...</h3>
        }


        
        let accessories = this.props.items.filter(i => i.item_type === 'accessories')
        console.log('[ACCESSORIES]', accessories)


        return(<div>
            <p>Accessories</p>
            <div className="row row-cols-1 row-cols-md-3">
            {accessories.map(i => {
              return <ItemCard item={i} key={i.id}/>
            })}
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    items: state.items.allItems.data
});


export default connect(mapStateToProps, {getAllItems })(Accessories);