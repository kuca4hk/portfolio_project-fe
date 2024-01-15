import {createRouter, createWebHistory} from "vue-router";
import UserAuth from "@/pages/Auth/UserAuth.vue";
import NotFound from '@/pages/NotFound.vue'
import Dashboard from "@/pages/courses/CourseList.vue";
import store from '@/store/index'
import UserDetail from "@/pages/Auth/UserDetail.vue";
import CourseDetail from "@/pages/courses/CourseDetail.vue";
import CourseRegistration from "@/componenets/courses/CourseRegistration.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',

        },
        {
            path: '/dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/course/:id',
            component: CourseDetail,
            props: true,
            children: [
                {
                    path: 'register',
                    component: CourseRegistration,
                    meta: {
                        requiresAuth: true
                    }
                }
            ],
            meta:{
                requiresAuth: true
            },
        },
        {
            path: '/auth',
            component: UserAuth,
            meta: {
                requiresUnAuth: true
            }
        },
        {
            path: '/profile',
            component: UserDetail,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
            meta:{
                requiresAuth: true
            }
        }
    ]
})
router.beforeEach(function (to,_,next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/auth')
    } else if(to.meta.requiresUnAuth && store.getters.isAuthenticated){
        next('/dashboard')
    } else {
        next()
    }
})
export default router