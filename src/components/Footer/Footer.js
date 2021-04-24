import React from "react";
import BannerSlider from "../../components/bannerSlider/BannerSlider.js";
import images from "../../assets/images";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import CadFlag from "../ui/canadaFlag.js";
import NigFlag from "../ui/nigeriaFlag.js";
const bannersData = [
  {
    background: images.common.partner1,
  },
  {
    background: images.common.partner2,
  },
  {
    background: images.common.partner3,
  },
  {
    background: images.common.partner4,
  },
  {
    background: images.common.partner5,
  },
  {
    background: images.common.partner6,
  },
  {
    background: images.common.partner7,
  },
  {
    background: images.common.partner8,
  },
  {
    background: images.common.partner9,
  },
  {
    background: images.common.partner10,
  },
  {
    background: images.common.partner11,
  },
  {
    background: images.common.partner12,
  },
  {
    background: images.common.partner13,
  },
];
const Footer = () => {
  return (
    <>
      <div className={styles.partners}>
        <h1>Our Partner Institutions</h1>
        <h6>
          Study Diamond in partnership with Study2020 has over 300 partners
          around the world.
        </h6>
        <BannerSlider intervalMilSec={3000} banners={bannersData} />
      </div>
      <footer className={styles.main}>
        <div className={styles.rowWrapper}>
          <section>
            <address>
              <div className={styles.leftAddress}>
                <NigFlag />
                NIGERIAN ADDRESS: <br />
                Suit 516, 5th floor, The Kings Plaza,
                <br /> Ahmadu Bello Way,
                <br />
                Along Next Cash and Carry, <br /> Kado Abuja, Nigeria. <br />
                PHONE: +234 7042400457 +17786975316
                <br /> EMAIL: info@studydiamond.ca <br />
                WORKING HOURS: Monday - Friday: 9AM to 5PM <br />
                Saturday - Sunday: Best not to Ask
              </div>
              <div className={styles.rightAddress}>
                <CadFlag />
                CANADA HEAD OFFICE:
                <br />
                #1005, 409 Granville St.
                <br />
                Vancouver, BC, V6C 1T2
                <br />
                PHONE: +17788729855
                <br />
                EMAIL: Africa@study2020.ca
              </div>
            </address>
          </section>

          <section>
            <h3>find us here</h3>
            <div className={styles.socialWrapper}>
              <a
                href="https://www.facebook.com/studydiamond.consultancy"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socials}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <small>facebook</small>
              </a>
              <a
                href="https://www.instagram.com/studydiamondltd/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socials}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <small>instagram</small>
              </a>
              <a
                href="https://www.instagram.com/study2020.africa/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socials}
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                <small>instagram africa</small>
              </a>
              <a
                href="https://wa.me/17786975316"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socials}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <small>whatsapp</small>
              </a>
            </div>
            <small id={styles.vectors}>
              <a
                href="https://www.freepik.com/vectors/business"
                target="_blank"
                rel="noreferrer noopener"
              >
                Business vector created by stories - www.freepik.com
              </a>
            </small>
          </section>
        </div>
        <footer className={styles.footer}>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            size="3x"
            className={styles.chevron}
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
            title="back to top"
          />
          <p>
            © 2020 Study Diamond Educational Consultants. All Right Reserved.
          </p>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
