import axios from "axios";

export default {
    async getCourses(context){
        try {
            const response = await axios.get(`${process.env.VUE_APP_APIURL}courses/courses/`, {
                headers:{
                    'Authorization': `Basic ${localStorage.getItem('token')}`,
                }
            })
            const courses = []
            for (const c in response.data){
                const course = {
                    id: response.data[c].id,
                    createdBy: response.data[c].created_by,
                    createdById: response.data[c].created_by_id,
                    users: response.data[c].users,
                    category:response.data[c].category,
                    name: response.data[c].name,
                    description: response.data[c].description,
                    price: response.data[c].price_in_czech,
                    date_created: response.data[c].date,
                    date_update: response.data[c].update_at,
                    is_active: response.data[c].is_active
                }
                courses.push(course)
            }

            context.commit('setCourses', courses)

        }catch (error){
            console.log(error)
        }

    },
    async getMyCourses(context){
        try {
            const response = await axios.get(`${process.env.VUE_APP_APIURL}courses/${localStorage.getItem('id')}/courses-created-by-user/`, {
                headers: {
                    'Authorization': `Basic ${localStorage.getItem('token')}`,
                }
            })
            const courses = []
            for (const c in response.data){
                const course = {
                    id: response.data[c].id,
                    createdBy: response.data[c].createdBy,
                    users: response.data[c].users,
                    category:response.data[c].category,
                    name: response.data[c].name,
                    description: response.data[c].description,
                    price: response.data[c].price_in_czech,
                    date_created: response.data[c].date,
                    date_update: response.data[c].update_at,
                    is_active: response.data[c].is_active
                }
                courses.push(course)
            }
            context.commit('setCourses', courses)
        } catch (error){
            console.log(error)
            context.commit('setCourses')
        }
    },
    async createCourse(context, payload){
        await axios.post(`${process.env.VUE_APP_APIURL}courses/create-course/`, {
            created_by: localStorage.getItem('id'),
            category: payload.category,
            name: payload.name,
            description: payload.description,
            price: payload.price,
            is_active: payload.is_active,
        }, {
            headers: {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
            }
        })
    },
    async updateCourse(context, payload){
        await axios.put(`${process.env.VUE_APP_APIURL}courses/create-course/`, {
            id: payload.id,
            created_by: localStorage.getItem('id'),
            category: payload.category,
            name: payload.name,
            description: payload.description,
            price: payload.price,
            is_active: payload.is_active,
        }, {
            headers: {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
            }
        })
    },
    async myCourseRegistry(context){
        try {
            const response = await axios.get(`${process.env.VUE_APP_APIURL}courses/my-courses-registration/`, {
                headers:{
                    'Authorization': `Basic ${localStorage.getItem('token')}`,
                }
            })
            const courses = []
            for (const c in response.data){
                const course = {
                    id: response.data[c].id,
                    createdBy: response.data[c].created_by,
                    createdById: response.data[c].created_by_id,
                    users: response.data[c].users,
                    category:response.data[c].category,
                    name: response.data[c].name,
                    description: response.data[c].description,
                    price: response.data[c].price_in_czech,
                    date_created: response.data[c].date,
                    date_update: response.data[c].update_at,
                    is_active: response.data[c].is_active
                }
                courses.push(course)
            }

            context.commit('setCourses', courses)

        }catch (error){
            console.log(error)
        }
    }
}