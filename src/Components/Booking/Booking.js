import React, { useContext } from 'react';
import { UserContext } from '../../App';
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import './Booking.css';
import image1 from '../../images/Rectangle 26.png';
import image2 from '../../images/Rectangle 27.png';
import image3 from '../../images/Rectangle 28.png';

const Booking = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    return (
        <div>
            <AnotherHeader></AnotherHeader>
            <div className="container">
                <h2>Travel the hole world.</h2>
                <h5>Lorem ipsum dolor sit amet consectetur elit.</h5>
                <div className="all-part">
                    <div className="allHotel">
                        <div className="hotelList">
                            <div className="images">
                                <img src={image1} alt=''></img>
                            </div>
                            <div className="hotel-info">
                                <h6>Light Bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 Guests  2 Bedrooms</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                        <div className="hotelList">
                            <div className="images">
                                <img src={image2} alt=''></img>
                            </div>
                            <div className="hotel-info">
                                <h6>Apartment in Lost Panorama</h6>
                                <p>4 Guests  2 Bedrooms</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                        <div className="hotelList">
                            <div className="images">
                                <img src={image3} alt=''></img>
                            </div>
                            <div className="hotel-info">
                                <h6>AR Lounge & Pul</h6>
                                <p>4 Guests  2 Bedrooms</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                    </div>
                    <div className="map"></div>
                </div>
            </div>
        </div>
    );
};

export default Booking;