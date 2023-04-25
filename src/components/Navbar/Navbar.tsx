import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg={"white"} gap={".5rem"} height="44px" padding="6px 12px">
      <Flex align="center">
        <Image alt="logo" src="/images/redditFace.svg" height="30px" />
        <Image
          alt="reddit"
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
