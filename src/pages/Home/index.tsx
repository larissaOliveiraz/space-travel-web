import { NavLink } from "react-router-dom";

import { Header } from "../../components/Header";
import backgroundHome from "../../assets/home/background-home-desktop.jpg";

import {
  HomeContainer,
  Content,
  TextContainer,
  UpperTitle,
  Title,
  SubTitle,
  ExploreButton,
} from "./styles";

export function Home() {
  return (
    <HomeContainer style={{ backgroundImage: `url(${backgroundHome})` }}>
      <Header />

      <Content>
        <TextContainer>
          <UpperTitle>SO, YOU WANT TO TRAVEL TO</UpperTitle>
          <Title>SPACE</Title>
          <SubTitle>
            Let’s face it; if you want to go to space, you might as well{"\n"}
            genuinely go to outer space and not hover kind of on the{"\n"}
            edge of it. Well sit back, and relax because we’ll give you a{"\n"}
            truly out of this world experience!
          </SubTitle>
        </TextContainer>

        <NavLink to="/destinations">
          <ExploreButton>EXPLORE</ExploreButton>
        </NavLink>
      </Content>
    </HomeContainer>
  );
}
