import React from 'react';
import Banner from '../component/common/Banner';
import JobCategories from '../component/common/JobCategories';
import HotJobs from '../component/common/HotJobs';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <JobCategories></JobCategories>
            </section>
            <section>
                <HotJobs></HotJobs>
            </section>
        </div>
    );
};

export default Home;