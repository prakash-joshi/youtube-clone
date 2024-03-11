import { useEffect } from "react";
import SideBar from "../components/SideBar";
import { useDispatch } from "react-redux";
import { collapseSideBarMenu } from "../store/actions/sideBar.action";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseSideBarMenu());
  });
  return (
    <>
      <div className="flex">
        <SideBar />
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchVideo;
