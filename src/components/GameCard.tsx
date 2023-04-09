import React from "react";
import { gameArray } from "../customHooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getFastDownloadImageUrl from "../servicesApi/image-url";

interface Props {
  game: gameArray;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getFastDownloadImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((pla) => pla.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
