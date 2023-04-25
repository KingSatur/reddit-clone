/* eslint-disable react/no-children-prop */
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SearchInput: React.FC<Props> = ({ children }) => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mb={1} />}
        />
        <Input
          fontSize="10pt"
          placeholder="Search reddit"
          _placeholder={{ color: "gray.500" }}
          _hover={{ borderColor: "blue.500", bg: "white", border: "1px solid" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
