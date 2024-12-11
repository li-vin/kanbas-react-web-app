import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "Quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: Quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: Quiz.name,
                course: Quiz.course,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: QuizId }) => {
            state.quizzes = state.quizzes.filter((m: any) => m._id !== QuizId);
        },
        updateQuiz: (state, { payload: Quiz }) => {
            state.quizzes = state.quizzes.map((m: any) =>
                m._id === Quiz._id ? Quiz : m
            ) as any;
        },
        editQuiz: (state, { payload: QuizId }) => {
            state.quizzes = state.quizzes.map((m: any) =>
                m._id === QuizId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;
