import styled from "styled-components";

interface IndexProps {
  active: boolean;
}

export const CrewContainer = styled.div`
  height: 100vh;
  background-size: cover;
`;

export const Content = styled.div`
  width: 1100px;

  margin-left: 15rem;
  margin-top: 5vh;

  display: flex;
  justify-content: space-between;

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.25rem;
    margin-bottom: 8.5rem;

    span {
      opacity: 0.25;
    }
  }

  img {
    width: 35rem;
    height: 35rem;
  }
`;

export const Info = styled.div``;

export const TextInfo = styled.div``;

export const Role = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.75rem;

  text-transform: uppercase;
`;

export const CrewName = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.5rem;

  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1.75rem;
`;

export const CrewDesc = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.25rem;

  line-height: 32px;
`;

export const Indexes = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Index = styled.button<IndexProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
  border: 0;

  margin-right: 1rem;

  &:hover {
    opacity: 0.5;
  }

  opacity: ${({ active }) => active && 1};
`;
