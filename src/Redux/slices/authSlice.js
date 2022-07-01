// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     isLoggedIn: false,
//     email: null,
//     password: null
// }

// const authSlice = createSlice({
//     name: 'userAuth',
//     initialState,
//     reducers: {
//         setSignIn: (state, action) => {

//             state.email = action.payload.email;
//             state.isLoggedIn = action.payload.isLoggedIn;
//             state.userName = action.payload.password;

//         },
//         setSignOut: (state) => {
//             state.email = null;
//             state.password = null;
//             state.isLoggedIn = false;
//         }
//     }
// });

// export const { setSignIn, setSignOut } = authSlice.actions;

// export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
// export const selectEmail = (state) => state.userAuth.email;
// export const selectpassword = (state) => state.userAuth.password;

// export default authSlice.reducer;