import { act } from "react";

const initialState = {
    todos: [
        {
            task: 'Learn Prop Drilling',
            id: 1,
            completed: true,
        },
        {
            task: 'Learn Redux',
            id: 2,
            completed: true,
        },
        {
            task: 'Learn Redux Toolkit',
            id: 3,
            completed: false,
        }
    ],

    preferences: { darkMode: false }
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_DARK_MODE') {
        return {
            ...state,
            preferences: { darkMode: !state.preferences.darkMode }
        }
    }

    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [
                ...state.todos,
                {id: Date.now(), task: action.payload, completed: false}
            ]
        }
    }

    if (action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map((todo) => (
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            ))
        }
    }

    if (action.type === 'DELETE_TODO') {
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    }

    if (action.type === 'DELETE_ALL_TODOS') {
        return {
            ...state,
            todos: [],
        }
    }

    if (action.type === 'MARK_ALL_COMPLETE') {
        return {
            ...state,
            todos: state.todos.map((todo) => ({...todo, completed: true}))
        }
    }

    if (action.type === 'DELETE_COMPLETED_TODOS') {
        return {
            ...state,
            todos: state.todos.filter((todo) => !todo.completed)
        }
    }

    return state;
}

export default rootReducer;