import { useRef, useState, useEffect, Children } from "react";

import useInView from "../../hooks/useInView";

import styles from "./Slider.module.css";

const Slider = ({
  slidesPerView,
  spaceBetween,
  slidesPerGroup,
  loop,
  breakpoints,
  items,
  children,
  autoPlay = false,
  autoPlayInterval = 400,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(
    loop ? slidesPerGroup : 0
  );
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [sliderItemWidth, setSliderItemWidth] = useState(0);
  const sliderContainerRef = useRef(null);

  const { inView: lastSliderItemInView, ref: lastSliderItemRef } = useInView({
    root: sliderContainerRef.current,
    threshold: 0.95,
  });

  const { inView: firstSliderItemInView, ref: firstSliderItemRef } = useInView({
    root: sliderContainerRef.current,
    threshold: 1.0,
  });

  items = items || Children.toArray(children);

  useEffect(() => {
    if (firstSliderItemRef.current) {
      setSliderItemWidth(firstSliderItemRef.current.clientWidth);
    }
    setTimeout(() => {
      setTransitionEnabled(true);
    }, 100);
  }, [firstSliderItemRef]);

  useEffect(() => {
    let intervalID;
    if (loop && autoPlay) {
      intervalID = setInterval(() => {
        if (
          activeSlideIndex === slidesPerGroup ||
          activeSlideIndex === items.length
        ) {
          setTransitionEnabled(true);
        }
        setActiveSlideIndex((prevIndex) => prevIndex + slidesPerGroup);
      }, autoPlayInterval);
    }
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [
    loop,
    slidesPerGroup,
    activeSlideIndex,
    items.length,
    autoPlay,
    autoPlayInterval,
  ]);

  const sliderButtonHandler = (direction) => {
    if (
      activeSlideIndex === slidesPerGroup ||
      activeSlideIndex === items.length
    ) {
      setTransitionEnabled(true);
    }
    if (direction === "forward") {
      if (loop || (!loop && !lastSliderItemInView)) {
        setActiveSlideIndex((prevIndex) => prevIndex + slidesPerGroup);
      }
    } else if (direction === "backward") {
      if (loop || (!loop && !firstSliderItemInView)) {
        setActiveSlideIndex((prevIndex) => prevIndex - slidesPerGroup);
      }
    }
  };

  const handleTransitionEnd = () => {
    if (loop) {
      if (activeSlideIndex > items.length) {
        setTransitionEnabled(false);
        setActiveSlideIndex(slidesPerGroup);
      } else if (activeSlideIndex === 0) {
        setTransitionEnabled(false);
        setActiveSlideIndex(items.length);
      }
    }
  };

  const sliderItems = loop
    ? [
        ...items.slice(-slidesPerView),
        ...items,
        ...items.slice(0, slidesPerView),
      ]
    : items;

  const setSliderItemRef = (index, sliderItemsArray) => {
    if (loop && index === 0) {
      return firstSliderItemRef;
    }
    if (!loop) {
      if (index === 0) {
        return firstSliderItemRef;
      }
      if (index === sliderItemsArray.length - 1) {
        return lastSliderItemRef;
      }
    }
    return null;
  };

  return (
    <div className={styles.slider} ref={sliderContainerRef}>
      <div className={styles.slidesContainer}>
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: "flex",
            transition: !transitionEnabled ? "none" : "all 0.5s ease-in-out",
            transform: `translateX(${
              sliderItemWidth * activeSlideIndex * -1
            }px)`,
          }}
        >
          {sliderItems.map((item, index, array) => {
            return (
              <div
                key={index}
                ref={setSliderItemRef(index, array)}
                data-slide-index={
                  !loop
                    ? index
                    : index < slidesPerGroup
                    ? array.length - 2 * slidesPerGroup - slidesPerGroup + index
                    : index > array.length - slidesPerGroup - 1
                    ? index - items.length - slidesPerGroup
                    : index - slidesPerGroup
                }
              >
                <div
                  style={{
                    marginRight: !!Number(spaceBetween)
                      ? `${spaceBetween}px`
                      : "0px",
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={`${styles.slideButton} ${styles.slideButtonPrev}`}
        onClick={() => sliderButtonHandler("backward")}
      >
        <span
          className={`material-symbols-outlined ${styles.slideButtonIcon}`}
          style={{ letterSpacing: "4px" }}
        >
          arrow_back_ios_new
        </span>
      </button>
      <button
        className={`${styles.slideButton} ${styles.slideButtonNext}`}
        onClick={() => sliderButtonHandler("forward")}
      >
        <span className={`material-symbols-outlined ${styles.slideButtonIcon}`}>
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default Slider;
