import styled, { css } from "styled-components";

interface TechProps {
  active: boolean;
}

export const TechnologyContainer = styled.div`
  height: 100vh;
  background-size: cover;
`;

export const Content = styled.div`
  margin-left: 15rem;
  margin-top: 5vh;

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.25rem;

    span {
      opacity: 0.25;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Indexes = styled.div``;

export const Index = styled.button<TechProps>`
  width: 5rem;
  height: 5rem;

  border: 1px solid #4a4a4a;
  border-radius: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5rem;
  margin-bottom: 2rem;

  cursor: pointer;

  ${({ theme, active }) =>
    active
      ? css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        `
      : css`
          background-color: transparent;
          color: ${({ theme }) => theme.colors.white};
        `}

  span {
    font-family: ${({ theme }) => theme.fonts.title};

    font-size: 2rem;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const TextInfo = styled.div`
  margin-right: 10rem;
`;

export const UpperText = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;

  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.25rem;

  margin-bottom: 1.25rem;
  text-transform: uppercase;
`;

export const Desc = styled.span`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.25rem;

  font-weight: 400;
  line-height: 32px;
`;
