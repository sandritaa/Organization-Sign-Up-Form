import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import PrimeVue from 'primevue/config';
import Chips from 'primevue/chips';

/**
 *      CSS styles
 */
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app= createApp(App)

/**************************
 *      Dependencies
 **************************/
app.use(store).use(PrimeVue)

// Components 

app.component('Chips', Chips) 


app.mount('#app')
