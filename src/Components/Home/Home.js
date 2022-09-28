import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const Home = () => {
    const [activities, setActivities] = useState([]);
    const [addList, setAddList] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    // Add To Cart
    const addToList = (selectedList) => {
        let newList = [...addList, selectedList]
        setAddList(newList);
    }
    
    return (
        <section>
            <div className='container mx-auto px-4 md:px-0 py-10'>
                <div className="flex flex-col-reverse md:flex-row gap-5">
                    <div className='w-full md:w-3/4'>
                        <Header />
                        <Activities activities={activities} addToList={addToList} />
                    </div>
                    <div className='w-full md:w-3/12 px-2 relative'>
                        <div className='sticky top-5'>
                            <Profile addList={addList} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;