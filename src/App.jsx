import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store/store";
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <VideoContainer />
    </Provider>
  );
}

export default App;
