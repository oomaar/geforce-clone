import styled from "styled-components";
import { TopNav, BottomNav } from "../Components";

const NavContainer = () => {
    return (
        <StyledNavContainer>
            <TopNav />
            <BottomNav />
        </StyledNavContainer>
    );
};

export default NavContainer;

const StyledNavContainer = styled.div` z-index: 100; `;