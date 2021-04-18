import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import './Trauma.css'
import { Bar } from 'react-chartjs-2';
import {Card, Row, Col, Container} from 'react-bootstrap';
import CanadaForeignBorn from './canada-foreign-born.png';
import { Parallax } from 'react-scroll-parallax';

const state = {
    labels: ['Canada', 'Finland'],
    datasets: [
      {
        label: 'Death during WW2',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [44, 86]
      }
    ]
  }

export class Trauma extends React.Component {
    render () {
        return (
            <Container>
                <div className="trauma">
                    <div className="trauma___title">
                        <h1>Trauma/History fiction</h1>
                    </div>
                    <Row className="trauma___space_20">
                        <Col>
                            <h3>Both countries had many winning pieces that take place in the past</h3>
                        </Col>
                    </Row>
                    <Fade left>
                    <Row className="trauma___space_20">
                        <Col md={6}>
                            <h3>In Canada, popular eras were...</h3>
                        </Col>
                    </Row>
                    </Fade>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                        <Roll left>

                            <h3>The Great Depression</h3>
                            </Roll>

                        </Col>
                        <Col md={6}>
                        <Roll right>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179888916l/969335.jpg" />
                            </Card>
                            </Roll>

                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                            <Roll left>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51qJ7RMEdQL._SX331_BO1,204,203,200_.jpg" />
                            </Card>
                            </Roll>
                        </Col>
                        <Col md={6}>
                            <Roll right>
                            <h3>The Gold Rush</h3>
                            </Roll>
                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                            <Roll left>
                            <h3>Canadian/NA Settlement</h3>
                            </Roll>
                        </Col>
                        <Col md={6}>
                            <Roll right>
                            <Row>
                                <Col md={6}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41BDaKADVBL._SX322_BO1,204,203,200_.jpg" />
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/The_Law_of_Dreams_cover.png/220px-The_Law_of_Dreams_cover.png" />
                                    </Card>
                                </Col>
                            </Row>
                            </Roll>
                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                            <Roll left>
                            <Row>
                                <Col md={6}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51MSE4x57kL.jpg" />
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="https://images.penguinrandomhouse.com/cover/9780804173261" />
                                    </Card>
                                </Col>
                            </Row>
                            </Roll>
                        </Col>
                        <Col md={6}>
                            <Roll right>
                            <h3>The Early Settlement or 'Wild Wild West'</h3>
                            </Roll>
                        </Col>
                    </Row>
                    <Row className="trauma___space_20">
                        <Col>
                        <Fade up>
                            <h2>Meanwhile, in Finland we saw...</h2>
                            </Fade>
                        </Col>
                    </Row>

                    <Row className="trauma___space_10">
                        <Col md={4}>
                            <Roll left>
                            <h3>Wars...</h3>
                            </Roll>
                        </Col>
                        <Col md={8}>
                            <Roll right>
                            <Row>
                            <Col md={4}>
                                <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51YmSwEaeQL._SX332_BO1,204,203,200_.jpg" />
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOTg5NzY0OTQwMF5BMl5BanBnXkFtZTgwNTk0MzkwMjE@._V1_.jpg" />
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/519c-CLPDKL.jpg" />
                                </Card>
                            </Col>
                            </Row>
                            </Roll>
                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                            <Roll left>
                        <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452813277l/28558652.jpg" />
                                </Card>
                                </Roll>
                        </Col>
                        <Col md={6}>
                            <Roll right>
                            <h3>... And The Building of Helsinki</h3>
                            </Roll>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>The Main Difference is that many Finnish historical books can be considered as</h2>
                        </Col>
                    </Row>
                    <Row className="trauma___space_20">
                        <Col>
                        <Fade up>
                            <h2>Trauma Fiction</h2>
                            </Fade>
                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col>
                        <Fade up>
                            <h4>This is not exactly surprising given each country's history...</h4>
                            </Fade>
                        </Col>
                    </Row>
                    <Row className="trauma___space_10">
                        <Col md={6}>
                            <h3>Finland</h3>
                            <h4>
                            <ul>
                                <Fade up>
                                <li>1917 -- October Revolution</li>
                                </Fade>
                                <Fade up>
                                <li>1918 -- Finnish Civil War</li>
                                </Fade>
                                <Fade up>
                                <li>1939-1940 -- Winter War against Soviet Union</li>
                                </Fade>
                                <Fade>
                                <li>1941-1944 -- Continuation war againt Soviet Union</li>
                                </Fade>
                                <Fade up>
                                <li>1944-1945 -- Lapland War against Germany</li>
                                </Fade>
                            </ul>
                            </h4>
                            <h4></h4>
                        </Col>
                        <Col md={6}>
                            <Fade right>
                            <h4>The country fought many wars and battles since gaining independence
                                and was also in the middle of all the chaos during WW2.
                                <div className="trauma___space_1"></div>
                                <img src="https://lh3.googleusercontent.com/proxy/CXCwIYncMQGSvqyEdHiXCcMV4ERq1C_6ouQpz7lWZ7u0Bd_4MtfZpeskC_TZHCFTHedRJna2DMIyRw3K9w2GwA2C69OrLBDQka4"></img>
                            </h4>
                            </Fade>
                        </Col>
                    </Row>
                    <Row className="trauma___space_20">
                        <Col md={6}>
                            <Fade left>
                            <h3>Canada has a longer history than Finland and is not surprising that its historical books vary more</h3>
                            </Fade>
                        </Col>
                        <Col md={6}>
                            <h3>Canada</h3>
                            <ul>
                                <Fade up>
                                <li>1700s -- Colonial Wars</li>
                                <li>1812 -- War of 1812</li>
                                <li>1914-1918 -- WW1</li>
                                <li>1929-1933 -- The Great Depression</li>
                                <li>1944-1948 -- WW2</li>
                                </Fade>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Fade up>
                        <h4>Additionally, the effects of war impacted Canada on a lesser level.</h4>
                        <Bar
                            data={state}
                            options={{
                                title:{
                                display:true,
                                text:'Deaths during WW2',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                            />
                        44000 dead in canada 86000 dead in finland
                        500,000 finnish refugees
                        10% decrease in territory
                        </Fade>
                        </Col>
                    </Row>

                </div>
            </Container>
        )
    }
}