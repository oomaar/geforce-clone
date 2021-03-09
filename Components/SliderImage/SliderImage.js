import {
    Container,
    SubContainer,
    Slide,
    SlideImage,
    PSLayer1,
    Title,
    SubTitle,
    CarouselBtn,
    CarouselFeature,
} from "./styledSliderImage";

const SliderImage = ({ activeIndex, imgsData }) => {
    return (
        <Container>
            <PSLayer1 />
            <SubContainer>
                {imgsData.map(image => (
                    <Slide key={image.id} className={image.id === activeIndex ? "active" : "inactive"}>
                        <SlideImage src={image.url} alt={image.alt} />
                        <CarouselFeature>
                            <Title loon={image.titleColor}>{image.title}</Title>
                            <SubTitle loon={image.subTitleColor}>{image.subTitle}</SubTitle>
                            <CarouselBtn>{image.buttonText}</CarouselBtn>
                        </CarouselFeature>
                    </Slide>
                ))}
            </SubContainer>
        </Container>
    );
};

export default SliderImage;
