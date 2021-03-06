import React from "react";
import styles from "./style/home.module.css";
import images from "../assets/images/index";
import { Carousel } from "react-bootstrap";
import Typist from "react-typist";
import CustomButton from "../components/button/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPeopleArrows,
  faPassport,
  faLaptopHouse,
  faUniversity,
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
const carouselData = [
  {
    src: images.common.carousel4,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel2,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel3,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel1,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel5,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel6,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
  {
    src: images.common.carousel7,
    header: "Do you want to study abroad?",
    label: "Get in touch now!",
    text: "Let us help to unlock your dream for a successful life",
  },
];

const Home = () => {
  return (
    <div>
      <div className={styles.carouselContainer}>
        <Carousel>
          {carouselData.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className={styles.carouselImage}
                  src={item.src}
                  alt="Loading..."
                />

                <Carousel.Caption className={styles.carouselCaption}>
                  <Typist>
                    <h1>{item.header}</h1>
                  </Typist>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                  <CustomButton to="/apply" text="Apply Now" />
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className={styles.carouselOverlay} />
      </div>
      <div className={styles.container}>
        <div className={styles.mainLabel}>
          <h4>
            Study Diamond Consultancy Ltd. is best known for international
            students services. We assist students to persue education abroad at
            all levels from primary school to Ph.D. and in different
            destinations such as Canada, Hungary, Malaysia, Spain, Germany,
            Switzerland, etc.
          </h4>
        </div>
        <section className={styles.sectionColumn}>
          <article className={styles.sectionArticle}>
            <div className={styles.separator} />
            <div className={styles.headerRow}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faPeopleArrows}
                size="5x"
              />
              <h1 className={styles.header}>CAREER COUNSELLING</h1>
            </div>
            <p>
              ''Quality excellence is the foundation of the management of our
              business and the keystone of our aim for customer satisfaction.
              Therefore, it is Corporate's Inc. policy to consistently provide
              services that meet customer requirements and exceed their
              expectations. Corporate's Inc. strives to actively pursue the
              improvement of quality services through programs that enable each
              of its personnel to perform tasks right; first time and every
              time.''
            </p>
          </article>
          <article className={styles.sectionArticle}>
            <div>
              <div className={styles.separator} />
              <div className={styles.headerRow}>
                <h1 className={styles.header}>UNIVERSITY PLACEMENT</h1>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faUniversity}
                  size="5x"
                />
              </div>
              <p>
                We offer comprehensive assistance with all application and
                admissions processes, from guidance on completing forms and
                preparing supporting documents to what happens at every stage of
                the process. We provide students and families with professional
                and impartial information on financial planning, tuition fees,
                payment timeline, living expenses, financial aids and
                scholarships if available. We are committed to making sure you
                feel supported at every step in the selection of your choice
                universities and colleges in all our partner schools
              </p>
            </div>
          </article>
        </section>

        <section
          className={styles.parallax}
          style={{ backgroundImage: `url(${images.common.carousel8})` }}
        >
          <div className={styles.parallaxOver} />

          <article className={styles.sectionArticle}>
            <div className={styles.separator} />
            <div className={styles.headerRow}>
              <FontAwesomeIcon
                icon={faPassport}
                size="5x"
                className={styles.lightIcon}
              />
              <h1 className={`${styles.header} ${styles.headerLight}`}>
                VISA GUIDANCE
              </h1>
            </div>
            <p className={styles.headerLight}>
              Our Immigration Partners' extensive knowledge of visa processing
              systems enables us to confidently guide and prepare student's
              document for the purpose of visa submission. Our team help
              students to gather all the required information and documents as
              well as helping students to write Statement of Purpose and guide
              them in filling up all the necessary forms. One of the most
              stressful chores while applying to study abroad in getting the
              correct information on visa requirements for students applications
              and submission.
            </p>
          </article>
          <article className={styles.sectionArticle}>
            <div className={styles.separator} />
            <div className={styles.headerRow}>
              <h1 className={`${styles.header} ${styles.headerLight}`}>
                PRE-ARRIVAL SERVICES
              </h1>
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                size="5x"
                className={styles.lightIcon}
              />
            </div>
            <p className={styles.headerLight}>
              We offer counseling sessions to prospective students so that they
              can make up their mind to choose the best course as per their
              aptitude and interest. We provide students and families with
              professional and impartial information on financial planning,
              hostel, accommodation, flight reservation/ticket payment and
              living expenses.
            </p>
          </article>
        </section>

        <section className={styles.sectionColumn}>
          <article className={styles.sectionArticle}>
            <div className={styles.separator} />
            <div className={styles.headerRow}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faPlaneArrival}
                size="5x"
              />
              <h1 className={styles.header}>POST-ARRIVAL SERVICES</h1>
            </div>
            <p>
              We help students for accommodation, university registration and
              all the services that students need after arriving to the
              destinations. We also help students in orientation and offer
              counseling sessions to students so that they can easily adapted to
              the new environment and choose the best options as per their
              aptitude and interest.
            </p>
          </article>
          <article className={styles.sectionArticle}>
            <div>
              <div className={styles.separator} />
              <div className={styles.headerRow}>
                <h1 className={styles.header}>FLIGHT & ACCOMMODATION</h1>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faLaptopHouse}
                  size="5x"
                />
              </div>
              <p>
                We offer counseling sessions to students so that they can make
                up their mind to choose the best course as per their aptitude
                and interest. We provide students and families with professional
                and impartial information on financial planning, hostel,
                accommodation, flight reservation/ticket payment and living
                expenses.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
