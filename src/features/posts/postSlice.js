import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: "1",
    content: "Belajar Reactjs di Youtube...",
    img: "https://glints.com/id/lowongan/wp-content/uploads/2020/10/logo-reactjs.jpg",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    userId: 1,
  },
  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi nemo vel vitae iure, rem quo tempore deserunt nulla optio aliquam explicabo ab!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeN9EsRTvAU21Npt6T-B8d81LI3aYbT8G2w&usqp=CAU",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    userId: 0,
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, img) {
        return {
          payload: {
            id: nanoid(),
            content,
            img,
            date: sub(new Date(), { minutes: 0 }).toISOString(),
            userId: 3,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
