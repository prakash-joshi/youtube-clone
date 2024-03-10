import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { getVideoList } from "../store/actions/videoList.actions";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const videoList = useSelector((store) => store.videoList);
  const dispatch = useDispatch();

  useEffect(() => {
    setVideos(videoList.items);
  }, [videoList]);

  useEffect(() => {
    dispatch(getVideoList(YOUTUBE_VIDEO_API));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-between">
      {videos &&
        videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.etag} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
