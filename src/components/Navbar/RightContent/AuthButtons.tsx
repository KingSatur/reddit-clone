import React from "react";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@project/atoms/authModalAtom";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr="2"
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log in
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr="2"
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign up
      </Button>
    </>
  );
};

export default AuthButtons;
