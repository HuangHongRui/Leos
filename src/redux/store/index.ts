import devStore from "./store.dev";
import prodStore from "./store.prod";

// tslint:disable-next-line
let store: any;
if (process.env.NODE_ENV === "production") {
  store = prodStore;
} else {
  store = devStore;
}

export default store();
