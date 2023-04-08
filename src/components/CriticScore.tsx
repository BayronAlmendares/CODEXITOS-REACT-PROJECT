import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={scoreColor}
      fontSize="15px"
      paddingX={2}
      borderRadius="6px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
