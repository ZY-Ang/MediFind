import React from 'react';

const NotFoundPage = ({location}) => {
    return (
        <div>
            <h1>404: Not Found</h1>
            <p>The requested URL <i>{location.pathname !== '/404' && location.pathname}</i> was not found on this application.</p>
        </div>
    );
};

export default NotFoundPage;
