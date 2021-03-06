import styled from 'styled-components/macro';

/**
 * Her er en enkel Styled Component som jeg ønsker å bruke mange steder.
 * Derfor eksporteres den herfra
 * Når vi bruker export const Navn så må den importeres med import {Navn} from 'filepath'
 */

export const Header = styled.header`
  width: 100%;
  height: 620px;
  overflow: hidden;
  align-content: center;
`;

export const Container = styled.section`
  background-color: #f2f7f2;
  width: 100%;
  display: inline-block;
  padding: 5% 20%;
  margin: 0;
`;

export const StyledPara = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  line-height: 2.5;
  font-family: Lado, sans-serif;
`;

export const StyledArticleIntro = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 1rem;
  line-height: 2.5;
  font-weight: bold;
`;

export const StyledArticleImage = styled.img`
  width: 100%;
  margin: 0;
`;

export const StyledArticleImageH = styled.img`
  width: 100%;
  margin: 0;
  opacity: 0.7;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 15% 2% 15%;
`;
