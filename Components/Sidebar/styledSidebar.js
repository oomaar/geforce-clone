import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.aside`
    position: fixed;
    z-index: 900;
    width: 60%;
    height: 100%;
    background-color: #000;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({show}) => (show ? '100%' : '0%')};
    top: ${({show}) => (show ? '0' : '100%')};

    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const Close = styled(FaTimes)`
    color: ${({theme}) => theme.colors.primary};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
`;

export const SideMenu = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SideLink = styled.p`
    display: flex;
    font-size: 1.5rem;
    font-size: clamp(1rem, 5vw, 1.5rem);
    transition: 0.5s ease;
    color: #fff;
    cursor: pointer;
    padding: 0 10px;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;