import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 100%;
    margin-left: auto;
    z-index: 0;
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
    /* border: 4px solid red; */
    /* display: none; */
`;