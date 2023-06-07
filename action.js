import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const login = createAsyncThunk('v1/login', async ({ email, password }, { rejectWithValue }) => {
	try {
		// configure header's Content-Type as JSON
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(` http://localhost:4000/api/v1/login`, { email, password }, config);
		// store user's token in local storage
		// window.localStorage.setItem('user', JSON.stringify(data));
		return data;

	} catch (error) {
		// return custom error message from backend if present
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message);
		} else {
			return rejectWithValue(error.message);
		}
	}
});




export const loadUser = createAsyncThunk('v1/me', async ({rejectWithValue})=>
{
    try {
        const { data } = await axios.get(`http://localhost:4000/api/v1/me`);
        return data;
      } catch (error) {
		// return custom error message from backend if present
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message);
		} else {
			return rejectWithValue(error.message);
		}
	}

})



export const addTask = createAsyncThunk('v1/newtask', async ({ title, description }, { rejectWithValue }) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(` http://localhost:4000/api/v1/newtask`, { title, description }, config);
		
		return data;

	} catch (error) {
		// return custom error message from backend if present
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message);
		} else {
			return rejectWithValue(error.message);
		}
	}
});


//   export const deleteTask = createAsyncThunk(
//     "deleteTask",
//     async (taskId, { rejectWithValue }) => {
//       const response = await fetch(
//         ` http://localhost:4000/api/v1/task${taskId}`,
//         { method: "DELETE" }
//       );
  
//       try {
//         const result = await response.json();
//         console.log(result);
//         return result;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     });




	export const deleteTask = createAsyncThunk('v1/task/', async (taskId , { rejectWithValue }) => {
		try {
			// configure header's Content-Type as JSON
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.delete(` http://localhost:4000/api/v1/task${taskId}`, config);
			// store user's token in local storage
			// window.localStorage.setItem('user', JSON.stringify(data));
			return data;
	
		} catch (error) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	});
	
	

    export const updateTask = createAsyncThunk(
        "updateTask",
        async (data, { rejectWithValue }) => {
          console.log("updated data", data);
          const response = await fetch(
            ` http://localhost:4000/api/v1/task${taskId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
      
          try {
            const result = await response.json();
            return result;
          } catch (error) {
            return rejectWithValue(error);
          }
        }
      );
      
  