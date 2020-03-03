import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';



class SneakerCollection extends React.Component {
  //----------------------- Fetch All Item Data -------------------------
  async componentDidMount() {
    this.props.getAllItems();
  }

  
  render() {

    if(this.props.items === undefined) {
      return <h3>Loading...</h3>
    }
    
    console.log('SNEAKER PAGE', this.props.items.filter(i => i.item_type === "sneakers"))

    let sneakers = this.props.items.filter(i => i.item_type === "sneakers");
    return(<div className="row row-cols-1 row-cols-md-3">
       {sneakers.map(sneaker => {
           return (<ItemCard item={sneaker}/>)
       })}
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data
});

export default connect(mapStateToProps, { getAllItems })(SneakerCollection);