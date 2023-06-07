import { configureStore } from '@reduxjs/toolkit';
import Auth from './reducer';
import Message from './reducer'


export const Store = configureStore({
	reducer: {
		auth: Auth,
        mess:Message
	
	},
});
