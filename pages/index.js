import styled from 'styled-components'
import { NavContainer } from '../Containers';
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
      
      {/* <Title>Carousel</Title> */}
      {/* <Title>Single Jumbotron Section</Title> */}
      {/* <Title>Grid Services Section</Title> */}
      {/* <Title>Footer</Title> */}
    </div>
  );
};