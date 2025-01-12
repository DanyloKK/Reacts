export default {
    length:{
        value:state => state.list.todos.length,
    },
    element:{
        value:state => state.list.todos,
    }
}