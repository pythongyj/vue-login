import { ILoginState } from "./type";

export const getters = {
  getToken(state: ILoginState): string {
    return state.token;
  },
};
