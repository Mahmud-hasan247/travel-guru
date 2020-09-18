import React from 'react';
import Destinations from '../Destinations/Destinations';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div id="home">
                <Header></Header>
                <Destinations></Destinations>
            </div>
            
        </div>
    );
};

export default Home;