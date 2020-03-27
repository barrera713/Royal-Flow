import React from 'react';
// import HighestRated from './Containers/HighestRated';
import ItemCollection from './Containers/ItemCollection';
import Accessories from './Containers/Accessories';
import Tops from './Containers/Tops';
import HottestReleases from './Containers/HottestReleases';

class MainBody extends React.Component {

    render() {
        return(<div>
            <div className="intro-img">
                <img src={'intro.jpg'} alt="" />
            </div>
            <div>
                <ItemCollection />
                {/* <HighestRated /> */}
                <HottestReleases />
                <Tops />
                <Accessories />
            </div>
        </div>)
    }
}

export default MainBody;