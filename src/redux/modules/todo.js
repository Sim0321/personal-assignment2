//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
//Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
//Initial State
const initalState = {
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
};

//Reducer
const todo = (state = initalState, action) => {
  console.log(action);
  // console.log("state :", state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
        //todo를 console에 찍어보고 싶음..
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};
//export default reducer
export default todo;
