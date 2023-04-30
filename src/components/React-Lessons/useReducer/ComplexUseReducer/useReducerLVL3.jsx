import React, { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

const initialState = {
  todos: [],
  filter: "all",
  loading: false,
  error: null,
};

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  SET_FILTER: "set-filter",
  FETCH_TODOS_REQUEST: "fetch-todos-request",
  FETCH_TODOS_SUCCESS: "fetch-todos-success",
  FETCH_TODOS_FAILURE: "fetch-todos-failure",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),

      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ACTIONS.FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case ACTIONS.FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function UseReducerLVL3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (text) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: text });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const handleSetFilter = (filter) => {
    dispatch({ type: ACTIONS.SET_FILTER, payload: filter });
  };

  const fetchTodos = () => {
    dispatch({ type: ACTIONS.FETCH_TODOS_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.FETCH_TODOS_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: ACTIONS.FETCH_TODOS_FAILURE, payload: error.message }));
  };
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "completed") {
      return todo.completed;
    } else if (state.filter === "active") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={filteredTodos}
        filter={state.filter}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <TodoFilter filter={state.filter} onSetFilter={handleSetFilter} />
      <button onClick={fetchTodos}>Fetch Todos</button>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error: {state.error}</div>}
    </div>
  );
}
export default UseReducerLVL3;
