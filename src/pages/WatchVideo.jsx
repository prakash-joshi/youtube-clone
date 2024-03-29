import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseSideBarMenu } from "../store/actions/sideBar.action";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseSideBarMenu());
  });
  return (
    <>
      <div className="flex flex-col pt-3 z-10 h-full mt-14 mx-3">
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchVideo;
