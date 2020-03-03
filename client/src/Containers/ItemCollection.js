import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import { userSearchInput } from '../Actions/SearchBar';



class ItemCollection extends React.Component {
  //----------------------- Fetch All Item Data
  async componentDidMount() {
    this.props.getAllItems();
  }


  handleUserInput = (event) => {
    event.preventDefault()
    // console.log('term', event.target.value)
    this.props.userSearchInput(event.target.value)
  }

  
  render() {

    if(this.props.items === undefined) {
      return <h3>Loading...</h3>
    }
    
    console.log(this.props)

    return (<div>
        <div className="form-group">
          <input className="form-control" type="text" onChange={(event) => this.handleUserInput(event)} placeholder="Search for name, size, price..." />
        </div>
        <div className="row row-cols-1 row-cols-md-3">
        {this.props.items.map(i => {
          return <ItemCard item={i}/>
        })}
        </div>
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data,
  searchBar: state.searchTerm
});

export default connect(mapStateToProps, { getAllItems, userSearchInput })(ItemCollection);