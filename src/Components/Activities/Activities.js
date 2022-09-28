import React from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
        </div>
    );
};

export default Activities;