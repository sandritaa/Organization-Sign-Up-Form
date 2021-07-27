<template>

    <div class="relative">
        <!-- header -->
        <header class="fixed  flex flex-row gap-4 inset-x-0 top-0 items-baseline justify-center shadow-md z-10 bg-white">
            <p class="text-2xl">RedSol</p>
            <p class="text-md">Organizations sign up</p>
        </header>

        <div class="content flex justify-center align-middle my-10">
            
            <!--<Details />-->

            <Info/>
        </div>
        
        <!-- footer -->
        <footer class="fixed inset-x-0 bottom-0 z-10 bg-white">RedSol™</footer>
    </div>
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
    min-height: 90vh;
    width: 90vw;
    margin-top: 30px;
}

</style>
