import React from "react";
import Typist from "react-typist";
import CustomButton from "../components/button/CustomButton";
import styles from "./style/services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleArrows,
  faFileAlt,
  faPassport,
  faLaptopHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className={styles.mainDiv}>
      <Typist cursor={{ show: false }}>
        <h1>Our Services</h1>
      </Typist>
      <div className={styles.sectionWrapper}>
        <div className={styles.header}>
          <h5>Our service team is available 24/7 to render services to you</h5>
        </div>
        <section className={styles.sections}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faPeopleArrows}
            size="4x"
          />
          <div>
            <h5>COUNSELING & ASSESSMENT</h5>
            <p>
              The first step of our service is face-to-face counseling and
              pre-assessment of students' academic ability, previous work/life
              experience and financial capability to find the most appropriate
              university/course.
            </p>
          </div>
        </section>
        <section className={styles.sections}>
          <FontAwesomeIcon className={styles.icon} icon={faWpforms} size="5x" />
          <div>
            <h5>ADMISSION</h5>
            <p>
              We offer comprehensive assistance with all application and
              admissions processes, from guidance on completing forms and
              preparing supporting documents to what happens at every stage of
              the process. We provide students and families with professional
              and impartial information on financial planning, tuition fees,
              payment timeline, living expenses, financial aids and scholarships
              if available.
            </p>
          </div>
        </section>
        <section className={styles.sections}>
          <FontAwesomeIcon className={styles.icon} icon={faFileAlt} size="5x" />
          <div>
            <h5>DOCUMENT PREPARATION</h5>
            <p>
              Our Immigration Partners' extensive knowledge of Canada visa
              systems enables us to confidently guide and prepare student's
              document for the purpose of visa submission. Our team help
              students to gather all the required information and documents as
              well as helping students to write Statement of Purpose and guide
              them in filling up all the necessary forms.
            </p>
          </div>
        </section>
        <section className={styles.sections}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faPassport}
            size="4x"
          />
          <div>
            <h5>VISA PROCESS</h5>
            <p>
              Our team and partners help students for visa process and
              submission, checking documents and answer the possible questions.
            </p>
          </div>
        </section>
        <section className={styles.sections}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLaptopHouse}
            size="3x"
          />
          <div>
            <h5>POST ARRIVAL SERVICES</h5>
            <p>
              Study Diamond help students for accommodation, university
              registration, changing university and all the services that
              students need after arrival.
            </p>
          </div>
        </section>
      </div>
      <CustomButton to="/apply" text="Apply Now" />
    </div>
  );
};

export default Services;
