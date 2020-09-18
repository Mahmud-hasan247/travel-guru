import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import data from '../../Data/Data';
import './Destinations.css';

const Destinations = () => {
     const [info, setInfo] = useState(data)
     const history = useHistory()
     const showDetail = (name) => {
         history.push(`/detail/${name}`)
     }
    return (
        <div className="flex">
            {
                info.map(data => <div className="all-info">
                    <div className="flex">
                    <div className='image'>
                        <img src={data.image} alt=""></img>
                    </div>
                    <div className='info'>
                        <h1>{data.name}</h1>
                        <p>{data.shortDescription}</p>
                        <Button onClick={() => showDetail(data.name)} variant="contained" color="primary">book</Button>
                    </div>
                                
                </div>
                </div>)
            }
        </div>
    );
};

export default Destinations;