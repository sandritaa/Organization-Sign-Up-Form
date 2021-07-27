<template>
    <div class="form-demo ">
        <div class="card shadow-md rounded-xl p-5">
            <h5 class="text-center text-xl mb-6">More about the organization</h5>

            <div class="p-field p-col-12 p-md-4">
                <span class="p-float-label">
                    <Textarea id="textarea" v-model="OrgDescription" rows="3" />
                    <label for="textarea">Orzanization description:</label>
                </span>
            </div>

            <div class="p-field p-col-12 p-md-4">
                <span class="p-float-label">
                    <Textarea id="textarea" v-model="VisionOrganization" rows="3" />
                    <label for="textarea">Vision of Organization:</label>
                </span>
            </div>

            <div class="p-field p-col-12 p-md-4">
                <span class="p-float-label">
                    <Chips class="w-11/12" :allowDuplicate="false" id="chips" v-model="DonationsNeeded" />
                    <label for="chips">Donations needed</label>
                </span>
            </div>

            <div>
                <label for="FileUpload">Profile Picture</label>
                <FileUpload mode="basic" name="demo[]" url="./upload" />
                
            </div>

            <div class="mt-5">
                <label for="FileUpload">Banner</label>
                <FileUpload mode="basic" name="demo[]" url="./upload" />
                
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