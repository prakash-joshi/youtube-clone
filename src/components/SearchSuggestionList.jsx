import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { getSearchResultVideos } from "../store/actions/search.action";
import { YOUTUBE_SEARCH_BY_KEYWORD_API } from "../utils/constants";
import { Link } from "react-router-dom";

const SearchSuggestionList = (props) => {
  const { searchSuggestionsData, showSuggestions, setShowSuggestions, setSearchString } = props;

  const dispatch = useDispatch();
  const handleOnClickSugggestion = (searchSuggestion) => {
    dispatch(
      getSearchResultVideos(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", searchSuggestion), searchSuggestion),
    );
    setSearchString(searchSuggestion);
    setShowSuggestions(false);
  };

  return (
    <Fragment>
      {showSuggestions && searchSuggestionsData && searchSuggestionsData.length > 0 && (
        <>
          <div className="fixed top-14 bg-white border border-gray-300 rounded-xl w-[50rem] py-3 z-20 ">
            <ul>
              {searchSuggestionsData.map((searchSuggestion, index) => {
                return (
                  <Link key={index} to={"/results?search_query=" + searchSuggestion.replace(" ", "+")}>
                    <li
                      key={searchSuggestion}
                      className="flex  hover:bg-slate-200"
                      onClick={() => handleOnClickSugggestion(searchSuggestion)}
                    >
                      <img className="ml-6" src="./search.svg" alt="search" />
                      <span className="m-2">{searchSuggestion}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div
            className="fixed top-0 left-0 w-screen h-screen cursor-pointer"
            onClick={() => setShowSuggestions(false)}
          ></div>
        </>
      )}
    </Fragment>
  );
};

export default SearchSuggestionList;
