import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 100%;
    margin-left: auto;
    z-index: 0;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 70%;
    }
`;

export const SubContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const Slide = styled.div`
    display: none;
    z-index: 0;
    width: 100%;
    height: 100%;

    &.active {
        display: inline-block;
    }
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; 

    @media screen and (max-width: 1000px) {
        margin: 100px 0 0;
    }
`;

export const PSLayer1 = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: 
    linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(100, 100, 100, 0.22), rgba(0, 0, 0, 0.36));
    z-index: 10;
`;

export const CarouselFeature = styled.div`
    position: absolute;
    top: 35%;
    left: 18%;
    z-index: 200;

    @media screen and (max-width: 1000px) {
        top: 5%;
        left: 5%;
    }
`;

export const Title = styled.h1`
    color: ${({loon}) => loon};
    font-size: 60px;
    font-size: clamp(2.092rem, 5vw, 4rem);
    text-transform: uppercase;
    font-family: 'Geforce', Helvetica, sans-serif;
`;

export const SubTitle = styled.h1`
    color: ${({loon}) => loon};
    font-family: 'Geforce', Helvetica, sans-serif;
    max-width: 450px;
    text-transform: uppercase;
    font-size: clamp(1.125rem, 3vw, 1.625rem);
`;

export const CarouselBtn = styled.button`
    border: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    background: ${({theme}) => theme.colors.primary};
    padding: 10px;
    transition: 0.5s ease;
    cursor: pointer;
    margin-top: 30px;

    &:hover {
        background: ${({theme}) => theme.colors.hover};
    }

    @media screen and (max-width: 1000px) {
        margin-top: 10px;
    }
`;