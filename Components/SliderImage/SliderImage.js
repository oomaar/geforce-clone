import {
    Container,
    SubContainer,
    Slide,
    SlideImage,
    PSLayer1,
} from "./styledSliderImage";

const SliderImage = ({ activeIndex, imgsData }) => {
    return (
        <Container>
            <PSLayer1 />
            <SubContainer>
                {imgsData.map(image => (
                    <Slide key={image.id} className={image.id === activeIndex ? "active" : "inactive"}>
                        <SlideImage src={image.url} alt={image.alt} />
                    </Slide>
                ))}
            </SubContainer>
        </Container>
    );
};

export default SliderImage;
