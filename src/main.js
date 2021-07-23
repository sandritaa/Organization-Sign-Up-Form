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
import '@/assets/index.css'
const app= createApp(App)

/**************************
 *      Dependencies
 **************************/
app.use(store).use(PrimeVue)

/**
 *      PrimeVue Components
 *          add the bellow this comments with: app.components('NameComponent', ImportedComponent);
 */

app.mount('#app')
