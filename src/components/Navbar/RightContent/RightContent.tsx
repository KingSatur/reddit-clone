import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@project/components/Modal/Auth/AuthModal";

const RightContent: React.FC = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justify="center" align="center">
        <AuthModal />
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
