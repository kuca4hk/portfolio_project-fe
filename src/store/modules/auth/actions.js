import axios from "axios";
import {Buffer} from "buffer";

export default {
    async login(context, payload) {
        const email = payload.email;
        const password = payload.password;
        const basicAuth = Buffer.from(`${email}:${password}`).toString('base64') //je potreba pro basicAuth
        try {
            const response = await axios.post(`${process.env.VUE_APP_APIURL}users/login/`, {
                email: payload.email,
                password: payload.password,
            }, {
                headers: {
                    'Authorization': `Basic ${basicAuth}`,
                    'Accept': '*/*',

                },
            });


            // Zpracování odpovědi
            const user = response.data.user; // Získání dat uživatele z odpovědi

            localStorage.setItem('token', basicAuth)
            localStorage.setItem('id', user.id)

            context.commit('setData', {
                isSuperuser: user.is_superuser,
                name: user.first_name,
                lastName: user.last_name,
                email: user.email,
                isActive: user.is_active,
                address: user.adress,
                city: user.city,
                zipcode: user.zip_code,
                role: user.role,
            });
            context.commit('setUser',{
                token: basicAuth,
                userId: user.id
            })
        } catch (error) {
            console.log(error);
        }
    },
    tryLogin(context){
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')

        if(token && userId){
            context.commit('setUser',{
                userId: userId,
                token: token
            })
        }
    },
    async getUserData(context){
        const basicAuth = localStorage.getItem('token')
        const userId = localStorage.getItem('id')
        const response = await axios.get(`${process.env.VUE_APP_APIURL}users/user-information/${userId}/`,{
            headers: {
                'Authorization': `Basic ${basicAuth}`,
            }
        })

        context.commit('setData', {
            isSuperuser: response.data.is_superuser,
            name: response.data.first_name,
            lastName: response.data.last_name,
            email: response.data.email,
            isActive: response.data.is_active,
            address: response.data.adress,
            city: response.data.city,
            zipcode: response.data.zip_code,
            role: response.data.role,
        })
    },
    async signout(context){
        const basicAuth = localStorage.getItem('token')
        const response = await axios.post(`${process.env.VUE_APP_APIURL}users/logout/`,{
            user: basicAuth
        }, {
            headers: {
                'Authorization': `Basic ${basicAuth}`,
            }
        })

        console.log(response)


        localStorage.removeItem('token')
        localStorage.removeItem('id')
        context.commit('setUser', {
            userId: null,
            token: null
        })

        context.commit('setData', {
            isSuperuser: null,
            name: null,
            lastName:null,
            email: null,
            isActive: null,
            address: null,
            city: null,
            zipcode: null,
            role: null
        })

    },
    async updatePassword(context, payload){
        const basicAuth = localStorage.getItem('token')
        await axios.post(`${process.env.VUE_APP_APIURL}users/change-password/`,{
            new_password: payload.new_password,
            confirm_new_password: payload.confirm_new_password
        }, {
            headers: {
                'Authorization': `Basic ${basicAuth}`,
            }
        })


        console.log("Heslo uspesne zmeneno")
    },
    async registerUser(context, payload){
        await axios.post(`${process.env.VUE_APP_APIURL}users/registration/`, {
            first_name: payload.firstName,
            last_name: payload.lastName,
            email: payload.email,
            password: payload.password,
            adress: payload.adress,
            city: payload.city,
            zip_code: payload.zipCode,
        })
    },

    async registerUserToCourse(context, payload){
        await axios.post(`${process.env.VUE_APP_APIURL}courses/users-course-registry/${payload.idCourse}/`, {
            users: payload.user
        }, {
            headers: {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
            }
        })
    },
    async signoutUserFromCourse(context,payload){
        await axios.put(`${process.env.VUE_APP_APIURL}courses/users-course-registry/${payload.idCourse}/`, {
            users: payload.user
        }, {
            headers: {
                'Authorization': `Basic ${localStorage.getItem('token')}`,
            }
        })
    }
}