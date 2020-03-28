import React from 'react';
// import HighestRated from './Containers/HighestRated';
import ItemCollection from './Containers/ItemCollection';
import Accessories from './Containers/Accessories';
import Tops from './Containers/Tops';
import HottestReleases from './Containers/HottestReleases';

class MainBody extends React.Component {

    render() {
        return(<div className="main-body-container">
            <div className="intro-img">
                <img src={'intro.jpg'} alt="" />
            </div>
            <div>
                <ItemCollection />
                {/* <HighestRated /> */}
                <HottestReleases />
            <div className="mission-statement">
                <div className="brand">
                    <h2>ROYAL FLOW</h2>
                </div>
                <div className="statement">
                    <ul>
                        <li>
                            <p>Shop Sneakers Shirts, and Accessories</p>
                        </li>
                        <li>
                            <p>Quality is Our Name</p>
                        </li>
                        <li>
                            <p>Always Authentic</p>
                        </li>
                    </ul>
                </div>
            </div>
                <Tops />
                <Accessories />
            </div>
        </div>)
    }
}

export default MainBody;