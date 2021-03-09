import React from 'react';
import {
    Container,
    Span,
} from "./styledDots";

const Dots = ({ activeIndex, onclick, imgsData }) => {
    return (
        <Container>
                {imgsData.map((slide) => (
                    <Span
                        key={slide.id}
                        className={`${activeIndex === slide.id ? 'active-dot' : ''}`}
                        onClick={event => onclick(event.target.value = slide.id)}
                    >
                    </Span>
                ))}
        </Container>
    );
};

export default Dots;
