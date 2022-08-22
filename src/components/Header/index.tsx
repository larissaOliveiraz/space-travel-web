import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoSvg from "../../assets/shared/logo.svg";
import { HeaderContainer, NavBox, Separator } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} />
      <Separator />
      <NavBox>
        <NavLink to="/">
          <span>00</span> HOME
        </NavLink>
        <NavLink to="/destinations">
          <span>01</span> DESTINATIONS
        </NavLink>
        <NavLink to="/crew">
          <span>02</span> CREW
        </NavLink>
        <NavLink to="/technology">
          <span>03</span> TECHNOLOGY
        </NavLink>
      </NavBox>
    </HeaderContainer>
  );
}
