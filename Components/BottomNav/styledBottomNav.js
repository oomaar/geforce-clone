import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    color: #fff;
    top: ${({top}) => top ? '0px' : '40px'};
    width: 100%;
    background-color: #000;
    transition: 0.5s ease;
    height: 40px;
    margin: 0;
`;

export const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        justify-content: space-between;
    }
`;

export const Logo = styled.h1`
    font-size: clamp(16px, 5vw, 35px);
    font-family: 'Geforce', Helvetica, sans-serif;
    cursor: pointer;
    text-transform: uppercase;
`;

export const LinksWrap = styled.div`
    margin-left: 10px;
    padding: 0 10px;
    display: flex;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const DropDown = styled.div`
    width: 190px;
    position: absolute;
    left: 0;
    margin-top: 15px;
    background: #fff;
    color: #000;
    height: 100px;
    transition: all 0.5s ease;
    padding: 10px;
    display: none;

    &.tech__dropDown {
        display: none;
    }
`;

export const LinkWrap = styled.div`
    position: relative;

    &.productLink {
        &:hover > ${DropDown} {
            display: block;
        }
    }

    &.techLink {
        &:hover > .tech__dropDown {
            display: block;
            height: 400px;
        }
    }
`;

export const DropDownCehvron = styled.img`
    position: absolute;
    width: 30px;
    top: -13px;
    right: 42%;
    transform: rotate(270deg);
    filter: invert(1);
`;

export const DropLink = styled.button`
    font-family: 'Geforce', Helvetica, sans-serif;
    outline: 0;
    border: 0;
    color: #808080;
    background: transparent;
    text-transform: uppercase;
    transition: color 0.5 ease;
    cursor: pointer;
    margin: 0 10px;
    font-size: 1rem;
`;

export const DropLinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
`;

export const NavLink = styled.button`
    font-family: 'Geforce', Helvetica, sans-serif;
    outline: 0;
    border: 0;
    color: #808080;
    background: transparent;
    text-transform: uppercase;
    transition: color 0.5 ease;
    cursor: pointer;
    margin: 0 10px;
    font-size: 1rem;

    img {
        transform: rotate(90deg);
        width: 10px;
        filter: invert(1);
        margin-left: 10px;
    }

    &.bottomNav__DropLink {
        margin: 10px 0;
        align-self: flex-start;
        
        &:hover {
            color: ${({theme}) => theme.colors.hover};
        }
    }

    &.graphicsCards {
        img {
            filter: invert(0);
            transform: none;
        }
    }

    &:hover {
        color: ${({theme}) => theme.colors.hover};
    }
`;

export const ResponsiveBtn = styled.div`
    font-size: 25px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
    }
`;