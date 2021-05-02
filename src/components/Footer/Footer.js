import React from 'react';
import BannerSlider from '../../Components/bannerSlider/BannerSlider.js';
import images from '../../Assets/images';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import IranFlag from '../ui/flags.js';
const todayDate = new Date().getFullYear();
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
                <IranFlag />
                IRAN HEAD OFFICE:
                <br />
                #1005, 409 Granville St.
                <br />
                Vancouver, BC, V6C 1T2
                <br />
                PHONE: +17788729855
                <br />
                EMAIL: Africa@study2020.ca
              </div>

              <div className={styles.socialWrapper}>
                <h3>find us here</h3>
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
            </address>
          </section>

          <section className={styles.rightSection}>
            <small>
              <a
                href="https://www.freepik.com/vectors/tree"
                target="_blank"
                rel="noreferrer noopener"
              >
                Tree vector created by pch.vector - www.freepik.com
              </a>
            </small>
            <small>
              <a
                href="https://www.freepik.com/vectors/frame"
                target="_blank"
                rel="noreferrer noopener"
              >
                Frame vector created by brgfx - www.freepik.com
              </a>
            </small>
            <small>
              <a
                href="https://www.freepik.com/vectors/business"
                target="_blank"
                rel="noreferrer noopener"
              >
                Business vector created by stories - www.freepik.com
              </a>
            </small>
            <small>
              Image by
              <a
                href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=38754"
                target="_blank"
                rel="noreferrer noopener"
              >
                Clker-Free-Vector-Images
              </a>
              from{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=38754"
              >
                Pixabay
              </a>
            </small>
          </section>
        </div>
        <footer className={styles.footer}>
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            size="3x"
            className={styles.chevron}
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
            title="back to top"
          />
          <p>© {todayDate} GreenEarth. All Right Reserved.</p>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
