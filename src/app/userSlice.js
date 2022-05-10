// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     name: "",
//     email: "",
//     photo: ""
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         userLogIn: (state, action) => {
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.photo = action.payload.photo;
//         },
//         userSignedOut: (state) => {
//             state.name = null;
//             state.email=  null;
//             state.photo=  null;
//         },
//     }
// })

// export const {userLogIn, userSignedOut} = userSlice.actions;

// export const selectuserName = (state) => state.user.name
// export const selectuseremail = (state) => state.user.email
// export const selectuserphoto = (state) => state.user.photo