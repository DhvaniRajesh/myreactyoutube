// const API_KEY = "xxx"; 
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key="+process.env.REACT_APP_API_KEY;

export const SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";