import { createStore } from "vuex";
import { loginStore } from "./models/login/index";
export default createStore({
  modules: {
    loginStore,
  },
});
