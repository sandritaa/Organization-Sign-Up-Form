import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import PrimeVue from 'primevue/config';

/**
 *      CSS styles
 */
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

//copmment
const app= createApp(App)

// This is my comment
/**************************
 *      Dependencies
 **************************/
app.use(store).use(PrimeVue)



app.mount('#app')
