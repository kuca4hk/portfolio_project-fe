import {createRouter, createWebHistory} from "vue-router";
import UserAuth from "@/pages/Auth/UserAuth.vue";
import NotFound from '@/pages/NotFound.vue'
import Dashboard from "@/pages/courses/CourseList.vue";
import store from '@/store/index'
import UserDetail from "@/pages/Auth/UserDetail.vue";
import CourseDetail from "@/pages/courses/CourseDetail.vue";
import UserSignUp from "@/pages/Auth/UserSignUp.vue";
import CourseCreate from "@/pages/courses/CourseCreate.vue";
import CourseListMy from "@/pages/courses/CourseListMy.vue";
import CourseUpdate from "@/pages/courses/CourseUpdate.vue";
import CourseMyRegistration from "@/pages/courses/CourseMyRegistration.vue";

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
            meta:{
                requiresAuth: true
            },
        },
        {
            path: '/mycourses-registration',
            component: CourseMyRegistration,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: '/signin',
            component: UserAuth,
            meta: {
                requiresUnAuth: true
            }
        },
        {
          path: '/signup',
          component: UserSignUp,
          meta: {
              requiresUnAuth: true
          }
        },
        {
            path: '/createcourse',
            component: CourseCreate,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mycourses',
            component: CourseListMy,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/course/edit/:id',
            component: CourseUpdate,
            props: true,
            meta:{
                requiresAuth: true
            },

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
        next('/signin')
    } else if(to.meta.requiresUnAuth && store.getters.isAuthenticated){
        next('/dashboard')
    } else {
        next()
    }
})
export default router