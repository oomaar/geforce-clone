import {
    Container,
    Arrow
} from "./styledArrows";

const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <Container>
            <Arrow className="prev" onClick={prevSlide}>
                &#10094;
            </Arrow>
            <Arrow className="next" onClick={nextSlide}>
                &#10095;
            </Arrow>
        </Container>
    );
};

export default Arrows;
