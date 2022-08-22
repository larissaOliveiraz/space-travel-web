import { Header } from "../../components/Header";
import {
  CrewContainer,
  Content,
  Info,
  TextInfo,
  Role,
  CrewName,
  CrewDesc,
  Indexes,
  Index,
} from "./styles";

import backgroundCrew from "../../assets/crew/background-crew-desktop.jpg";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface CrewProps {
  name: string;
  images: {
    png: string;
  };
  role: string;
  bio: string;
}

export function Crew() {
  const [place, setPlace] = useState<CrewProps>({} as CrewProps);
  const [isActive, setIsActive] = useState<
    "douglas" | "mark" | "victor" | "anousheh"
  >("douglas");

  async function handleDouglas() {
    const { data } = await api.get("/crew");
    setPlace(data[0]);
    setIsActive("douglas");
  }

  async function handleMark() {
    const { data } = await api.get("/crew");
    setPlace(data[1]);
    setIsActive("mark");
  }

  async function handleVictor() {
    const { data } = await api.get("/crew");
    setPlace(data[2]);
    setIsActive("victor");
  }

  async function handleAnousheh() {
    const { data } = await api.get("/crew");
    setPlace(data[3]);
    setIsActive("anousheh");
  }

  useEffect(() => {
    async function loadFirst() {
      const { data } = await api.get("/crew");
      setPlace(data[0]);
    }
    loadFirst();
  }, []);

  return (
    <CrewContainer style={{ backgroundImage: `url(${backgroundCrew})` }}>
      <Header />
      <Content>
        <Info>
          <p>
            <span>02</span> MEET YOUR CREW
          </p>
          <TextInfo>
            <Indexes>
              <Index
                onClick={handleDouglas}
                active={isActive === "douglas"}
              ></Index>
              <Index onClick={handleMark} active={isActive === "mark"}></Index>
              <Index
                onClick={handleVictor}
                active={isActive === "victor"}
              ></Index>
              <Index
                onClick={handleAnousheh}
                active={isActive === "anousheh"}
              ></Index>
            </Indexes>
            <Role>{place.role}</Role>
            <CrewName>{place.name}</CrewName>
            <CrewDesc>{place.bio}</CrewDesc>
          </TextInfo>
        </Info>
        {isActive === "douglas" && <img src={douglas} />}
        {isActive === "mark" && <img src={mark} />}
        {isActive === "victor" && <img src={victor} />}
        {isActive === "anousheh" && <img src={ansari} />}
      </Content>
    </CrewContainer>
  );
}
