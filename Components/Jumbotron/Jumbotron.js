import {
    Container,
    Feature,
    Title,
    SubTitle,
    Button,
    ImgWrap,
    Image,
    SubContainer,
} from "./styledJumbotron";

const Jumbotron = () => {
    return (
        <Container>
            <SubContainer>
                <Feature>
                    <Title>SHOP GEFORCE</Title>
                    <SubTitle>Find retailers in your region selling NVIDIA GeForce products.</SubTitle>
                    <Button>Where To Buy</Button>
                </Feature>
                <ImgWrap>
                    <Image src="/home/jumbotron.jpg" alt="jumbotron" />
                </ImgWrap>
            </SubContainer>
        </Container>
    );
};

export default Jumbotron;
