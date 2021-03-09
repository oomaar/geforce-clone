import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    transition: 0.5s ease;
    height: 35px;
    padding: 10px 10px 0;
    margin: ${({show}) => show ? '0px' : '-100px 0 0'};
    z-index: 101;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const ImgWrap = styled.div`
    flex: 0.5;
    justify-content: flex-start;

    img {
        width: clamp(100px, 20vw, 150px);
        cursor: pointer;
    }
`;

export const IconsWrap = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    padding: 0 5px;
`;

export const IconWrap = styled.div`
    margin: 0 10px;
    color: #808080;
    cursor: pointer;
    font-size: clamp(16px, 5vw, 20px);
    
    &:hover {
        color: #000;
    }
`;
