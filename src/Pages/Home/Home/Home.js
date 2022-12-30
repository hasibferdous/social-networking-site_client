import React from 'react';
import LeftContainer from '../../../components/LeftContainer/LeftContainer';
import MainContainer from '../../../components/MainContainer/MainContainer';
import RightContainer from '../../../components/RightContainer/RightContainer';

import './home.css';

const Home = () => {
    return (
        <div>
            <div className='Container'>
                <LeftContainer></LeftContainer>
                <MainContainer></MainContainer>
                {/* <RightContainer></RightContainer> */}
            </div>
            

        </div>
    );
};

export default Home;