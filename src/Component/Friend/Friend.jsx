import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><small>ring: daimond</small></p> }
        {/* {ring} */}
        </div>
    );
};

export default Friend;