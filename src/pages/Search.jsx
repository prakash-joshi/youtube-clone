import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGetVideoIdfromURL from "../customHooks/useGetSearchPramFromURL";

const Search = () => {
  const isSideMenuExpanded = useSelector((store) => store.sideBarMenu?.isSideMenuExpanded) || false;
  return (
    <>
      {isSideMenuExpanded ? (
        <div className="w-[86%] items-center pt-3 z-10 h-full mt-14 ml-[14%]">
          <SearchResultContainer />
        </div>
      ) : (
        <div className="w-[100%] items-center pt-3 z-10 h-full mt-14">
          <SearchResultContainer />
        </div>
      )}
    </>
  );
};

const VideoSuggestions = (props) => {
  const { snippet } = props?.info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className=" flex relative cursor-pointer">
      <img src={thumbnails?.medium?.url} alt="thumbnail" className="rounded-xl" />

      <div className="text-wrap mx-6">
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

const SearchResultContainer = () => {
  const search_query = useGetVideoIdfromURL();
  const [searchVideos, setSearchvideos] = useState([]);
  const searchResultVideo = useSelector((store) => store.search?.searchResultVideo);
  useEffect(() => {
    setSearchvideos(searchResultVideo[search_query]);
  }, [search_query, searchResultVideo]);

  return (
    searchVideos &&
    searchVideos.length > 0 &&
    searchVideos?.map((video) => {
      if (video?.id?.kind === "youtube#video")
        return (
          <div key={video?.etag} className="flex flex-col pl-36 m-10">
            <VideoSuggestions info={video} />
          </div>
        );
    })
  );
};

export default Search;
