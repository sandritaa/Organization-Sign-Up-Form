<template>
<div class="form-demo">
    <div class="card shadow-xl rounded-xl p-5 mx-auto">
        <div class="sm:grid grid-cols-2 p-5 justify-items-center">

            <h3 class="text-center text-xl mb-6 col-span-2">Basic Information</h3>

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
                    <InputNumber class="w-full" id="inputnumber" v-model="phoneNumber" :useGrouping="false"/>
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

            <!-- main -->

            <div @click="print" class="p-field p-col-12 p-md-4 col-span-2 w-full">
                <span class="p-float-label mx-5">
                    <InputText class="w-full" @focus="initAutocomplete" id="autocomplete" type="text"  placeholder="Address"/>
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

/**
 *      IMPORT FOR OUR SET UP FUNCTION
 */
import {ref, onMounted} from 'vue'


//export area
export default {
    
    setup(){

        /**
         *      VAR DECLARATION
         */
        const organizationName = ref('')
        const firstName = ref('')
        const lastName = ref('')
        const phoneNumber = ref(null)
        const email = ref('');

        let address = null;
        let autocomplete = null
        let input = null;



        /**
         *      THE NEXT CODE WILL BE EXECUTED WHEN THIS COMPONENT IS MOUNTED.
         */

        const print=()=>{
            console.table(address)
        }

        onMounted(()=>{
            input = document.getElementById('autocomplete')
            autocomplete = new google.maps.places.Autocomplete(input);
        })

        function initAutocomplete(){            
            input.focus();
            autocomplete.addListener("place_changed",fillInAddress());
        };

        function fillInAddress() {
            address = autocomplete.getPlace();
        }
        

        return {
            organizationName,
            firstName,
            lastName,
            phoneNumber,
            email,

            //Location
            address,
            print,
            initAutocomplete,
            fillInAddress,

        }
    
    },

    components: {
        InputText,
        Textarea,
        Dropdown,
        InputNumber,
    },
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