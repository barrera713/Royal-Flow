import React from 'react'
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import ItemCard from '../Components/ItemCard';


class HottestReleases extends React.Component {

    render() {

        if(this.props.items === undefined) {
            return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }


        
        let hottesReleases = this.props.items.filter(i => i.price > 195)
        // console.log('[BEST DEALS]', hottesReleases)


        return(<div>
            <h2 className="section-header">Hottest Release</h2>
            <div className="row row-cols-1 row-cols-md-3">
            {hottesReleases.map(i => {
              return <ItemCard item={i} key={i.id}/>
            })}
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    items: state.items.allItems.data
});


export default connect(mapStateToProps, {getAllItems })(HottestReleases);