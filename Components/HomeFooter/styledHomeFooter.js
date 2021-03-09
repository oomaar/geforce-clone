import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    max-width: 400px;
    width: 90%;
`;

export const TitleWrapper = styled.div`
    border-bottom: 1px solid #fff;
`;

export const Title = styled.h3`
    margin-bottom: 10px;
    color: #fff;
`;

export const LinksWrapper = styled.div``;

export const FooterLink = styled.p`
    color: ${({theme}) => theme.colors.primaryText};
    margin: 20px 0;
    cursor: pointer;
`;

export const ContactContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    position: relative;
    margin: 30px auto 0;
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContactSubContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: 20px 0;

    &.social__container {
        justify-content: flex-end;
        flex-direction: row;

        @media screen and (max-width: 1000px) {
            width: 100%;
            justify-content: center;
        }

        @media screen and (max-width: 350px) {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        text-align: center;
        width: 100%;
    }
`;

export const IconWrapper = styled.div`
    color: ${({theme}) => theme.colors.primaryText};
    font-size: 44px;
    margin: 0 20px;
`;

export const Text = styled.p`
    font-size: 24px;
    color: #fff;
`;

export const Btn = styled.button`
    cursor: pointer;
    background: ${({theme}) => theme.colors.primary};
    padding: 15px;
    transition: 0.5s ease;
    cursor: pointer;
    margin: 30px auto;
    border: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background: ${({theme}) => theme.colors.hover};
    }
`;

export const SubText = styled.p`
    margin-right: 50px;

    @media screen and (max-width: 1000px) {
        margin-right: 20px;
    }
`;

export const Icon = styled.img`
    width: 30px;
    margin: 0 10px;
    cursor: pointer;

    @media screen and (max-width: 350px) {
        margin: 10px 0;
    }
`;