import styled from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';

export const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* background: #efefef; */}
  background: url(${backgroundImage});
  background-size: cover;
`;
