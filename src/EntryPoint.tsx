import {Provider} from "react-redux";
import App from "./App";
import {PersistGate} from "redux-persist/integration/react";
import {persist, store} from "./redux/store";


export default function EntryPoint() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        <App/>
      </PersistGate>
    </Provider>
  );
}
