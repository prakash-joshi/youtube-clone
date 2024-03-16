import { useDispatch, useSelector } from "react-redux";
import { togglesideBarMenu } from "../store/actions/sideBar.action";
import { useEffect } from "react";
import { getSearchSuggestion } from "../store/actions/search.action";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import SearchSuggestionList from "./SearchSuggestionList";

const Header = () => {
  const [searchString, setSearchString] = useState("");
  const [searchSuggestionsData, setSearchSuggestionsData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchSuggestionsDataStore = useSelector((store) => store.search.searchSuggestions);

  const toggleSideMenuHandler = () => {
    dispatch(togglesideBarMenu());
  };

  useEffect(() => {
    const handleSearchSuggestion = () => {
      if (!searchSuggestionsDataStore[searchString]) {
        dispatch(getSearchSuggestion(YOUTUBE_SEARCH_SUGGESTION_API, searchString));
      }
    };
    const suggestionTimer = setTimeout(() => {
      setSearchSuggestionsData(searchSuggestionsDataStore[searchString]);
      handleSearchSuggestion();
    }, 100);
    return () => {
      clearTimeout(suggestionTimer);
    };
  }, [dispatch, searchString, searchSuggestionsDataStore]);

  const handleSearchSuggestions = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="flex fixed justify-between items-center h-14 px-6 top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="flex items-center gap-6">
        <RxHamburgerMenu className="cursor-pointer" onClick={toggleSideMenuHandler} />
        <img src="./images/logo.png" alt="logo" className="h-5 bg-gray-300" />
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-full border border-gray-400 p-2 h-12 w-[50rem] pl-5"
          value={searchString}
          onChange={handleSearchSuggestions}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        />
        <div className="rounded-r-full border border-gray-400 p-2 h-12 text-2xl flex items-center justify-center w-16 cursor-pointer">
          <IoSearchOutline />
        </div>
        {showSuggestions && <SearchSuggestionList searchSuggestionsData={searchSuggestionsData} />}
      </div>
      <div className="flex items-center gap-6">
        <RiVideoAddLine className="cursor-pointer text-2xl" />
        <FaRegBell className="cursor-pointer text-2xl" />
        <FaUserCircle className="cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default Header;
