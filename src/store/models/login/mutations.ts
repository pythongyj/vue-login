import { ILoginState } from "./type";

export const mutations = {
  /**
   * @description 设置用户信息Token
   * @param { state } 登陆模块的所有信息
   * @param { payload } 传入的 Token 值
   */
  setToken(state: ILoginState, payload: string): void {
    state.token = payload;
  },
};
