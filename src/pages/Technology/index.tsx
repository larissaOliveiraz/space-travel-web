import { Header } from "../../components/Header";
import {
  TechnologyContainer,
  Content,
  Info,
  Indexes,
  Index,
  TextInfo,
  UpperText,
  Title,
  Desc,
} from "./styles";

import backgroundTechnology from "../../assets/technology/background-technology-desktop.jpg";
import space from "../../assets/technology/image-space-capsule-portrait.jpg";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface TechProps {
  name: string;
  images: {
    portrait: string;
  };
  description: string;
}

export function Technology() {
  const [tech, setTech] = useState<TechProps>({} as TechProps);
  const [isActive, setIsActive] = useState<"launch" | "spaceport" | "space">(
    "launch"
  );

  async function handleLaunch() {
    const { data } = await api.get("/technology");
    setTech(data[0]);
    setIsActive("launch");
  }

  async function handleSpaceport() {
    const { data } = await api.get("/technology");
    setTech(data[1]);
    setIsActive("spaceport");
  }

  async function handleSpaceCapsule() {
    const { data } = await api.get("/technology");
    setTech(data[2]);
    setIsActive("space");
  }

  useEffect(() => {
    async function loadFirst() {
      const { data } = await api.get("/technology");
      setTech(data[0]);
    }
    loadFirst();
  }, []);

  return (
    <TechnologyContainer
      style={{ backgroundImage: `url(${backgroundTechnology})` }}
    >
      <Header />
      <Content>
        <p>
          <span>03</span> SPACE LAUNCH 101
        </p>
        <Info>
          <Indexes>
            <Index onClick={handleLaunch} active={isActive === "launch"}>
              <span>1</span>
            </Index>
            <Index onClick={handleSpaceport} active={isActive === "spaceport"}>
              <span>2</span>
            </Index>
            <Index onClick={handleSpaceCapsule} active={isActive === "space"}>
              <span>3</span>
            </Index>
          </Indexes>
          <TextInfo>
            <UpperText>THE TERMINOLOGY…</UpperText>
            <Title>{tech.name}</Title>
            <Desc>{tech.description}</Desc>
          </TextInfo>
          {isActive === "launch" && <img src={launch} alt="" />}
          {isActive === "space" && <img src={space} alt="" />}
          {isActive === "spaceport" && <img src={spaceport} alt="" />}
        </Info>
      </Content>
    </TechnologyContainer>
  );
}
