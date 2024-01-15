export default {
    setData(state, payload){
        state.isSuperuser = payload.isSuperuser
        state.name = payload.name
        state.lastname = payload.lastname
        state.email = payload.email
        state.isActive = payload.isActive
        state.address = payload.address
        state.city = payload.city
        state.zipcode = payload.zipcode
        state.role = payload.role
        // state.tokenExpiration = payload.tokenExpiration
    },
    setUser(state, payload){
        state.userId = payload.userId
        state.token = payload.token
    }
}