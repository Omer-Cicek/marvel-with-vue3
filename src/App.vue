<template>
    <header>
    </header>
    <RouterView />
</template>


<script>
export default {
    data(){
        return{
         
        }
    },
    mounted() {
        console.log('BASE_URL:', import.meta.env.VITE_BASE_URL);
    },
}
</script>



<style lang="scss" >

$bgColor: red;

.hello{
    background-color: $bgColor;
}

</style>