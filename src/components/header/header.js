import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../Assets/images/brand-trans.png';
import images from '../../Assets/images';
import IranFlag, { EnglishFlag } from '../ui/flags';
import { LangContext } from '../../Context/MainContext';

const Header = () => {
  const [selectedLang, setSelectedLang] = useContext(LangContext);
  const [breadClicked, setBreadClicked] = useState(false);
  const [selected, setSelected] = useState(0);
  const [scrolled, setScrolled] = useState(true);

  const breadCrumbsHandler = () => {
    setBreadClicked(!breadClicked);
    setScrolled(breadClicked);
  };

  const breadStyles = !breadClicked
    ? styles.breadWrapper
    : styles.breadWrapperClicked;

  let midSecStyles = styles.middleSection;
  if (breadClicked) {
    midSecStyles = `${styles.middleSection} ${styles.middleSectionMini}`;
  }
  let wrapperStyles = styles.mainWrapper;
  if (scrolled && !breadClicked) {
    wrapperStyles = `${styles.mainWrapper} ${styles.mainWrapperScrolled}`;
  }
  const onLinkClick = (index) => {
    setSelected(index);
    window.scroll({ top: 0, behavior: 'smooth' });
    setBreadClicked(!breadClicked);
    setScrolled(true);
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrolled(true);
      setBreadClicked(false);
    });
    return () => {
      document.removeEventListener('scroll', () => {
        setScrolled(true);
      });
    };
  }, []);
  const navbarDataFar = [
    {
      label: 'صفحه اصلی',
      to: '/',
    },
    {
      label: 'خدمات ما',
      to: '/services',
    },
    {
      label: 'تیم ما',
      to: '/team',
    },
    {
      label: 'ارتباط با ما',
      to: '/contact',
    },
    {
      label: 'همراه شدن با ما',
      to: '/apply',
      button: true,
    },
  ];
  const navbarDataEn = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: ' Our Services',
      to: '/services',
    },
    {
      label: 'Our Team',
      to: '/team',
    },
    {
      label: 'Contact Us',
      to: '/contact',
    },
    {
      label: 'Contribute',
      to: '/apply',
      button: true,
    },
  ];
  const handleMouseEnter = () => {
    setScrolled(false);
  };
  const handleMouseExist = () => {
    setScrolled(true);
    setBreadClicked(false);
  };

  const farSelected =
    selectedLang === 'far' ? styles.flagDisabled : styles.flag;
  const enSelected = selectedLang === 'en' ? styles.flagDisabled : styles.flag;

  return (
    <nav
      className={styles.nav}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExist}
    >
      <ul className={wrapperStyles}>
        <a className={farSelected} onClick={() => setSelectedLang('far')}>
          <IranFlag />
        </a>
        <a className={enSelected} onClick={() => setSelectedLang('en')}>
          <EnglishFlag />
        </a>
        {scrolled ? (
          <div className={styles.scrolledLogoWrapper}>
            <Link to="/">
              <img src={logo} alt="Earth logo" className={styles.logo} />
            </Link>
            <h6>{selectedLang === 'far' ? 'زمین سبز' : 'Green Earth'}</h6>
          </div>
        ) : (
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img src={images.common.brandTrans} alt="Earth logo" />
              <h2>{selectedLang === 'far' ? 'زمین سبز' : 'Green Earth'}</h2>
            </Link>
          </div>
        )}
        <div className={styles.line} />
        <section className={midSecStyles}>
          {selectedLang === 'far'
            ? navbarDataFar.map((item, index) => {
                return (
                  <li
                    className={
                      item.button
                        ? selected === index
                          ? `${styles.links} ${styles.activeLinks} ${styles.button}`
                          : `${styles.links} ${styles.button}`
                        : selected === index
                        ? `${styles.links} ${styles.activeLinks}`
                        : styles.links
                    }
                    key={index}
                    onClick={() => onLinkClick(index)}
                  >
                    {item.href ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link to={item.to}>{item.label}</Link>
                    )}
                  </li>
                );
              })
            : navbarDataEn.map((item, index) => {
                return (
                  <li
                    className={
                      item.button
                        ? selected === index
                          ? `${styles.links} ${styles.activeLinks} ${styles.button}`
                          : `${styles.links} ${styles.button}`
                        : selected === index
                        ? `${styles.links} ${styles.activeLinks}`
                        : styles.links
                    }
                    key={index}
                    onClick={() => onLinkClick(index)}
                  >
                    {item.href ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link to={item.to}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
        </section>
        <li className={breadStyles} onClick={breadCrumbsHandler}>
          <div className={styles.bread} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
