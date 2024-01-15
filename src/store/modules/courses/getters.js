export default {
    hasCourses(state){
        return state.courses && state.courses.length > 0
    },
    courses(state){
        return state.courses
    }
}