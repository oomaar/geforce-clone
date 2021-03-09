import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 150px;
    background: #fff;
`;

export const SubContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const Logo = styled.img`
    width: clamp(100px, 20vw, 150px);
    cursor: pointer;
`;

export const FooterLinks = styled.div`
    display: flex;
    margin: 20px 0 0 20px;
`;

export const LinkWrapper = styled.div`
    margin: 0 5px;
    border-right: 2px solid rgba(100, 100, 100, 0.4);
    padding: 0 5px;
`;

export const FooterLink = styled.p`
    color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
    font-size: clamp(14px, 0.5vw, 16px);
`;

export const Copy = styled.h6`
    color: rgba(100, 100, 100, 0.4);
    margin: 40px 0 0 30px;
`;
