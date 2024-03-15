import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store/store";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SideBar />
      <Outlet />
    </Provider>
  );
}

export default App;
