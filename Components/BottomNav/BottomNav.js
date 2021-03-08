import { useEffect, useState } from "react";
import {
    Nav,
    Container,
    Logo,
    LinksWrap,
    LinkWrap,
    NavLink,
    DropDown,
    DropLinksWrap,
    DropDownCehvron,
} from "./styledBottomNav";

const BottomNav = () => {
    const [top, setTop] = useState(false);

    const transitionNavbar = () => {
        window.scrollY > 100 ? setTop(true) : setTop(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <Nav top={top}>
            <Container>
                    <Logo>Geforce</Logo>

                <LinksWrap>

                    <LinkWrap className="productLink">
                        <NavLink>
                            Products
                            <img src="/icons/chevron.png" alt="down" />
                        </NavLink>
                        <DropDown>
                            <DropDownCehvron src="/icons/chevron.png" alt="up" />
                            <DropLinksWrap>
                                <NavLink className="bottomNav__DropLink graphicsCards">
                                    Graphics Cards
                                    <img src="/icons/chevron.png" alt="right" />
                                </NavLink>
                                <NavLink className="bottomNav__DropLink">Laptops</NavLink>
                            </DropLinksWrap>
                        </DropDown>
                    </LinkWrap>

                    <LinkWrap className="techLink">
                        <NavLink>
                            Games & Tech
                            <img src="/icons/chevron.png" alt="down" />
                        </NavLink>
                        <DropDown className="tech__dropDown">
                            <DropDownCehvron src="/icons/chevron.png" alt="up" />
                            <DropLinksWrap>
                                <NavLink className="bottomNav__DropLink">Rtx Games</NavLink>
                                <NavLink className="bottomNav__DropLink">DLSS</NavLink>
                                <NavLink className="bottomNav__DropLink">Esports</NavLink>
                                <NavLink className="bottomNav__DropLink">Broadcasting</NavLink>
                                <NavLink className="bottomNav__DropLink">Studio</NavLink>
                                <NavLink className="bottomNav__DropLink">8k Hdr</NavLink>
                                <NavLink className="bottomNav__DropLink">DirectX 12</NavLink>
                                <NavLink className="bottomNav__DropLink">VR</NavLink>
                                <NavLink className="bottomNav__DropLink">G-Sync</NavLink>
                            </DropLinksWrap>
                        </DropDown>
                    </LinkWrap>

                    <LinkWrap>
                        <NavLink> Geforce Experience</NavLink>
                    </LinkWrap>
                    <LinkWrap>
                        <NavLink>Drivers</NavLink>
                    </LinkWrap>
                    <LinkWrap>
                        <NavLink>News</NavLink>
                    </LinkWrap>
                    <LinkWrap>
                        <NavLink>Support</NavLink>
                    </LinkWrap>
                    <LinkWrap>
                        <NavLink>Shop</NavLink>
                    </LinkWrap>
                </LinksWrap>
            </Container>
        </Nav>
    );
};

export default BottomNav;
