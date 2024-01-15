export default {
    userName(state){
        return state.name
    },
    address(state){
        return state.adress + ' ' + state.city + ' ' + state.zipcode
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
    }

}