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
                console.log(response.data[c].date)
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

        }catch (error){
            console.log(error)
        }

    }
}