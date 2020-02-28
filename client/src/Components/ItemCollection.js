import React from 'react';
import ItemCard from '../Containers/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';



class ItemCollection extends React.Component {
  //----------------------- Fetch All Item Data
  async componentDidMount() {
    this.props.getAllItems();
  }

  
  render() {

    if(this.props.items === undefined) {
      return <h3>Loading...</h3>
    }
    
    console.log(this.props.items)

    return (<div className="row row-cols-1 row-cols-md-3">
      {this.props.items.map(i => {
        return <ItemCard item={i} />
      })}
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data
});

export default connect(mapStateToProps, { getAllItems })(ItemCollection);