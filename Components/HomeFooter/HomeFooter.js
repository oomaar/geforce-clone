import { FiMail } from "react-icons/fi";
import {
    Container,
    SubContainer,
    FooterCard,
    TitleWrapper,
    Title,
    LinksWrapper,
    FooterLink,
    ContactContainer,
    ContactSubContainer,
    IconWrapper,
    Text,
    Btn,
    SubText,
    Icon,
} from "./styledHomeFooter";

const HomeFooter = () => {
    return (
        <Container>
            <SubContainer>
                <FooterCard>
                    <TitleWrapper>
                        <Title>Products</Title>
                    </TitleWrapper>
                    <LinksWrapper>
                        <FooterLink>Graphics Cards</FooterLink>
                        <FooterLink>Laptops</FooterLink>
                        <FooterLink>G-SYNC Monitors</FooterLink>
                        <FooterLink>GeForce NOW Cloud Gaming</FooterLink>
                    </LinksWrapper>
                </FooterCard>

                <FooterCard>
                    <TitleWrapper>
                        <Title>Community & News</Title>
                    </TitleWrapper>
                    <LinksWrapper>
                        <FooterLink>Latest News</FooterLink>
                        <FooterLink>Tech Guides</FooterLink>
                        <FooterLink>Community Forums</FooterLink>
                        <FooterLink>#SHOTWITHGEFORCE</FooterLink>
                        <FooterLink>Contest Winners</FooterLink>
                        <FooterLink>Featured Games</FooterLink>
                    </LinksWrapper>
                </FooterCard>

                <FooterCard>
                    <TitleWrapper>
                        <Title>Support</Title>
                    </TitleWrapper>
                    <LinksWrapper>
                        <FooterLink>Drivers</FooterLink>
                        <FooterLink>Purchase Support</FooterLink>
                        <FooterLink>Technical Support</FooterLink>
                    </LinksWrapper>
                </FooterCard>
            </SubContainer>

            <ContactContainer>

                <ContactSubContainer>
                    <IconWrapper>
                        <FiMail />
                    </IconWrapper>
                    <Text>SIGN UP FOR GEFORCE NEWS</Text>
                    <Btn>Subscribe</Btn>
                </ContactSubContainer>

                <ContactSubContainer className="social__container">
                    <SubText>Follow GeForce</SubText>
                    <Icon src="/social/facebook.png" alt="socialIcon" />
                    <Icon src="/social/twitter.png" alt="socialIcon" />
                    <Icon src="/social/instagram.png" alt="socialIcon" />
                    <Icon src="/social/youtube.png" alt="socialIcon" />
                </ContactSubContainer>

            </ContactContainer>
        </Container>
    );
};

export default HomeFooter;
