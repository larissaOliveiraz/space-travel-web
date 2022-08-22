import {
  DestinationContainer,
  Content,
  Info,
  TextInfo,
  Places,
  PlaceButton,
  PlaceTitle,
  PlaceDescription,
  PlaceSeparator,
  AdContainer,
  AditionalInfo,
  AdTitle,
  AdDesc,
} from "./styles";

import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface DestinationProps {
  name: string;
  images: {
    png: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export function Destination() {
  const [place, setPlace] = useState<DestinationProps>({} as DestinationProps);
  const [isActive, setIsActive] = useState<
    "moon" | "mars" | "europa" | "titan"
  >("moon");

  async function handleMoon() {
    const { data } = await api.get("/destinations");
    setPlace(data[0]);
    setIsActive("moon");
  }

  async function handleMars() {
    const { data } = await api.get("/destinations");
    setPlace(data[1]);
    setIsActive("mars");
  }

  async function handleEuropa() {
    const { data } = await api.get("/destinations");
    setPlace(data[2]);
    setIsActive("europa");
  }

  async function handleTitan() {
    const { data } = await api.get("/destinations");
    setPlace(data[3]);
    setIsActive("titan");
  }

  useEffect(() => {
    async function loadFirst() {
      const { data } = await api.get("/destinations");
      setPlace(data[0]);
    }
    loadFirst();
  }, []);

  return (
    <DestinationContainer
      style={{ backgroundImage: `url(${backgroundDestination})` }}
    >
      <Header />
      <Content>
        <p>
          <span>01</span> PICK YOUR DESTINATION
        </p>

        <Info>
          {isActive === "moon" && <img src={moon} />}
          {isActive === "mars" && <img src={mars} />}
          {isActive === "europa" && <img src={europa} />}
          {isActive === "titan" && <img src={titan} />}
          <TextInfo>
            <Places>
              <PlaceButton active={isActive === "moon"} onClick={handleMoon}>
                MOON
              </PlaceButton>
              <PlaceButton active={isActive === "mars"} onClick={handleMars}>
                MARS
              </PlaceButton>
              <PlaceButton
                active={isActive === "europa"}
                onClick={handleEuropa}
              >
                EUROPA
              </PlaceButton>
              <PlaceButton active={isActive === "titan"} onClick={handleTitan}>
                TITAN
              </PlaceButton>
            </Places>
            <PlaceTitle>{place.name}</PlaceTitle>
            <PlaceDescription>{place.description}</PlaceDescription>
            <PlaceSeparator></PlaceSeparator>
            <AdContainer>
              <AditionalInfo>
                <AdTitle>AVG. DISTANCE</AdTitle>
                <AdDesc>{place.distance}</AdDesc>
              </AditionalInfo>
              <AditionalInfo>
                <AdTitle>ETS. TRAVEL TIME</AdTitle>
                <AdDesc>{place.travel}</AdDesc>
              </AditionalInfo>
            </AdContainer>
          </TextInfo>
        </Info>
      </Content>
    </DestinationContainer>
  );
}
