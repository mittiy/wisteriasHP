import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';
import { useRef } from 'react';

const MyCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
    withIndicators
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
    loop
    slideSize="50%"
    slideGap="xl"
    >
      <Carousel.Slide>
        <Image src="1.png" alt="Image 1"/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="2.png" alt="Image 2"/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="3.png" alt="Image 3"/>
      </Carousel.Slide> 
    </Carousel>
  );
}

export default MyCarousel;
