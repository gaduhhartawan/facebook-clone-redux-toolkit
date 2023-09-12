import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Gaduh Hartawan",
    img: "https://cdn.idntimes.com/content-images/duniaku/post/20220916/one-piece-monkey-d-luffy-smile-59a26c5e8297d087d446fcc4886367d2.jpg",
  },
  {
    id: "1",
    name: "Garzent Karsten",
    img: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/Computer_programmer.jpeg.jpg",
  },
  {
    id: "2",
    name: "Marry Doe",
    img: "https://championdc.com/wp-content/uploads/2013/05/Team-Member-6.jpg",
  },
  {
    id: "3",
    name: "John Doe",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser(state, action) {
      const { username, url } = action.payload;
      if (url !== "") {
        state[3].name = username;
        state[3].img = url;
      }
      state[3].name = username;
    },
  },
});

export const selectAllUsers = (state) => state.users;
export const { editUser } = usersSlice.actions;
export default usersSlice.reducer;
