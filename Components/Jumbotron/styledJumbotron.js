import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    margin: 100px auto;
    padding: 20px;
`;

export const SubContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

export const Feature = styled.div`
    max-width: 600px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: clamp(1.092rem, 5vw, 2.5rem);
    font-family: 'Geforce', Helvetica, sans-serif;
    color: ${({theme}) => theme.colors.primaryText};
    margin-bottom: 15px;
`;

export const SubTitle = styled.h3`
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    color: white;
`;

export const Button = styled.button`
    cursor: pointer;
    background: ${({theme}) => theme.colors.primary};
    padding: 10px;
    transition: 0.5s ease;
    cursor: pointer;
    margin-top: 30px;
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

export const ImgWrap = styled.div`
    max-width: 700px;
`;

export const Image = styled.img`
    width: 100%;
`;