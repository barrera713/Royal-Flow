import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import { userSearchInput } from '../Actions/SearchBar';



class ItemCollection extends React.Component {
  //----------------------- Fetch All Item Data
  componentDidMount() {
    this.props.getAllItems();
  }


  handleUserInput = (event) => {
    event.preventDefault()
    // console.log('term', event.target.value)
    this.props.userSearchInput(event.target.value)
  }

  
  render() {

    if(this.props.items === undefined) {
      return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    }
    
    // console.log('[ITEMS] props', this.props.items)
    let userInput = this.props.searchBar

    //----------- function that filter item description on user input ------------------------------
    let filterDescription = (description) => description.toLowerCase().includes(userInput.toLowerCase());

    // ----------------- filtered array -----------------------------------------------------
    let filteredData = this.props.items.filter(i => {
      return filterDescription(i.description)
    })

    return (<div>
      <div className="search-bar-container">
        <div className="form-group search">
          <input className="form-control" type="text" onChange={(event) => this.handleUserInput(event)} placeholder="Search for products..." />
        </div>
      </div>
        <div className="row row-cols-1 row-cols-md-3">
        {userInput.length > 1 ? filteredData.map(i => {
          return <ItemCard item={i} key={i.id}/>
        }) : null }
        </div>
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data,
  searchBar: state.searchTerm.searchInput
});

export default connect(mapStateToProps, { getAllItems, userSearchInput })(ItemCollection);