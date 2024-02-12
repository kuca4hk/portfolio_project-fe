import mutations from '@/store/modules/auth/mutations'
import getters from '@/store/modules/auth/getters'
import actions from '@/store/modules/auth/actions'
export default {
    state(){
        return{
            userId: null,
            isSuperuser: null,
            email: null,
            name: null,
            lastName: null,
            isActive: null,
            adress: null,
            city: null,
            zipcode: null,
            role: null,
            token: null
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}