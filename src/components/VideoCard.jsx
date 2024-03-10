const VideoCard = (props) => {
  const { contentDetails, snippet, statistics } = props?.info;
  const { thumbnails, title, channelId, channelTitle } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const truncateTitle = (title) => {
    if (title.length > 40) {
      return title.slice(0, 35) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="relative m-auto cursor-pointer">
      <img src={thumbnails?.medium?.url} alt="thumbnail" className="rounded-xl" />
      {/* <span className="absolute bottom-1 right-1 bg-black text-xs font-medium px-1 py-[2px] rounded-lg text-cyan-100">
        {duration}
      </span> */}
      <div className="text-wrap">
        <p>{truncateTitle(title)}</p>
        <p>{"channelTitle : " + channelTitle}</p>
        <p>{"views : " + viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
