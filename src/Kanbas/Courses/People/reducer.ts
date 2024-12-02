import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enroll: (state, { payload: { user, course } }) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: user,
                course: course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenroll: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e.course !== course || e.user !== user
            );
        },
    },
});
export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
