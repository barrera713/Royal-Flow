import React from 'react';
import ItemCard from '../Components/ItemCard';
import { connect } from 'react-redux';
import { getAllItems } from '../Actions/Item';
import { userSearchInput } from '../Actions/SearchBar';



class ShirtCollection extends React.Component {
  //----------------------- Fetch All Item Data -------------------------
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


    // ---------------- User input ------------------------
    let userInput = this.props.searchBar

    // --------------- shirt array ------------------------------
    let topsArr = this.props.items.filter(i => i.item_type === "shirt")
 
    //----------- function that filter item description on user input ------------------------------
    let filterDescription = (description) => description.toLowerCase().includes(userInput.toLowerCase());

     // ----------------- filters shirt array on user input -----------------------------------------------------
     let filteredData = topsArr.filter(i => {
       return filterDescription(i.description)
     })

    return(<div>
      <div className="form-group">
        <input className="form-control" type="text" onChange={(event) => this.handleUserInput(event)} placeholder="Search for name, size, price..." />
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {filteredData.map(shirt => {
            return (<ItemCard item={shirt}/>)
        })}
      </div>
    </div>)
  };
}

const mapStateToProps = state => ({
  items: state.items.allItems.data,
  searchBar: state.searchTerm.searchInput
});

export default connect(mapStateToProps, { getAllItems, userSearchInput })(ShirtCollection);