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
<<<<<<< HEAD
=======

>>>>>>> 765f602fa6fc908f0627becee29fe495ee4c36b6

const app= createApp(App)


/**************************
 *      Dependencies
 **************************/
app.use(store).use(PrimeVue)



app.mount('#app')
