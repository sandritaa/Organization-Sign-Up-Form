// kick starts the app
// Below we import what we use more than once 

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';
import Chips from 'primevue/chips';
import Button from 'primevue/button'; //great example of an item that we will use across multiple components 

/**
 *      CSS styles
 */
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '@/assets/index.css'

// creating a vue app 
const app= createApp(App) 

/**************************
 *      Dependencies
 **************************/
app.use(store).use(PrimeVue)

/**
 *      PrimeVue Components
 *          add the bellow this comments with: app.components('NameComponent', ImportedComponent);
 */
app.component('Textarea', Textarea).component('Chips', Chips).component('Button', Button) 

// mount in the DOM
app.mount('#app')
