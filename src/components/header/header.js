import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/images/brand-trans.png";
import images from "../../assets/images";

const Header = () => {
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
    window.scroll({ top: 0, behavior: "smooth" });
    setBreadClicked(!breadClicked);
    setScrolled(true);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(true);
      setBreadClicked(false);
    });
    return () => {
      document.removeEventListener("scroll", () => {
        setScrolled(true);
      });
    };
  }, []);
  const navbarData = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: " Our Services",
      to: "/services",
    },
    {
      label: "Our Team",
      to: "/team",
    },
    // {
    //   label: "Contact Us",
    //   to: "/contact",
    // },
    {
      label: "apply",
      to: "/apply",
      button: true,
    },
    {
      label: "Portal Login",
      href: "http://study2020portal.com/login",
    },
  ];
 const handleMouseEnter = () => {
    setScrolled(false) 
  }
 const handleMouseExist = () => {
    setScrolled(true) 
    setBreadClicked(false)
  }

  return (
    <nav
      className={styles.nav}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExist}
    >
      <ul className={wrapperStyles}>
        {scrolled ? (
          <div className={styles.scrolledLogoWrapper}>
            <Link to="/">
              <img src={logo} alt="diamond logo" className={styles.logo} />
            </Link>
            <h6>study diamond</h6>
          </div>
        ) : (
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img src={images.common.brandTrans} alt="diamond logo" />
              <h2>study diamond</h2>
              <h5>
                educational <br /> consulting <br /> firm
              </h5>
            </Link>
          </div>
        )}
        <div className={styles.line} />
        <section className={midSecStyles}>
          {navbarData.map((item, index) => {
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
