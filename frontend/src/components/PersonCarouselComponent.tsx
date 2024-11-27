import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PersonCard from './PersonCard.tsx';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1799, min: 700 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const getResponsivenessGroup = (size: number) => {
  if (size < responsive.tablet.breakpoint.min) {
    return 0;
  } else if (size < responsive.desktop.breakpoint.min) {
    return 1;
  } else {
    return 2;
  }
};

type Props = {
  personSlides: {
    name: string;
    description: string;
    image: string;
  }[];
};

const CarouselComponent: React.FC<Props> = ({ personSlides }) => {
  const [_carouselWidth, setCarouselWidth] = useState<number>(0); // Store the width of the carousel
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel container
  const [_currentSlide, _setCurrentSlide] = useState<number>();
  const [currentFocus, setCurrentFocus] = useState<number>();
  const [carouselShift, setCarouselShift] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        const newGroup = getResponsivenessGroup(carouselRef.current.offsetWidth);
        if (carouselShift !== newGroup) {
          setCarouselShift(newGroup);
        }
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='parent bg-red bg-opacity-75' ref={carouselRef}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        dotListClass='custom-dot-list-style'
        //className="max-[400px]:justify-center"
        afterChange={(_previousSlide, { currentSlide }) => {
          //does not work properly

          setCurrentFocus(currentSlide - personSlides.length);
        }}
        autoPlaySpeed={7000}
      >
        {personSlides.map((slide, index) => (
          <div className='mb-10 mt-10 flex self-center min-[450px]:justify-center' key={index}>
            <PersonCard
              name={slide.name}
              focused={currentFocus === index}
              description={slide.description}
              // @ts-ignore
              image={slide.image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
