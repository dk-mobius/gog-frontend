import React from 'react';
import SiteHeader from 'components/SiteHeader';


const Layout = ({children}) => {
    return (
        <>
            <SiteHeader/>
            {children}
        </>
    )
};

export default Layout;