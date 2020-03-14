import styled from 'styled-components';
import defaultImg from '../images/women/elegant-girls.jpg';


const StyledHero = styled.header`
min-height: 60vh;
background: url(${defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;
