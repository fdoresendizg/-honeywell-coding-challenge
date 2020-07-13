import React from 'react';

const NotFound = ({location}) => {
    return (
        <div>
            <h2>{`Not Found ${location.pathname}`}</h2>
        </div>
    )     
}


export default NotFound; 