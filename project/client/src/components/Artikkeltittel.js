import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  font-family: Lado, sans-serif;
  color: #fffbfe;
  margin: 2rem 0 1rem 0;
  padding: 3rem 1rem;
  z-index: 2;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
`;

const Artikkeltittel = ({ title }) => <StyledH1>{title}</StyledH1>;

export default Artikkeltittel;
