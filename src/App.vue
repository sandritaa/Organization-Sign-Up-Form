<template>

    <!-- header -->
    <header class="absolute flex flex-row gap-4 inset-x-0 top-0 items-baseline justify-center shadow-md">
        <p class="text-2xl">RedSol</p>
        <p class="text-md">Organizations sign up</p>
    </header>

    <div class="content flex justify-center align-middle">
        
        <!--<Details class=""/>-->

        <Info/>


        
    </div>
    
    <!-- footer -->
    <footer class="absolute inset-x-0 bottom-0">RedSol™</footer>

</template>

<script>
import Details from '@/components/Details.vue'
import Info from '@/components/Info.vue'
//comment
export default {
  name: 'App',
  components: {
      Details,
      Info,
  }
}

</script>


<style scoped>

footer, header{
    text-align: center;
    height: 40px;

}

.content{
    position: relative;
    height: 90vh;
    min-width: 100vw;
    margin-top: 30px;
}

</style>
