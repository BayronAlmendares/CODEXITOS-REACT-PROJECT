import { HStack, Image } from "@chakra-ui/react";
import logoApp from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logoApp} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
