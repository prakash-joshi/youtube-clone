export const imageLinks = {
  hamberg_Icon: "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp",
  Youtube_Icon: "https://www.igyaan.in/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg",
  Search_Icon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCiUDkOUy9vravrAdPmmQxJsGaOwbnmdGTBQLDaY3laeum-vFNeBbo6rf9ZagUp1r3cg&usqp=CAU",
  User_Icon: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
};

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=36&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key=${YOUTUBE_API_KEY}`;
