const defaultState={count:1}
const reducer=(state=defaultState,action)=>{
    switch (action.type){
        case "inc":
            return{ count:state.count+action.num }
        case "dec":
            return{ count:state.count-1 }
        default:
            return state;
    }
}
export default reducer;
