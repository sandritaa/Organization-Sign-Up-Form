<template>
    <div class="form-demo">
        <div class="card shadow-md rounded-xl p-10 grid justify-items-center">
            <h1 class="text-center text-xl mb-6">Servicios de la organizacion</h1>

        </div>
    </div>
</template>

<script>

import Service from './serviceClass'

export default {
    data(){
        return{
            services:[]
        }
    },

    //Just to see if everything works correctly
    created(){
        console.table(new Service())
    },

    methods:{

    }
}
</script>

<style>

</style>