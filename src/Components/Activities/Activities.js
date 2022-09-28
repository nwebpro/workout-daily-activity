import React from 'react';
import Activity from '../Activity/Activity';

const Activities = ({activities, addToList}) => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    activities.map(activity => (
                        <Activity 
                            activity={activity}
                            key={activity.id}
                            addToList={addToList}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Activities;