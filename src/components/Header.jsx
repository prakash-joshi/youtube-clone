import { useDispatch } from "react-redux";
import { imageLinks } from "../utils/constants";
import { togglesideBarMenu } from "../store/actions/sideBar.action";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSideMenuHandler = () => {
    dispatch(togglesideBarMenu());
  };

  return (
    <section>
      <div className="grid grid-flow-col p-5 shadow-lg">
        <div className="flex col-span-1">
          <img className="h-12" alt="menu" src={imageLinks.hamberg_Icon} onClick={toggleSideMenuHandler} />
          <img className="h-12" alt="Youtube" src={imageLinks.Youtube_Icon} />
        </div>
        <div className="col-span-10 flex">
          <input className="rounded-l-full border border-gray-400 w-1/2 p-2 h-12" type="text" />
          <button
            className="rounded-r-full border border-gray-400 w-14 p-2 h-12"
            onClick={() => {
              console.log("fiuuuuuuccckk");
            }}
          >
            <img className="h-7 px-1" src={imageLinks.Search_Icon} />
          </button>
        </div>
        <div className="col-span-1 h-12">
          <img className="h-12" alt="menu" src={imageLinks.User_Icon} />
        </div>
      </div>
    </section>
  );
};

export default Header;
