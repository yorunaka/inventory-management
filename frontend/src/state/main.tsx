import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
}

const InitialState: InitialStateTypes = {
    isSidebarCollapsed: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: InitialState,
    reducers: {
        setSidebarCollapse: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
    },
})

export const { setSidebarCollapse } = globalSlice.actions;

export default globalSlice.reducer;