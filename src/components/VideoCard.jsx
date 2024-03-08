const VideoCard = (props) => {
  const { snippet } = props?.info;
  const { thumbnails } = snippet;

  return (
    <div className="relative my-2">
      <img src={thumbnails?.medium?.url} alt="video" className="rounded-xl" />
    </div>
  );
};

export default VideoCard;
