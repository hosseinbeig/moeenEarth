import React, { useState, useRef, useEffect } from "react";
import styles from "./BannerSlider.module.css";

const BannerSlider = (props) => {
  const [stateIndex, setStateIndex] = useState(0);
  const CarouselScrolled = useRef(null);
  const CarouselItem = useRef(null);
  const { banners, intervalMilSec } = props;

  useEffect(() => {
    if (
      CarouselScrolled &&
      CarouselScrolled.current &&
      CarouselItem &&
      CarouselItem.current
    ) {
      CarouselScrolled.current.scrollLeft =
        stateIndex * CarouselItem.current.clientWidth;
    }
  }, [stateIndex]);

  let bannerLength = banners.length;
  const oddNum = Math.floor(banners.length / 2 + 1);
  (() =>
    bannerLength % 2 === 0
      ? (bannerLength = bannerLength / 2)
      : (bannerLength = oddNum))();

  useEffect(() => {
    const interval = setInterval(() => {
      setStateIndex(stateIndex + 1);
      if (stateIndex + 1 >= bannerLength) {
        setStateIndex(0);
      }
    }, intervalMilSec);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.InnerDiv} ref={CarouselScrolled}>
      {banners &&
        banners.map((banner, index) => {
          return (
            <div
              onClick={() => banner.onBannerClick(banner, index)}
              key={index}
              ref={CarouselItem}
              className={styles.BannerItem}
              style={{ backgroundImage: `url(${banner.background})` }}
            >
              <div className={styles.Overlay}></div>
            </div>
          );
        })}
    </div>
  );
};

export default BannerSlider;
