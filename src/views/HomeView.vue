<template>
    <main class="home">
        <div class="cardsDiv">
            <h1 style="color:white; text-align: center; font-size:3rem; font-weight: bold; margin: 20px">Marvel App</h1>
            <h4 v-if="loading" style="color:white; text-align: center; font-size:2rem; font-weight: bold; margin: 20px">Loading...</h4>
            <div class="cardsDiv-inner">
                <MyCard v-for="hero in marvelData" :key="hero.id" :image="hero.thumbnail.path+'.'+hero.thumbnail.extension" :desc="hero.description" :title="hero.title" :creators="hero.creators.items" :width="cardWidth" :height="cardHeight" @click="detailHandler(hero)"/>
            </div>
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
import store from '../store'

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
            cardHeight  : '300px',
            loading     : false
        }
    },

    methods: {


        detailHandler(hero){
            console.log("rrr", hero);
            console.log("hero.creators", hero.creators);
            
            store.commit('addDetailData', hero) 
        },

        getHash() {
            return MD5(
            this.timestamp + this.privateKey + this.publicKey
            ).toString();
        },

        async fetchHeroes() {
            this.loading= true
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
            }).catch(err =>  this.$refs.toastify.toastError('An error occured!'))
            .finally(() => this.loading= false)
        }
    },

    created(){
        store.commit('deleteDetailData')
    },

    mounted(){
        this.fetchHeroes()
    }
};
</script>

<style lang="scss" scoped>
    .home {
        

        .cardsDiv {
            background-color: #010101;
            min-height: 50vh;
            margin-top:-7px;
            width: 100%;
            padding: 20px;
            &-inner{
                margin: auto;
                width: 80%;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                align-items:baseline;
                justify-content: center;
            }
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
