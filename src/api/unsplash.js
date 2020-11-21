import axios from "axios";

// Creating a pre-configured instance of the axios client, that has default properties set where it's going to make a request to.
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID H_Q6XWP302Lh8Eha7u1OXAxlONz0XkBTj5xlpic3HeU",
  },
});
