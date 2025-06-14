import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const res = await API.post('/api/login', userData);
    return res.data.user;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const res = await API.post('/api/register', userData);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Register failed');
  }
});

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const res = await API.get('/api/protected-welcome');
    return res.data.user;
  } catch {
    return rejectWithValue('Unauthorized');
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await API.get('/api/logout');
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'logged_in';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'registered';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = 'logged_out';
      });
  },
});

export default authSlice.reducer;
