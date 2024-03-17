const useGetVideoIdfromURL = () => {
  const url = new URL(window.location.href);

  const videoId = url.searchParams.get("v");
  return videoId;
};

export default useGetVideoIdfromURL;
