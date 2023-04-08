import React from "react";
import { gameArray } from "../customHooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: gameArray;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((pla) => pla.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
