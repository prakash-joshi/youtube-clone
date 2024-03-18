const useGetVideoIdfromURL = () => {
  const url = new URL(window.location.href);

  const search_query = url.searchParams.get("search_query");
  return search_query;
};
export default useGetVideoIdfromURL;
