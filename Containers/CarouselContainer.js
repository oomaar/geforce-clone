import { useState } from "react";
import styled from "styled-components";
import { Arrows, Dots, SliderImage } from "../Components"
import imgsData from "../Data/images.json";

const len = imgsData.length - 1;

const CarouselContainer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <StyledCarouselContainer>
            <SliderImage imgsData={imgsData} activeIndex={activeIndex} />
            <Dots imgsData={imgsData} activeIndex={activeIndex} onclick={active => setActiveIndex(active)} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
        </StyledCarouselContainer>
    );
};

export default CarouselContainer;

const StyledCarouselContainer = styled.div` 
    position: relative;
    top: 100px;
    max-width: 100%;
    margin-bottom: 20px;
    padding: 0 10px;
    height: 60vh;

    @media screen and (max-width: 1000px) {
        height: 50vh;
    }
`;
