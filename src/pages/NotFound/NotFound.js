import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', height: '50%' }} src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;