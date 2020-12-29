import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Detail.css';
import { Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import data from '../../Data/Data';

const Detail = () => {
    const { name } = useParams();

    const getInfo = data.find(data => data.name === name);

    return (
        <div className='background'>
            <div id='background'>
                <Header></Header>
                <div className="tow-side">
                    <div className='left-side'>
                        <h1>{getInfo.name}</h1>
                        <br />
                        <p>{getInfo.fullDescription}</p>
                    </div>
                    <div className='right-side-of-detail'>
                        <Form>
                            <Form.Control
                                placeholder="Origin" />
                            <br />
                            <Form.Control
                                placeholder="Destination" />
                            <br />
                            <Row>
                                <Col>
                                    <Form.Control
                                        placeholder="From" />
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="To" />
                                </Col>
                            </Row>
                            <br />
                            <div id='booking'>
                                <Link to='/booking'>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                    >
                                        Start booking now
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;