import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TProject = {
    id: string,
    name: string,
    flats: { serial: number }[]
}

interface IProjectsSlice {
    value: TProject[];
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IProjectsSlice = {
    loading: true,
    status: 'loading',
    error: null,
    value: []
};

type TAction = PayloadAction<TProject[]>
const ProjectsSlice = createSlice({
    name: 'Projects',
    initialState,
    reducers: {
        setProjects: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setProjects } = ProjectsSlice.actions;

const ProjectsReducer = ProjectsSlice.reducer
export default ProjectsReducer
