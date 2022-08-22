import styled from "styled-components";

import backgroundHome from "../../assets/home/background-home-desktop.jpg";

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 10%;

  a {
    text-decoration: none;
  }
`;

export const TextContainer = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UpperTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 9.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};

  text-align: center;
  line-height: 2rem;
`;

export const ExploreButton = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  border-radius: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};

  transition: filter 0.15s;

  &:hover {
    filter: brightness(0.85);
  }
`;
