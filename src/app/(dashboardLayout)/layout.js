import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
           <Sidebar/>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default DashboardLayout;