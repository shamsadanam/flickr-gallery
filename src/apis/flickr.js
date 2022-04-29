import axios from "axios";

export default axios.create({
  baseURL: `https://api.flickr.com/services/rest/`,
  params: {
    api_key: "68aa0dd4cae95a6eb03601bfd282d5e9",
    method: "flickr.photos.search",
    tags: "Cats",
    per_page: 24,
    format: "json",
    nojsoncallback: 1,
    safe_search: 1,
  },
});
