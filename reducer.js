import { createSlice } from '@reduxjs/toolkit';
import { login } from './action';
import { loadUser } from './action';

const initialState = {
 
    
    loading: false,
    error: null,
    // searchData: [],
    
  }

  export const Auth = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		
		[login.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.loading = false;
            state.isAuthenticated = true;
            state.user = payload.user;
            state.message = payload.message;
			
		},
		[login.rejected]: (state, { payload }) => {
			state.loading = false;
            state.isAuthenticated = false;
			state.error = payload;
		},
		
		[loadUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[loadUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload.user;
		},
		[loadUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
             state.isAuthenticated = false;
    
		},
	},
});
export const { onLogin } = Auth.actions;
export default Auth.reducer;