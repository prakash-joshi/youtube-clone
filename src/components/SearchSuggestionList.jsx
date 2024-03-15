import { Fragment } from "react";

const SearchSuggestionList = (props) => {
  const { searchSuggestionsData } = props;
  return (
    <Fragment>
      {searchSuggestionsData && searchSuggestionsData.length > 0 && (
        <div className="fixed top-14 bg-white  border border-gray-300 rounded-3xl p-2  w-[50rem]">
          <ul>
            {searchSuggestionsData.map((searchSuggestion) => {
              return (
                <li key={searchSuggestion} className="flex ">
                  {searchSuggestion}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default SearchSuggestionList;
