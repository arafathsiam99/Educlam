import React from 'react';
import { Button, ButtonGroup, Card} from 'react-bootstrap';

const Services = () => {
    return (
      <section className="mt-5 container">
        <h1>Our Courses</h1>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="shadow-sm mx-3 my-3">
              <Card>
                <Card.Img src="https://i.ibb.co/0Xbps69/download.png" />
                <Card.Body>
                  <Card.Title>
                    The Complete Node.js Developer Course (3rd Edition)
                  </Card.Title>
                  <Card.Text>
                    Have you tried to learn Node before? You start a new course,
                    and the instructor has you installing a bunch of
                  </Card.Text>
                  <Button variant="dark">Enroll Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm mx-3 my-3">
              <Card>
                <Card.Img src="https://i.ibb.co/2dFcXrJ/download-2.png" />
                <Card.Body>
                  <Card.Title>
                    The Complete JavaScript Course 2022: From Zero to Expert!
                  </Card.Title>
                  <Card.Text>
                    You will learn modern JavaScript from the very beginning,
                    step-by-step. I will guide you through practical and
                  </Card.Text>
                  <Button variant="dark">Enroll Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm mx-3 my-3">
              <Card>
                <Card.Img src="https://i.ibb.co/GC9xTZ0/download-5.jpg" />
                <Card.Body>
                  <Card.Title>
                    Ultimate Web Designer & Web Developer Course
                  </Card.Title>
                  <Card.Text>
                    This is the tutorial you've been looking for to no longer be
                    a junior developer, level up your skills, and ear
                  </Card.Text>
                  <Button variant="dark">Enroll Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;
