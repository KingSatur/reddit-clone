import React from "react";
import { Flex } from "@chakra-ui/react";
import { authModalState } from "@project/atoms/authModalAtom";
import { useRecoilState } from "recoil";
import Login from "./Login";
import Signup from "./Signup";

const Components: { [key: string]: React.FC } = {
  login: Login,
  signup: Signup,
};

const AuthInputs: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const ComponentToRender = Components[modalState.view];
  return (
    <Flex justify="center" align="center">
      <ComponentToRender />
    </Flex>
  );
};

export default AuthInputs;
