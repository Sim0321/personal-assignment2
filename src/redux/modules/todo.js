//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
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

export const getTodoBYID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};
//Initial State
const initalState = {
  todos: [
    {
      id: "id1",
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: "id2",
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
  todo: {
    id: "",
    title: "",
    body: "",
  },
};

//Reducer
const todo = (state = initalState, action) => {
  console.log("action.payload :", action.payload);
  // console.log("action :", action);
  // console.log("state :", state);
  switch (action.type) {
    case ADD_TODO:
      // const createtodo = {
      //   id:state.todos[state.todos.length-1].id +1,
      //   title : action.todolist.title,
      //   cont: action.todolist.cont,
      //   isDone : false
      // }

      // const addTodo = [...state.todos].concat(createtodo)
      // //[...~] 배열에 전달받은 todo값을
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
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};
//export default reducer
export default todo;
