import { HStack, Image } from "@chakra-ui/react";
import logoApp from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logoApp} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
