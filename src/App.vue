<template>
        <div class="home-imageContainer">
            <img src="@/assets/characters.jpg" alt="" class="image" />
            <div class="onImage">

                <p class="text">
                    "It's not about how much we lost, <br> it's about how much we have left."
                    <br />
                    - Tony Stark (Avengers: Endgame)
                </p>
                <MyButton width="200px" @customClick="redirectToMarvel"> 
                    Marvel's Page 
                </MyButton>
            </div>
        </div>
    <RouterView />
</template>


<script>
import MyButton from '@/components/MyButton.vue'
import Footer from '@/components/Footer.vue'
export default {

    components:{
        MyButton,
        Footer
    },

    data(){
        return{
         
        }
    },

    methods:{
        redirectToMarvel() {
            window.location.href = 'https://www.marvel.com/';
        }
    }
    
}
</script>



<style lang="scss" >
    body{
        width: 100%;
        overflow-x: hidden;
    }
        .home-imageContainer {
            height: 100%;
            width: 100vw;
            position: relative;

            .image {
                width: 100%;
                height: 50vh;
            }

            .onImage {
                position: absolute;
                font-size: 1.1rem;  
                top: 40%;
                left: 25%;
                color: #fff;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .text {
                font-size: 1.4rem;
            }
        }
        @media (max-width: 650px) {
            .text {
                font-size: 1rem !important;
            }

        }

$bgColor: red;

.hello{
    background-color: $bgColor;
}

</style>