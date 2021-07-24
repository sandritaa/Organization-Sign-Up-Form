<template>

<div class="card shadow-xl p-5">
    <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="organizationName" />
            <label for="inputtext">Organization Name</label>
        </span>
    </div>

     <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="firstName" />
            <label for="inputtext">Your First Name</label>
        </span>
    </div>


     <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="lastName" />
            <label for="inputtext">Your Last Name</label>
        </span>
    </div>

    <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
            <InputNumber id="inputnumber" v-model="phoneNumber" />
            <label for="inputnumber">Phone Number</label>
        </span>
    </div>

      <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="email" />
            <label for="inputtext">Email</label>
        </span>
    </div>

<!-- form layout -->
    <div class="p-field p-col-12">
        <label for="address">Address</label>
        <Textarea id="address" rows="4" v-model="address" />>
    </div>
    <div class="p-field p-col-12 p-md-6">
        <label for="city">City</label>
        <InputText id="city" type="text" v-model="city" />
    </div>
    <div class="p-field p-col-12 p-md-3">
        <label for="state">State</label>
          <InputText id="inputtext" type="text" v-model="state" />
    </div>
    <div class="p-field p-col-12 p-md-3">
        <label for="zip">Zip</label>
        <InputText id="zip" type="text" v-model="zip" />
    </div>

</div> 

</template>

<script>

// import area
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'


//export area
export default {
    data(){
        
    return{
        organizationName:'',
        firstName:'',
        lastName:'',
        phoneNumber: null,
        email:'',
        address: '',
        city: '',
        state: '',
        zip: null,


    }
    },

    //add components 
    components: {InputText,Textarea,Dropdown,InputNumber}

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