import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: {
    _id: "63e6d7615cc3144ba7329fae",
    firstName: "name",
    lastName: "lastname",
    email: "email@email.com",
    password: "$2b$10$gsSV7HfKgvgRP83sKVj1KuAJMFNZAWYXXJg4JGvSXKGA30rMIT/ye",
    picturePath: "p3.png",
    friends: [],
    location: "fake location",
    occupation: "fake occupation",
    viewedProfile: 6888,
    impressions: 7569,
    createdAt: "2023-02-10T23:46:41.587+00:00",
    updatedAt: "2023-02-10T23:46:41.587+00:00",
    __v: 0
  },
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;