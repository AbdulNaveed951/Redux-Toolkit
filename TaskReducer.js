import { createSlice } from '@reduxjs/toolkit';
import { addTask } from './action';
import { updateTask } from './action';
import { deleteTask } from './action';

const initialState = {
 
    Tasks: [],
    loading: false,
    error: null,
    // searchData: [],
    
  }
 


  export const Message = createSlice({
	name: 'message',
	initialState,
	extraReducers: {
		
		[addTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[addTask.fulfilled]: (state, { payload }) => {
			state.loading = false;
            state.message = payload.message;
			
		},
		[addTask.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		
		[updateTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[updateTask.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;;
		},
		[updateTask.rejected]: (state, { payload }) => {
            state.loading = false;
			state.error = payload;
    
		},[deleteTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[deleteTask.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.message = payload.message;;
		},
		[deleteTask.rejected]: (state, { payload }) => {
            state.loading = false;
			state.error = payload;
    
		},
	},
});
export const { onLogin } = Message.actions;
export default Message.reducer;