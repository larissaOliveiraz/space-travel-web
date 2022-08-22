import styled from "styled-components";

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.5rem;

  img {
    margin-left: 3.5rem;
  }
`;

export const NavBox = styled.nav`
  width: 55%;
  height: 6rem;
  background-color: rgb(255, 255, 255, 0.04);
  backdrop-filter: blur(5rem);

  display: flex;
  align-items: center;
  padding-left: 7.5rem;
  letter-spacing: 2.7px;

  a {
    height: 6rem;
    display: flex;
    align-items: center;

    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;

    text-decoration: none;
    opacity: 1;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1rem;
    margin-right: 3rem;

    transition: border-bottom 0.15s;

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    }

    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    }

    span {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

export const Separator = styled.div`
  width: 32rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;
  opacity: 0.7;

  margin-right: -12rem;
`;
