import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Quizzes: [],
};
const QuizzesSlice = createSlice({
    name: "Quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.Quizzes = action.payload;
        },
        addQuiz: (state, { payload: Quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: Quiz.name,
                course: Quiz.course,
            };
            state.Quizzes = [...state.Quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: QuizId }) => {
            state.Quizzes = state.Quizzes.filter((m: any) => m._id !== QuizId);
        },
        updateQuiz: (state, { payload: Quiz }) => {
            state.Quizzes = state.Quizzes.map((m: any) =>
                m._id === Quiz._id ? Quiz : m
            ) as any;
        },
        editQuiz: (state, { payload: QuizId }) => {
            state.Quizzes = state.Quizzes.map((m: any) =>
                m._id === QuizId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
    QuizzesSlice.actions;
export default QuizzesSlice.reducer;
