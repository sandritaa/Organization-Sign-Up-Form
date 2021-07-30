<!--root component that is being registered in main.js-->

<!--html template-->
<template>
<div class= relative> <!---->
    <!-- header -->
    <header class="fixed  flex flex-row gap-4 inset-x-0 top-0 items-baseline justify-center shadow-md z-10 bg-white">
        <p class="text-2xl">RedSol</p>
        <p class="text-md">Organizations sign up</p>
    </header>

    <!-- page container -->
    <div class="content flex flex-col justify-center align-middle my-10 mx-auto">

        <!--Whatever we add here, will be displayed-->
        <Info v-if="page==0"></Info>
        <Details v-if="page==1"></Details>
        <Services v-if="page==2"></Services>

        <!-- button -->
        <div class="flex justify-center align-middle mt-7"> <!--how we plug-in tailwind css-->
            <Button label="previous" @click="decrease"  class="p-button-link " />
            <Button label="next" @click="increase"  class="p-button-link " /> <!--here we plug in our method-->
        </div>
    </div>

    <!-- footer -->
    <footer class="fixed inset-x-0 bottom-0 z-10 bg-white">RedSol™</footer>
</div>
</template>

<script>
import Details from '@/components/Details.vue'
import Info from '@/components/Info.vue'
import Services from './components/Services.vue'

// export component object
// anything that we are exporting or "applying" below, is being translated or put into affect in our template area 
// variables live here
export default {
    data(){
        
      return{
          //here we create our variables 
          page: 0 //this is our starting point
      }
    },

    //here we declare our components 
    name: 'App',
    components: {
        Details,
        Info,
        Services
        
    },
    //   here we add our functions 
    methods: {
        increase(){
            if(this.page < 2)this.page++
        },
        decrease(){
            if(this.page > 0)this.page-- 
        }
    },
  
}

</script>


<style scoped>

footer, header{
    text-align: center;
    height: 40px;

}

.content{
    position: relative;
    min-height: 90vh;
    width: 90vw;
    margin-top: 30px;
}


</style>
