import { useSelector } from "react-redux";

const SideBar = () => {
  const sideBarMenu = useSelector((store) => store.sideBarMenu) || [];
  return (
    sideBarMenu &&
    sideBarMenu?.isSideMenuExpanded && (
      <div className="fixed w-[14%] pt-3 top-14 left-0 pr-6 pl-2 h-full overflow-y-auto bg-white z-50">
        {/* <h1 className="font-bold">Home</h1> */}
        <img className="pr-4" src="./home.svg" alt="home" /> Home
        <h1 className="font-bold">Shorts</h1>
        <h1 className="font-bold">Subscription</h1>
        ----------------
        <h1 className="font-bold">{"You >"}</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
        </ul>
        ----------------
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Film</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
        </ul>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Film</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
        </ul>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Film</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
        </ul>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Film</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
