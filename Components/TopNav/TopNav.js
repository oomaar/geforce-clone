import { useEffect, useState } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import {
    Nav,
    Container,
    ImgWrap,
    IconsWrap,
    IconWrap,
} from "./styledTopNav";

const TopNav = () => {
    const [show, setShow] = useState(true);

    const transitionNavbar = () => {
        window.scrollY > 100 ? setShow(false) : setShow(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <Nav show={show}>
            <Container>
                <ImgWrap>
                    <img src="/nvidia-logo.png" alt="Nvidia-Logo" />
                </ImgWrap>
                <IconsWrap>
                    <IconWrap>
                        <BsSearch />
                    </IconWrap>
                    <IconWrap>
                        <RiShoppingCart2Line />
                    </IconWrap>
                    <IconWrap>
                        <CgProfile />
                    </IconWrap>
                    <IconWrap>
                        <BsFillGrid3X3GapFill />
                    </IconWrap>
                </IconsWrap>
            </Container>
        </Nav>
    );
};

export default TopNav;
