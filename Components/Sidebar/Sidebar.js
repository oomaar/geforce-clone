import { useDispatch, useSelector } from "react-redux";
import { selectToggleShow, setToggleShow } from "../../Slices/sidebarSlice";
import {
    Container,
    Close,
    Icon,
    SideMenu,
    SideLink,
} from "./styledSidebar";

const sidebar = () => {
    const show = useSelector(selectToggleShow);
    const dispatch = useDispatch();

    const handleSidebarShow = () => dispatch(setToggleShow({ value: false }));

    return (
        <Container show={show}>
            <Icon onClick={handleSidebarShow}>
                <Close />
            </Icon>

                <SideMenu>
                    <SideLink>Products</SideLink>
                    <SideLink>Games & Tech</SideLink>
                    <SideLink>Geforce Experience</SideLink>
                    <SideLink>Drivers</SideLink>
                    <SideLink>News</SideLink>
                    <SideLink>Support</SideLink>
                    <SideLink>Shop</SideLink>
                </SideMenu>
        </Container>
    );
};

export default sidebar;
