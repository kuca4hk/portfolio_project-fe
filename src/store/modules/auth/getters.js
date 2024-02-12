export default {
    userName(state){
        return state.name + ' ' + state.lastName
    },
    address(state){
        return state.address + ', ' + state.city + ', ' + state.zipcode
    },
    role(state){
        return state.role
    },
    userId(state){
        return state.userId
    },
    isAuthenticated(state){
        return !!state.token
    },
    token(state){
        return state.token
    },
    email(state){
        return state.email
    }

}