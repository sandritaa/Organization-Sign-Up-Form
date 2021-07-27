<template>
<div class="form-demo">
    <div class="card shadow-xl rounded-xl p-5 mx-auto">
        <div class="sm:grid grid-cols-2 p-5 justify-items-center">

            <h3 class="text-center text-xl mb-6">Basic Information</h3>

            <!-- Organization name -->
            <div class=" w-full p-field p-col-16 p-md-4 col-span-2">
                <span class="mx-5 p-float-label">
                    <InputText class="w-full" id="inputtext" type="text" v-model="organizationName" /> <!--vmodel is our link. input -->
                    <label for="inputtext">Organization Name</label>
                </span>
            </div>
        
        

            <!-- Name user input -->
            <div class="p-field p-col-12 p-md-4 w-full ">
                <span class="p-float-label mx-5">
                    <InputText class="w-full" id="inputtext" type="text" v-model="firstName" />
                    <label for="inputtext">Your First Name</label>
                </span>
            </div>

            <!-- lastname -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5">
                    <InputText class="w-full" id="inputtext" type="text" v-model="lastName" />
                    <label for="inputtext">Your Last Name</label>
                </span>
            </div>
        
            <!-- phone number -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5">
                    <InputNumber class="w-full" id="inputnumber" v-model="phoneNumber" />
                    <label for="inputnumber">Phone Number</label>
                </span>
            </div>

            <!-- email -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5">
                    <InputText class="w-full" id="inputtext" type="email" v-model="email" />
                    <label for="inputtext">Email</label>
                </span>
            </div>

            
            <!-- Main address -->

            <div class="p-field p-col-12 p-md-4 col-span-2 w-full">
                <span class="p-float-label mx-5">
                    <InputText class="w-full" id="inputtext" type="text" v-model="street" />
                    <label for="inputtext">Street</label>
                </span>
            </div>

            <!-- country -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5" @click="resetStateCity">
                    <Dropdown class="w-full" id="dropdown" v-model="country" :options="allCountries" optionLabel="name" />
                    <label for="dropdown">Country</label>
                </span>
            </div>

            <!-- state -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5" @click="getState">
                    <Dropdown class="w-full" id="dropdown" v-model="state" :options="states" optionLabel="name" />
                    <label for="dropdown">State</label>
                </span>
            </div>


            <!-- city -->
            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5" @click="getCity">
                    <Dropdown class="w-full " id="dropdown" v-model="city" :options="cities" optionLabel="name" />
                    <label for="dropdown">City</label>
                </span>
            </div>

            <div class="p-field p-col-12 p-md-4 w-full">
                <span class="p-float-label mx-5">
                    <InputNumber class="w-full" id="inputnumber" v-model="zip" />
                    <label for="inputnumber">Zip</label>
                </span>
            </div>

            
        </div>
    </div> 
</div>
</template>

<script>

// import area. Only import here if using only in this component file. If it is used across multiple files, be sure to add to our main.js file!!!
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import { Country, State, City }  from 'country-state-city';


//export area
export default {

    data(){
        return{
            organizationName:null,
            firstName:null,
            lastName:null,
            phoneNumber: null,
            email:null,

            //Location
            street: null,
            country: null,
            city: null,
            state: null,
            zip: null,

            // Variable contaiun a list of elements needed to display in the dropdown menu
            allCountries:null,
            states:null,
            cities:null,
        }
    },


    //add components 
    components: {InputText,Textarea,Dropdown,InputNumber},

    async created(){
        this.allCountries = await Country.getAllCountries()
    },

    methods:{
        async getState(){
            this.city = null;
            if(this.country){
               
                this.states = await State.getStatesOfCountry(this.country.isoCode)
            }
        },
        async getCity(){
            if(this.state){

                this.cities = await City.getCitiesOfState(this.country.isoCode, this.state.isoCode)
            }
        },
        resetStateCity(){
            this.state = null;
            this.city = null;
        }
        
    }

}
</script>

<style scoped>
    .form-demo {
        margin-top: 2rem;
        position: relative;
        
    }

    .card{
        min-width: 320px;
        width: 90%;
        max-width: 720px;
        margin: auto;
    }

    .p-field {
        margin-bottom: 1.5rem;
    }

    Textarea, Chips{
        width: 91.6%;
    }


</style>