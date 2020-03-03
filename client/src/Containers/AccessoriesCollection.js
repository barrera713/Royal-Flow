import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';



class AccessoriesCollection extends React.Component {
  //----------------------- Fetch All Item Data
  async componentDidMount() {
    this.props.getAllItems();
  }

     
  render() {

    if(this.props.items === undefined) {
      return <h3>Loading...</h3>
    }
    
    console.log('SHIRT PAGE', this.props.items.filter(i => i.item_type === "accessories"))

    let accessories = this.props.items.filter(i => i.item_type !== "shirt" && i.item_type !== "sneakers");
    return(<div className="row row-cols-1 row-cols-md-3">
       {accessories.map(i => {
           return (<ItemCard item={i}/>)
       })}
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data
});

export default connect(mapStateToProps, { getAllItems })(AccessoriesCollection);