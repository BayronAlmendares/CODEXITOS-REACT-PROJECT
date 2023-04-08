import { HStack, Image, Text } from "@chakra-ui/react";
import logoApp from "../assets/logo.webp";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logoApp} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
