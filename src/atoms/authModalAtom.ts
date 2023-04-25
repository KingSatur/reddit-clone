import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultModelState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModal",
  default: defaultModelState,
});
