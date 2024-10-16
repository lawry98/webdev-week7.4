import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";

export const atomFly = atomFamily({
  key:'atomFly',
  default: id => {
    return TODOS.find(x => x.id === id);
  },
});


