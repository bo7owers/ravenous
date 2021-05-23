import React from 'react';
import './_businessList.scss'; // May need to import to App.scss
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>

        )
    }
}

export default BusinessList;