import React from 'react';
import ItemCollection from './Containers/ItemCollection';

class MainBody extends React.Component {

    render() {
        return(<div>
            <div className="intro-img">
                <img src={'intro.jpg'} alt="" />
            </div>
            <div>
                <h3>Highest Rated</h3>
                <ItemCollection />
            </div>
        </div>)
    }
}

export default MainBody;