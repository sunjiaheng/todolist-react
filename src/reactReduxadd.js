// import {connect，Provider} from "react-rudex";

// const Visiablelist = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(todolist);

// const mapStateToProps = (state)=>{
// 	return{
// 		todos:getVisibleTodos(state.todos, state.visibilityFilter)
// 	}
// }

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

// const mapDispatchToProps = {
//   onClick: (filter) => {
//     type: 'SET_VISIBILITY_FILTER',
//     filter: filter
//   };
// }

	
