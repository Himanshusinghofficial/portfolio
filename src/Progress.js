import styled from 'styled-components';

const Progress = styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(35, 132, 235) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  8px;
  z-index:  3;

`;

export default Progress;