import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const SubContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: clamp(1.092rem, 5vw, 2.5rem);
    font-family: 'Geforce', Helvetica, sans-serif;
    margin-bottom: 15px;
`;

export const SubTitle = styled.h3`
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    color: #fff;
    margin-bottom: 15px;
`;

export const Card = styled.div`
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
`;

export const CardImgWrap = styled.div`
    max-width: 600px;
    width: 100%;
`;

export const CardImage = styled.img`
    width: 100%;
    cursor: pointer;
`;

export const CardFeature = styled.div`
    max-width: 600px;
    width: 100%;
    height: 43%;
`;

export const CardTitle = styled.p`
    font-size: 26px;
    color: ${({theme}) => theme.colors.primaryText};
    font-family: 'Geforce', Helvetica, sans-serif;
    margin-bottom: 15px;
`;

export const CardSubTitle = styled.p`
    font-size: 16px;
    color: #fff;
`;

export const CardBtn = styled.button`
    cursor: pointer;
    background: ${({theme}) => theme.colors.primary};
    padding: 10px;
    transition: 0.5s ease;
    cursor: pointer;
    margin: 30px auto;
    border: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    width: 200px;

    &:hover {
        background: ${({theme}) => theme.colors.hover};
    }
`;