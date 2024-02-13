import { imageLinks } from "../utils/constants";

const Header = () => {
  return (
    <section>
      <div className="grid grid-flow-col p-5">
        <div className="flex col-span-1">
          <img className="h-12" alt="menu" src={imageLinks.hamberg_Icon} />
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
