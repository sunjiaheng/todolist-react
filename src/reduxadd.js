// import {createStore} from "redux";
// const store = createStore(reducer);

// const state = store.getState();



// const ADD_TODO = '添加 TODO';

// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }

// const action = addTodo('Learn Redux');

// store.dispatch(addTodo('Learn Redux'));

// const defaultState = 0;
// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.payload;
//     default: 
//       return state;
//   }
// };


// store.subscribe(listener);//监听 listener是view的更新函数

// function listener(){}

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// unsubscribe();//接触监听