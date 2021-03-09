import {
    Container,
    SubContainer,
    Logo,
    FooterLinks,
    FooterLink,
    Copy,
    LinkWrapper,
} from "./styledGlobalFooter";

const GlobalFooter = () => {
    return (
        <Container>
            <SubContainer>
                <Logo src="/nvidia-logo.png" />
                <FooterLinks>
                    <LinkWrapper>
                        <FooterLink>Privacy Policy</FooterLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterLink>Legal Info</FooterLink>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterLink>Contact Us</FooterLink>
                    </LinkWrapper>
                </FooterLinks>
                <Copy>Copyright © 2021</Copy>
            </SubContainer>
        </Container>
    );
};

export default GlobalFooter;
