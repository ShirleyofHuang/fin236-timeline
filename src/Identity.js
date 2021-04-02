import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import './Identity.css'
import { Doughnut } from 'react-chartjs-2';
import {Card, Row, Col, Container} from 'react-bootstrap';
import CanadaForeignBorn from './canada-foreign-born.png';
import { Parallax } from 'react-scroll-parallax';

 
const CanadaMC = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Female To Male',
        data: [10, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  const FinlandMC = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Female To Male',
        data: [8, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

export class Identity extends React.Component {
    render () {
        return (
            <Container>
            <div class="no-padding identity">
                <h2 className="identity___title">Identity through literature</h2>
                {/* <div class="row"> */}
                    <div class="col-md-6 no-padding">
                        <Fade left>
                            <h4>"It was the time where the topic of multiculturalism became important with the influx of immigrants, womanhood was beginning to be empowered, and discrimination based on sexual oritentation and gender identity became an issue."</h4>
                        </Fade>
                    </div>
                    <div class="col-md-6 no-padding">
                        <Fade up>
                            <h3>1980-2000 in Finland</h3>
                        </Fade>
                    </div>
                    <Fade down>
                    <div class="identity___intro col-md-12 no-padding ">
                        <h3 className="identity___intro">Some Books Published In Finland Discuss the many fronts of identity</h3>
                    </div>
                    </Fade>
                    <div>
                        <Fade up>
                       <h4> LGBTQ+</h4>
                       </Fade>
                       <Fade left>
                       <Row>
                            <Col md={6}>
                                <h3 className="identity___intro">Finland produced works containing LGBTQ+ couples ...</h3>
                            </Col>
                        </Row>
                        </Fade>
                        <Fade up>
                       <Row className="identity___intro"> 
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41jG6a7vTAL.SX316.SY480.jpg" />
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51lLn0S2zlL.jpg" />
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.randomhouse.com/cover/9781524749200" />
                            </Card>
                        </Col>
                      </Row>
                      </Fade>
                    </div>
                    <div>
                        <Fade right>
                        <Row>
                            <Col md={{ span: 6, offset: 6 }}>
                                <h3 className="identity___10">... But Canada did not</h3>
                            </Col>
                        </Row>
                        </Fade>
                    </div>
                    <div className="identity___intro">
                        <Fade up>
                            <div className="identity___10">
                        <Row>
                            <Col>
                            <h3>Instead the country had an abundant amount of works focussing on foreign areas</h3>
                            </Col>
                        </Row>
                        <Row> 
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.penguinrandomhouse.com/cover/9780375724374" />
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/The_Law_of_Dreams_cover.png/220px-The_Law_of_Dreams_cover.png" />
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51EEF44yg9L.jpg" />
                            </Card>
                        </Col>
                      </Row>
                        </div>
                      </Fade>
                      <Fade right>
                      <Row className="identity___10">
                          <Col md={{ span: 9, offset: 3 }}>
                              <h4>With a wide range of characters from East Asia to South Asia to Europe</h4>
                          </Col>
                      </Row>
                      </Fade>
                      <Row className="identity___10">
                        <Col md={6}>
                            <Fade left>
                            <h3>Finland on the otherhand had only one book set outside of Finland, Estonia, Russia ...</h3>
                            </Fade>
                        </Col>
                          
                          <Fade right>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.randomhouse.com/cover/9781524749200" />
                            </Card>
                        </Col>
                        </Fade>
                      </Row>
                      <Row>
                          <Col><h4>This isn't surprising considering the population make up of both countries</h4></Col>
                      </Row>
                      <Row>
                          <Col md={6}>
                              <Roll left>
                          <Doughnut 
                            data = {CanadaMC}>
                        </Doughnut>  
                        </Roll>
                          </Col>
                          <Col md={6}>
                          <Roll right>
                          <Doughnut
                            data={FinlandMC}>
                        </Doughnut> 
                        </Roll>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <Fade up>
                        <Row ><Col>
                        <h3 className="identity___10">But one thing both countries wrote about...</h3>
                        </Col></Row>                        
                        </Fade>
                        <Fade down>
                        <Row>
                            <Col>
                                <h2 className="identity___10">Feminism/Gender Norms</h2>
                            </Col>
                        </Row>
                        </Fade>
                        <Row>
                            <Col md={6}>
                                <Roll left>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179888916l/969335.jpg" />
                            </Card>
                                </Roll>
                                <Roll left>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41TYYzvesAL._SX331_BO1,204,203,200_.jpg" />
                            </Card>
                                </Roll>
                                <Roll left>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.cbc.ca/1.5221502.1563892287!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/book-cover-five-wives-by-joan-thomas.jpg" />
                            </Card>
                                </Roll>
                                <Roll left>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/510CcQ7BqEL._SX329_BO1,204,203,200_.jpg" />
                            </Card>
                                </Roll>
                                <Roll left>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51ws7qv4D7L.jpg" />
                            </Card>
                                </Roll>

                            </Col>
                            <Col md={6}>
                                <Roll right>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMTVjYTk0MzItNTAwYi00OWI2LWJhNTEtZGYzN2U0OTU0ZWI4XkEyXkFqcGdeQXVyMjkyMDI4NTQ@._V1_.jpg" />
                            </Card>
                            </Roll>
                            <Roll right>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518381674l/38486336._SY475_.jpg" />
                            </Card>
                            </Roll>
                            <Roll right>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                            </Card>
                            </Roll>
                            </Col>
                        </Row>
                    </div>
            </div>
            </Container>
)
    }
};