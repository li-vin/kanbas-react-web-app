import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    questions: [],
};
const questionsSlice = createSlice({
    name: "Questions",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        addQuestion: (state, { payload: Question }) => {
            const newQuestion: any = {
                _id: new Date().getTime().toString(),
                title: Question.name,
                quiz: Question.quiz,
            };
            state.questions = [...state.questions, newQuestion] as any;
        },
        deleteQuestion: (state, { payload: QuestionId }) => {
            state.questions = state.questions.filter(
                (m: any) => m._id !== QuestionId
            );
        },
        updateQuestion: (state, { payload: Question }) => {
            console.log(Question);
            state.questions = state.questions.map((m: any) =>
                m._id === Question._id ? Question : m
            ) as any;
        },
        editQuestion: (state, { payload: QuestionId }) => {
            state.questions = state.questions.map((m: any) =>
                m._id === QuestionId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    editQuestion,
    setQuestions,
} = questionsSlice.actions;
export default questionsSlice.reducer;
