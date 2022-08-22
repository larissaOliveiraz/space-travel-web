import styled, { css } from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const DestinationContainer = styled.div`
  height: 100vh;
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 1050px;

  margin-left: 15rem;
  margin-top: 5vh;

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.25rem;
    margin-bottom: 3rem;

    span {
      opacity: 0.25;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 25rem;
    height: 25rem;
    margin-top: 1rem;
  }
`;

export const TextInfo = styled.div`
  max-width: 30rem;
`;

export const Places = styled.div`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const PlaceButton = styled.button<ButtonProps>`
  height: 2.5rem;

  background-color: transparent;
  border: 0;

  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};

  margin-right: 2rem;

  ${({ theme, active }) =>
    active
      ? css`
          border-bottom: 3px solid ${theme.colors.white};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          border-bottom: 3px solid transparent;
          color: ${({ theme }) => theme.colors.secondary};
        `}

  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const PlaceTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 6.25rem;
  color: ${({ theme }) => theme.colors.white};

  text-transform: uppercase;
`;

export const PlaceDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
  line-height: 32px;
`;

export const PlaceSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.2;

  margin-top: 3.25rem;
`;

export const AdContainer = styled.div`
  display: flex;

  margin-top: 1.75rem;
`;

export const AditionalInfo = styled.div`
  margin-right: 5rem;
`;

export const AdTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 17px;
  letter-spacing: 0.25rem;

  margin-bottom: 0.75rem;
`;

export const AdDesc = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.white};

  text-transform: uppercase;
  line-height: 32px;
`;
