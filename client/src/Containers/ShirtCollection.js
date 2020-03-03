import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';



class ShirtCollection extends React.Component {
  //----------------------- Fetch All Item Data -------------------------
  async componentDidMount() {
    this.props.getAllItems();
  }

  
  render() {

    if(this.props.items === undefined) {
      return <h3>Loading...</h3>
    }
    
    console.log('SHIRT PAGE', this.props.items.filter(i => i.item_type === "shirts"))

    let tops = this.props.items.filter(i => i.item_type === "shirt");
    return(<div className="row row-cols-1 row-cols-md-3">
       {tops.map(shirt => {
           return (<ItemCard item={shirt}/>)
       })}
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data
});

export default connect(mapStateToProps, { getAllItems })(ShirtCollection);