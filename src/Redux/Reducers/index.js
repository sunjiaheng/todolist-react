
const reducer = (state = {todo:[],done:[]},paylaod = {})=>{
	
	let {type,info} =paylaod;
	

	switch(type){
		case 'addlist':
			return Object.assign({}, state, {
	            todo: [...state.todo,info]
	        });	
		case 'over':
			return Object.assign({}, state, {
	            todo: state.todo.filter((item,index)=>{
					if(index!=info.index){
						return item
					}
				}),
				done:[...state.done,state.todo.filter((item,index)=>{
					if(index==info.index){
						return item
					}
				})]
	        });
	    case 'remove':
	    	return Object.assign({}, state, {
				done:state.done.filter((item,index)=>{
					if(index!=info.index){
						return item
					}
				})
	        });
		default:
			return state;
	}
	return state;
}

export default reducer;