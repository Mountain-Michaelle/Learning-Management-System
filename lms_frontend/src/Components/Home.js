import React from 'react';
import Navbar1 from './Navbar1';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Courses from '../static/images/Course.jpg';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Slider from '../Slider/Slider';

const Home = () => {
    return(
        <div>
            <Slider />

        <div className='container mt-4' >
            <div className="row ">
                <h4 className='mb-1 mt-4'>Latest Courses <a href="#" className='float-end mb-5 px-3'>See all</a></h4>
                <div className="col-md-4 ">
                <Card style={{ width: '18rem' }}>
                    <Link to="/detail/:course_id/"><Card.Img variant="top" src={Courses} /></Link> 
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of yes its just for testiing
                        the card's content.
                        </Card.Text>
                        <Link to="/detail/:course_id/"><Button variant="success">Course Details</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Courses} />
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success">Course Details</Button>
                    </Card.Body>
                    </Card>
                </div>
                
                <div className="col-md-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Courses} />
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success">Course Details</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            {/* Second Line of the cards */}
            <div className="row">
                <h4 className='mb-1 mt-4'>Latest Courses <a href="#" className='float-end mb-5 px-3'>See all</a></h4>
                <div className="col-md-4 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Courses} />
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success">Course Details</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Courses} />
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success">Course Details</Button>
                    </Card.Body>
                    </Card>
                </div>
                
                <div className="col-md-2 mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Courses} />
                    <Card.Body>
                        <Card.Title className="text-info">COS421</Card.Title>
                        <Card.Text className="text-dark">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="success">Course Details</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
           
        </div>
        <Footer />
    </div>
    )
}
export default Home;