import React from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import ItemCard from '../Components/ItemCard';


class Tops extends React.Component {

    render() {

        if(this.props.items === undefined) {
            return <h3>Loading...</h3>
        }


        
        let tops = this.props.items.filter(i => i.item_type === 'shirt')
        console.log('[ACCESSORIES]', tops)


        return(<div>
            <h2 className="section-header">Shirts</h2>
            <div className="row row-cols-1 row-cols-md-3">
            {tops.map(i => {
              return <ItemCard item={i} key={i.id}/>
            })}
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    items: state.items.allItems.data
});


export default connect(mapStateToProps, {getAllItems })(Tops);