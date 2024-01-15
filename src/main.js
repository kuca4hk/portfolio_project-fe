import { createApp } from 'vue';
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import BaseCard from "@/componenets/UI/BaseCard.vue";
import BaseButton from "@/componenets/UI/BaseButton.vue";
import BaseBadge from "@/componenets/UI/BaseBadge.vue";


const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge)

app.use(router)
app.use(store)


app.mount('#app');
