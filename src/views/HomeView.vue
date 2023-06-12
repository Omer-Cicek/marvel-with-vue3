<template>
    <main class="home">
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
        <div class="cardsDiv">
            <MyCard v-for="hero in marvelData" :key="hero.id" :image="hero.thumbnail.path+'.'+hero.thumbnail.extension" :desc="hero.description" :title="hero.title" :creators="hero.creators" :width="cardWidth" :height="cardHeight" />
        </div>
        <toastify ref="toastify" />
    </main>
</template>




<script>
import MyButton from '@/components/MyButton.vue';
import { MD5 } from 'crypto-js';
import axios from 'axios';
import MyCard from '@/components/MyCard.vue';
import Toastify from '../components/Toastify.vue';


export default {
    components: {
        MyButton,
        MyCard,
        Toastify,
    },

    data(){
        return{
            baseUrl     : import.meta.env.VITE_BASE_URL,
            publicKey   : import.meta.env.VITE_PUBLIC_KEY,
            privateKey  : import.meta.env.VITE_PRIVATE_KEY,
            timestamp   : Date.now().toString(),
            marvelData  : [],
            cardWidth   : '700px',
            cardHeight  : '300px'
        }
    },

    methods: {
        redirectToMarvel() {
            window.location.href = 'https://www.marvel.com/';
        },

        getHash() {
            return MD5(
            this.timestamp + this.privateKey + this.publicKey
            ).toString();
        },

        async fetchHeroes() {
            const url = `${this.baseUrl}/v1/public/comics?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.getHash()}`;
            console.log(url);
            axios.get(url).then(res =>{
                console.log(res);
                if(res.data.code === 200){
                    this.marvelData = res.data.data.results
                    console.log(res.data.data,"resss");
                    this.$refs.toastify.toastSuccess('Data successfully uploaded!');
                }else{

                }
            })
        }
    },

    mounted(){
        this.fetchHeroes()
    }
};
</script>

<style lang="scss" scoped>
    .home {
        &-imageContainer {
            height: 100%;
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

        .cardsDiv {
            background-color: #010101;
            min-height: 50vh;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: center;
            margin-top:-7px;
            gap: 20px;
            width: 100%;
            padding: 20px;
        }
    }

    @media (max-width: 650px) {
        .text {
            font-size: 1rem !important;
        }
        .cardsDiv {
            flex-direction: column;
        }
    }

    @media (max-height: 530px) {
        .text {
            font-size: 1rem !important;
        }
        .onImage {  
            top: 20% !important;
        }
    }
</style>
