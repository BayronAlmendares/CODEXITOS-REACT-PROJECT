import { HStack, Image } from "@chakra-ui/react";
import logoApp from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logoApp} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
