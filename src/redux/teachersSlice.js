import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestAllTeachers } from "../service/api";

export const allTeachersThunk = createAsyncThunk(
    'teeachers/allTeachers',
    async (_, thunkAPI) => {
        try {
            const arrTeachers = await requestAllTeachers()
            return arrTeachers;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const INITIAL_STATE = {
    teachers: [],
    isLoading: false,
    error: null,
};

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: INITIAL_STATE,
    extraReducers: builder =>
        builder
            .addCase(allTeachersThunk.fulfilled, (state, { payload }) => {
                state.teachers = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(allTeachersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(allTeachersThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
    })
})

export const teachersReducer = teacherSlice.reducer