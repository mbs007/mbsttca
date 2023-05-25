import { Provider } from "react-redux";
import store from "./utils/store";
import Typing from "./components/Typing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Typing />
      <Footer />
    </Provider>
  );
};

export default App;
