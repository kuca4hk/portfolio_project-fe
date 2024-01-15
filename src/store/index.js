import {createStore} from "vuex";
import authModules from '@/store/modules/auth/index'
import coursesModules from '@/store/modules/courses/index'

const store = createStore({
    modules: {
        courses: coursesModules,
        auth: authModules,

    },

})

export default store