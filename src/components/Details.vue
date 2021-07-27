<template>
    <div class="form-demo">
        <div class="card shadow-md rounded-xl p-10 grid justify-items-center">

            <h5 class="text-center text-xl mb-3">
                More about the organization
            </h5>

            <span class="p-float-label w-full m-3">
                <Textarea class="w-full" id="textarea" v-model="OrgDescription" rows="3" />
                <label for="textarea">Orzanization description:</label>
            </span>
        

        
            <span class="p-float-label w-full m-3">
                <Textarea id="textarea" v-model="VisionOrganization" rows="3" />
                <label for="textarea">Vision of Organization:</label>
            </span>
        

        
            <span class="p-float-label w-full m-3">
                <Chips class="w-full" :allowDuplicate="false" id="chips" v-model="DonationsNeeded" />
                <label for="chips">Donations needed</label>
            </span>
            

            <div class="grid grid-cols-2 justify-evenly w-full">
                <div class="my-3 flex flex-col justify-center">
                    <label for="FileUpload">Profile Picture</label>
                    <FileUpload mode="basic" name="demo[]" url="./upload" />
                    
                </div>

                <div class="my-3 flex flex-col justify-center">
                    <label for="FileUpload">Banner</label>
                    <FileUpload mode="basic" name="demo[]" url="./upload" />
                    
                </div>
            </div>
            
            

        </div>
    </div>
</template>

<script>

import FileUpload from 'primevue/fileupload';


export default {
    data(){
        return{
            DonationsNeeded: null,
            OrgDescription: null,
            VisionOrganization:null,
        }
    },
    components:{
        FileUpload,
    },

    methods:{
        
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