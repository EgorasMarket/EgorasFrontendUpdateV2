import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Authenticate } from '../../auth/Authenticate';
// import banner1 from '../../../img/banner1.jpg';

const items = [
  {
    src: '/banner4.jpg',
    altText: '',
    caption: ''
  },
  {
    src: '/banner5.jpg',
    altText: '',
    caption: ''
  },
  // {
  //   src: '/2e.jpg',
  //   altText: '',
  //   caption: ''
  // }
];

const Slider = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img className='img-fluid' src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
        <div
          className='banner-img'
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className='position-relative'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
      <div className='position-absolute signup-div'>
        <div className='signup-inner'>
          <div className='signup-title'>The Microfinance Protocol for Uncollateralized Lending
</div>
          <div className='mt-2'>
          Egoras connects you to impact-driven opportunities with good returns.

          </div>
          <div className='mt-3'>
            <div className="row">
              <div className="col-md-6">
              <a
               style={{ marginRight: '10px' }}
              className='  btn btn-success'
              target='_blank'
              href='https://drive.google.com/file/d/1tlpfUjRtuH6Lp2ybbYFuFdGTjdjbE7n3/view'
            >
              <FontAwesomeIcon icon={faFileAlt} /> White paper
            </a>
              </div>
              <div className="col-md-6">
              <Authenticate isHome="true" />
              </div>
            </div>
          
        
          
          
            {/* <a className='btn-black custom-btn'>
              Connect Wallet
            </a> */}

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
