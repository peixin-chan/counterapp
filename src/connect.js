import {connect} from 'react-redux'

const mapState=(state)=>{
    return{ count:state.count }
}

const mapDispatch=(dispatch)=>{
    return{
        increm:(data)=>{ dispatch({type:"inc",num:2}) },
        decrem:()=>{ dispatch({type:"dec"}) }
    }
}

export default connect(mapState,mapDispatch)
