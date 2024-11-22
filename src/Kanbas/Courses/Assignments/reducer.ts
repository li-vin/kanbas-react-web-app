import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = { assignments: assignments };
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log("added assignment");
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a
            ) as any;
            console.log("updated assignment");
        },
    },
});
export const {addAssignment, deleteAssignment, updateAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;