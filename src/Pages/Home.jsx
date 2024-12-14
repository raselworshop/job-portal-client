import React from 'react';
import Banner from '../component/common/Banner';
import JobCategories from '../component/common/JobCategories';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <JobCategories></JobCategories>
            </section>
        </div>
    );
};

export default Home;