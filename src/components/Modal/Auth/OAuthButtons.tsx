import React from "react";
import { Button, Flex, Image } from "@chakra-ui/react";
import { authModalState } from "@project/atoms/authModalAtom";
import { useRecoilState } from "recoil";
import Login from "./Login";
import Signup from "./Signup";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction={"column"} width="100%" mb={4}>
      <Button variant="oauth" mb={3}>
        <Image src="/images/googlelogo.png" alt="" height="20px" mr={4} />
        Continue with google
      </Button>
      <Button variant="oauth">Some other provider</Button>
    </Flex>
  );
};

export default OAuthButtons;
