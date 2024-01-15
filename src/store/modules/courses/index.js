import actionsCourses from "@/store/modules/courses/actions";
import gettersCourses from "@/store/modules/courses/getters";
import mutationsCourses from "@/store/modules/courses/mutations";

export default {
    namespaced: true,
    state(){
        return{
            courses: []
        }
    },
    actions:actionsCourses,
    mutations:mutationsCourses,
    getters:gettersCourses,
}