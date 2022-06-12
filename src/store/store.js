import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Userinfo",
    initialState: {
        users: [],
        loading: false,
        singleUser: []
    },
    reducers: {
        addUser(state, action) {
            const availUsers = action.payload;
            if(state.users === availUsers) {
                return;
            }
            state.users.push(availUsers)
        },
        displayUser(state, action) {
            const fetchUser = action.payload;
            state.singleUser = [fetchUser.data]
        },
        loadingApi(state) {
            state.loading = !state.loading;
        }
    }
})

const store = configureStore({
    reducer: {user: userSlice.reducer}
})

export const userActions = userSlice.actions;

export default store;