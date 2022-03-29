import React from 'react';
import { Button,Card} from 'react-bootstrap';

const Services = () => {
    return (
      <section className="mt-5 container">
        <h1 className="text-center">OUR COURSES</h1>
        <div className="row">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="shadow-sm mx-3 my-3">
                <Card>
                  <Card.Img src="https://i.ibb.co/0Xbps69/download.png" />
                  <Card.Body>
                    <Card.Title>
                      The Complete Node.js Developer Course (3rd Edition)
                    </Card.Title>
                    <Card.Text>
                      Have you tried to learn Node before? You start a new
                      course, and the instructor has you installing a bunch of
                    </Card.Text>
                    <Button variant="dark">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm mx-3 my-3">
                <Card>
                  <Card.Img src="https://i.ibb.co/m4n24mH/download-3.jpg" />
                  <Card.Body>
                    <Card.Title>
                      The Complete Junior to Senior Web Developer Roadmap (2022)
                    </Card.Title>
                    <Card.Text>
                      This is the tutorial you've been looking for to no longer
                      be a junior developer, level up your skills, and ear
                    </Card.Text>
                    <Button variant="dark">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm mx-3 my-3">
                <Card>
                  <Card.Img src="https://i.ibb.co/GC9xTZ0/download-5.jpg" />
                  <Card.Body>
                    <Card.Title>
                      Ultimate Web Designer & Web Developer Course
                    </Card.Title>
                    <Card.Text>
                      This is the tutorial you've been looking for to no longer
                      be a junior developer, level up your skills, and ear
                    </Card.Text>
                    <Button variant="dark">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm mx-3 my-3">
                <Card>
                  <Card.Img src="https://i.ibb.co/Pztwcsc/download-4.jpg" />
                  <Card.Body>
                    <Card.Title>
                      Python for Data Science and Machine Learning Bootcamp
                    </Card.Title>
                    <Card.Text>
                      Are you ready to start your path to becoming a Data
                      Scientist! This comprehensive course will be your guide t
                    </Card.Text>
                    <Button variant="dark">Enroll Now</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;
