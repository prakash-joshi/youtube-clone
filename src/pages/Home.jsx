import { useSelector } from "react-redux";
import VideoContainer from "../components/VideoContainer";

const Home = () => {
  const isSideMenuExpanded = useSelector((store) => store.sideBarMenu?.isSideMenuExpanded) || false;
  return (
    <>
      {isSideMenuExpanded ? (
        <div className="w-[86%] items-center pt-3 z-10 h-full mt-14 ml-[14%]">
          <VideoContainer />
        </div>
      ) : (
        <div className="w-[100%] items-center pt-3 z-10 h-full mt-14">
          <VideoContainer />
        </div>
      )}
    </>
  );
};

export default Home;
