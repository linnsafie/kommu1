import styled from 'styled-components/macro';

/**
 * Her er en enkel Styled Component som jeg ønsker å bruke mange steder.
 * Derfor eksporteres den herfra
 * Når vi bruker export const Navn så må den importeres med import {Navn} from 'filepath'
 */

export const Container = styled.section`
  background-color: #80ab82;
  width: 60%;
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledPara = styled.p`
  font-size: 1.6rem;
  margin: 1rem 0;
  padding: 10rem;
  line-height: 2;
`;
