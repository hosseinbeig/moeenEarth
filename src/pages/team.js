import React from "react";
import images from "../Assets/images/index";
import styles from "./style/team.module.css";
import Typist from "react-typist";

const Team = () => {
  return (
    <div className={styles.mainDiv}>
      <Typist cursor={{ show: false }}>
        <h1>Our Team</h1>
      </Typist>
      <div className={styles.subTitle}>
        <h5>
          FIND YOUR FUTURE EDUCATIONAL DESTINATION WITH THE HELP OF OUR TEAM
        </h5>
        <h6>
          We have a team of dedicated staff willing to assist in every deserved
          way
        </h6>
      </div>
      <div className={styles.sectionWrapper}>
        <section className={styles.section}>
          <img
            src={images.common.david}
            alt="Moein"
            className={styles.profileImage}
          />

          <div className={styles.profileText}>
            <h5>Moein Teymoori</h5>
            <h6>CEO Green Earth Ltd.</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            id={styles.laleh}
            src={images.common.laleh}
            alt="Hossein"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>Hossein Beigzadeh</h5>
            <h6>Co-founder Green Earth Ltd.</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.samad}
            alt="SAMAD"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>DR. SAMAD DOOSTDAR</h5>
            <h6>Founder & CEO (Study2020)</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.mohamadi}
            alt="mohamadi"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>M.A. MOHAMMADI</h5>
            <h6>Director of Business Development</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.hamideh}
            alt="hamideh"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>DR. HAMIDEH POURTAHERIAN</h5>
            <h6>Co-founder and General Manager (Study2020)</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.miwa}
            alt="miwa"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>MIWA KARAKI</h5>
            <h6>Regulated Canadian Immigration Consultant</h6>
            <small>RCIC R530543</small>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.barrister}
            alt="Barrister"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>Barrister Susan Okorie</h5>
            <h6>Legal Representative Nigeria</h6>
          </div>
        </section>

        <section className={styles.section}>
          <img
            src={images.common.taraneh}
            alt="Taraneh"
            className={styles.profileImage}
            id={styles.profileImageTaraneh}
          />
          <div className={styles.profileText}>
            <h5>Taraneh Mousavi</h5>
            <h6>
              Head of Admission <br /> Educational Counsellor
            </h6>
          </div>
        </section>

        <section className={styles.section}>
          <img
            src={images.common.aniedi}
            alt="Taraneh"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>Aniedi Attah</h5>
            <h6>
              Marketing Manager <br />
            </h6>
          </div>
        </section>

        <section className={styles.section}>
          <img
            src={images.common.ajai}
            alt="ajai"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>BISI TAIWO AJAYI</h5>
            <h6>Educational Counsellor</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.esther}
            alt="esther"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>ADEBAYO AYOYIMIKA ESTHER</h5>
            <h6>
              Educational Counsellor <br /> Nigeria Office
            </h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.pourya}
            alt="POURYA"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>POURYA RAD</h5>
            <h6>IT & Web Developer</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.reza}
            alt="REZA"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>REZA MASINAEI</h5>
            <h6>Head of Visa Department</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.elham}
            alt="ELHAM SALARI"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>ELHAM SALARI</h5>
            <h6>Accountant</h6>
          </div>
        </section>

        <section className={styles.section}>
          <img
            src={images.common.golnaz}
            alt="golnaz"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>GOLNAZ ZARINOZV</h5>
            <h6>South East Asia Regional Manager</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.mona}
            alt="mona"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>MONA KIA</h5>
            <h6>Director of Admissions</h6>
          </div>
        </section>
        <section className={styles.section}>
          <img
            src={images.common.negar}
            alt="negar"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <h5>NEGAR SHAKERNIA</h5>
            <h6>Digital Marketing Lead</h6>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
