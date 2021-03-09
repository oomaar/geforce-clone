import styled from 'styled-components'
import { GlobalFooter, Jumbotron, Services, Sidebar } from '../Components';
import { NavContainer, CarouselContainer } from '../Containers';
import HeadTag from '../HeadTag';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div>
      <HeadTag title="GeForce Graphics Cards" />
      
      <NavContainer />
      <Sidebar />
      <CarouselContainer />
      <Jumbotron />
      <Services />
      {/* <Title>Footer</Title> */}
      <GlobalFooter />
    </div>
  );
};