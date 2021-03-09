import servicesData from "../../Data/servicesData.json";
import {
    Container,
    SubContainer,
    Title,
    SubTitle,
    Card,
    CardImgWrap,
    CardImage,
    CardFeature,
    CardTitle,
    CardSubTitle,
    CardBtn,
} from "./styledServices";

const Services = () => {
    return (
        <Container>
            <Title>OPTIMISE YOUR PC GAMING EXPERIENCE</Title>
            <SubTitle>Download GeForce experience, browse the best PC games and access the latest GeForce drivers.</SubTitle>
            <SubContainer>
                {servicesData.map(card => (
                    <Card key={card.id}>
                        <CardImgWrap>
                            <CardImage src={card.imgURL} alt={card.imgAlt} />
                        </CardImgWrap>
                        <CardFeature>
                            <CardTitle>{card.title}</CardTitle>
                            <CardSubTitle>{card.subTitle}</CardSubTitle>
                        </CardFeature>
                        <CardBtn>{card.btnText}</CardBtn>
                    </Card>
                ))}
            </SubContainer>
        </Container>
    );
};

export default Services;
