import Navigation from '@/components/shared/Navigation';
import React from 'react';

const WithCommonLayout = ({children}) => {
    return (
        <div>
               <Navigation/>
            {children}
        </div>
    );
};

export default WithCommonLayout