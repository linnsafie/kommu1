import styled from 'styled-components/macro';

/**
 * Her er en enkel Styled Component som jeg ønsker å bruke mange steder.
 * Derfor eksporteres den herfra
 * Når vi bruker export const Navn så må den importeres med import {Navn} from 'filepath'
 */

export const Container = styled.section`
  background-color: #f2f7f2;
  width: 100%;
  display: inline-block;
  padding: 20%;
  margin: 0;
`;

export const StyledPara = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  line-height: 3;
  font-family: Lado;
`;
