import React, { useContext } from 'react';
import { UserContext } from '../../App';
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import './Booking.css';

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
                                <img src='https://lh3.googleusercontent.com/spvZdJfZldXlJyr3xN6Sdc7PHdyYUM5SYTQTxVO7aeAWOWuhqVxZNV1eN_cFcnW3IEAsEXa5R99QIYkvvxqWheMcl4zbpvR2thd5o3CIHdh7v6zui13JbEPTFCHgVdU_1Qk9KX8E5Bp3vMNl6-tI5QunQIY82kuo36u4RI-WHyLMAYMvWn4FLIGwllUWSIRZVSrxasaLXp3ujKZG2PnybXgIZ3wL74ayA9HZO8UnHSVVFYQMFkxD5go7qZJGwq0Y4ohgDGlOIGkqnjWKx2tsJ_vc48T1TaNsEtiy1SyeTTCuxlZgNCNEt5t00tyKKVMbBd7S6HYL4I6akqiigKdq5XUOUdKAb15NfmelgpXNeAS4FL-3Tc9BoWyM3rYm4LzrQPTWboOoQ_HUhlGaZZup0fUop_g0kJUe3cMXAfUC82VYn4r4vUHhEwoPaIf1wpaWOcox8UMkZ0OGcjpmkQ2PVKs9LL8OLkrZQveyq4SHKj9sLM4aa7YHdGIUgNvIlcEXEe1iNz7NkWhg-FdUHbe0ojXWZLIz26r2K0hSeo6TOXlOLa-dCROnnqXmw-TQjh8XKtACW6I0D4PEpSNV_38VJXYb0bVSwFKGkyknjE0JjGgX9AQ7nuPGfsohtGYAgdUyRDlXQE0GWEZ7A_AiCf987A-fph30Qc4lcWh77YJbHxuwC4AgoNkxbEZOuLP1nw=w301-h210-no?authuser=0' alt=''></img>
                            </div>
                            <div className="hotel-info">
                                <h6>Light Bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 Guests  2 Bedrooms</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                        <div className="hotelList">
                            <div className="images">
                                <img src='https://lh3.googleusercontent.com/dO_EiTb2GGPIACkmrxHk9E4XV-ocejAUXOaGYe9QD9DYK-j7M2vRIYoZurJX17FGGptgiULbhx-AHmSl-gwXBDTYTk7DOKj0_0R7MiCMuWAsF-PXhsCFxwVD68go9OiywO9Y7MFzzlw_XjDXtbf7Hgo35U6d3hlsrv6iju3GxmZtCK63j07F330XpJ4ialIDXYtI-GW0ulk_DYBMMWiRzKaC9GR4swSq48FAAKxTdxkekQI7DYB0cYc4b9vVgJZ8OQRP1M9xWhoeTYveZUkNfjl6Jym1XfBBQPk5Xjdlurr3cub2h5g2UfZ1ylQCyC7QorWKMXnIBXuraRX55YcQp6QxAZ4qALAlwkMhQBEmO5lgs2C_joruc6qRE15bWoPex5VCDkgI38LQYWft6VW40QmfNOIwYw79v2IxJ4zWfCsS7MHSMIyXtradvNbBX3e3WpBF-JlF0jmSj7dN83kXCnabjbYjOo4f653HUkc3LzEdKGswnzhAaY2z7fuQfC0XTSDPVbpH8mpJkXRiJvNPE6PSnQivf7d40B9fBaCoJd32m4eP4eLucaeLA382Kq8Oq84J5ud2MIyauIH_94fY9FV1Qajb8wDRSl21cPrD7uvyxpPX0EkwwM9enuIU9v0lmjEIHxcsPPIRuJLfPUyfUhtzjn5XOc7pSN0912mV1inVXH9hKv7dHQMMQrQ6ZQ=w540-h376-no?authuser=0' alt=''></img>
                            </div>
                            <div className="hotel-info">
                                <h6>Apartment in Lost Panorama</h6>
                                <p>4 Guests  2 Bedrooms</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                            </div>
                        </div>
                        <div className="hotelList">
                            <div className="images">
                                <img src='https://lh3.googleusercontent.com/b9G1LPHXF7NMiV1HyGT8oarLPW-fPjsU5yAJPYW-eGOUN4NiCufLufjZYLCnpyFISYBqdd61Xgt55Hv8sdWvf8eb647jqGNRqZz92uVFMtIp7DvvVyuD4JILeHxbzOYtCPjUl0ioN_CaeerWYQ6igNKwhpa9jHMz2ufDyhphtndl6JJdlXZkOIzKGqMRgT6nI0N098vJrvuDjopial7e11rJIM9GIH278uzduxctELNQ-8_dOphlsRZ36Ptg-aHh8l-ZtTzaPfkn5CmkvA6APZXelaIQdI-w_EeSy_1f2DR3Uq8qR9MfuopV4vRgrRgN3gIKyP2fNYyXxbZ4wK-ABbtNGw0VAHqyqlMPjcZHv7xDli2steipvKFHRSYPieIzqhklQD7ms4WtmtXg-JBZEDuLTjWYb5g0sJTRMjUqE_x_ZkwiJf4Uy385Q2A48AK2kfDoGF4hZxA7u9kaIuauh506x7RScX6mwcQERLumjjizghSGb8-C1FEQip79Tc_yTLX79OANoXXDZzDYtC_4XTBTlj0M3HCFaEkKUTpHKBYNDsNn_lqrKbGsNJXd2uOSxVaQo6GgR-QVVY-_hR0Lk-JzVJ3WbEf_Ax4GmtILUyA3_Zg12HdLwHKyM16CU8ogkCJoQvtf6Y9Df-XNI-HinYGRkJaTa_feDes_kHeDXM_cLf8A-3-kL_5X-jvTuA=w540-h376-no?authuser=0' alt=''></img>
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