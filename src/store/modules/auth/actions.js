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
    }
}