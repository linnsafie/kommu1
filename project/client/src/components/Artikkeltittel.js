import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  color: #210203;
  padding: 1rem 0 2rem;
`;

const Artikkeltittel = ({ title }) => <StyledH1>{title}</StyledH1>;

export default Artikkeltittel;
