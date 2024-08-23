'use client';

import styles from './Schedule.module.css'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import scheduleData from '../../public/scheduleData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Day from '../Day/Day';

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('scheduleData', scheduleData);
  const handleCarouselChange = (index) => {
    setCurrentIndex(index);
  };
  const customPrevArrow = (clickHandler, hasPrev) => {
    return (
      <FontAwesomeIcon icon={faChevronLeft} onClick={hasPrev ? clickHandler : null} className={hasPrev ? 'arrowLeft' : 'arrowLeftDisabled'}/>
    );
  }
  const customNextArrow = (clickHandler, hasNext) => {
    return (
      <FontAwesomeIcon icon={faChevronRight} onClick={hasNext ? clickHandler : null} className={hasNext ? 'arrowRight' : 'arrowRightDisabled'}/>
    );
  }

  return (
    <div className={styles.scheduleWrapper}>
      Schedule Here

      <Carousel
      renderArrowPrev={customPrevArrow}
      renderArrowNext={customNextArrow}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      emulateTouch={true}
      dynamicHeight={false}
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
      selectedItem={currentIndex}
      onChange={handleCarouselChange}
    >
      {scheduleData?.map((day, index) => (
        <div key={index} className={styles.carouselSlide}>
          {index === currentIndex || index === (currentIndex + 1) || index === (currentIndex - 1) ? (
            <Day
              dayInfo={day}
            />
          ) : (
            <div className={styles.slide}>
              <p>Day Schedule Goes Here</p>
            </div>
          )}
        </div>
      ))}
    </Carousel>


    </div>
  )
}
