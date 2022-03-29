import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <section className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-content num1">
                <h1>Welcome to Educlam</h1>
                <p>We Love Programming...</p>
                <button className="btn">Read More</button>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-content num2">
                <h1>Welcome to Educlam</h1>
                <p>We Love Web Development</p>
                <button className="btn">Read More</button>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-content num3">
                <h1>Welcome to Educlam</h1>
                <p>We Love Software Development</p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* services section */}
      <section className="mt-5">
        <Services></Services>
      </section>

      {/* OUR GALLERY */}
      <h1 className="text-center">OUR GALLERY</h1>
      <div className="gallery pt-5">
        {/* first row  */}
        <div className="row">
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/4d17FnD/pexels-photo-2781814.png"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/5GMHFYX/pexels-photo-7972359.png"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/8MXwtCx/Father-and-son-going-to-kindergarten.jpg"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
        </div>

        {/* second row  */}
        <div className="row">
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/YLPxcjS/Group-of-kids-return-to-school-during-the-pandemic.jpg"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/N77qTCx/Young-student-watching-lesson-online-and-studying-from-home-Girl-using-laptop-for-online-lessons-Hom.jpg"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
          <div className="col-lg-4 g-0">
            <div className="containerr">
              <img
                src="https://i.ibb.co/rGMSSvy/Happy-African-American-student-raising-her-hand-to-ask-a-question-during-lecture-in-the-classroom.jpg"
                alt=""
              />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Section */}
      <div className="container">
        <div className="row custom-back mt-5">
          <div className="col-lg-3 text-center">
            <i className="fas fa-users custom-sticker"></i>
            <h3>94,532</h3>
            <p>FOREIGN FOLLOWERS</p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fas fa-book-open"></i>
            <h3>11,223</h3>
            <p>CLASSES COMPLETE</p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fas fa-trophy"></i>
            <h3>282,673</h3>
            <p>STUDENTS ENROLLED</p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fas fa-user-check"></i>
            <h3>370</h3>
            <p>CERTIFIED TEACHERS</p>
          </div>
        </div>
      </div>
      {/* faculty  */}
      <div className="teachers p-5">
        <h1 className="text-center">FACULTY MEMBER</h1>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="//i.ibb.co/YXq73q7/Smiling-indian-business-man-working-on-laptop-at-home-office-Young-indian-student-or-remote-teacher.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="overlay-img">
                    <div className="social">
                      <ul>
                        <li>
                          <i className="fab fa-facebook"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fab fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="name">Alex</h3>
                  <h6 className="sub-head">Manager</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://i.ibb.co/J21Ggfq/lockdown-pandemia-people-wearing-mask.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="overlay-img">
                    <div className="social">
                      <ul>
                        <li>
                          <i className="fab fa-facebook"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fab fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="name">Tom</h3>
                  <h6 className="sub-head">CEO</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="//i.ibb.co/BnD5m0z/Happy-mature-teacher-and-female-students-reading-from-text-book-at-university-hallway.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="overlay-img">
                    <div className="social">
                      <ul>
                        <li>
                          <i className="fab fa-facebook"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fab fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="name">Leo</h3>
                  <h6 className="sub-head">CTO</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="container">
        <div className="row mb-5">
          <h1 className="text-center">OUR TESTIMONIALS</h1>
          <div className="col-lg-6">
            <div className="row  align-items-center shadow p-2 m-4">
              <div className="col-5">
                <img
                  src="https://i.ibb.co/frP5t0z/Middle-aged-man-portrait-at-sunset.jpg"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-7">
                <h4>Hafijur Rahman</h4>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row align-items-center shadow p-2 m-4">
              <div className="col-5">
                <img
                  src="https://i.ibb.co/n04tpSd/A-smiling-African-American-man-stands-in-front-of-a-blue-wall-wearing-nice-casual-clothing-Positive.jpg"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-7">
                <h4>Shafayet</h4>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
