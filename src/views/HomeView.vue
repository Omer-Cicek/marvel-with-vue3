<template>
    <main class="home">
        <!-- All cards parent div -->
        <div class="cardsDiv">
            <h1 style="color:white; text-align: center; font-size:3rem; font-weight: bold; margin: 20px">Marvel App</h1>
            <!-- loading info for UX -->
            <h4 v-if="loading" style="color:white; text-align: center; font-size:2rem; font-weight: bold; margin: 20px">Loading...</h4>
            <div class="cardsDiv-inner">
                <!-- cards -->
                <MyCard v-for="hero in marvelData" :key="hero.id" :image="hero.thumbnail.path+'.'+hero.thumbnail.extension" :desc="hero.description" :title="hero.title" :creators="hero.creators.items" :width="cardWidth" :height="cardHeight" @click="detailHandler(hero)"/>
            </div>
            <!-- footer -->
          <p class="detail-footer" style="color: white; text-align: center" v-if="!loading"> &#169; All rights reserved. </p>
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
            baseUrl     : import.meta.env.VITE_BASE_URL,    //baseURL --> https:/marvel.com
            publicKey   : import.meta.env.VITE_PUBLIC_KEY,  //public key
            privateKey  : import.meta.env.VITE_PRIVATE_KEY, //private key
            timestamp   : Date.now().toString(),            //timestamp for hash to request
            marvelData  : [],                               //Data that displaying with card componenet
            cardWidth   : '700px',                          //card's width
            cardHeight  : '300px',                          //card's height
            loading     : false                             //loading state
        }
    },

    methods: {
        detailHandler(hero){                                //set data to store
            store.commit('addDetailData', hero) 
        },

        getHash() {                                         // gives hash for marvel Data request
            return MD5(
            this.timestamp + this.privateKey + this.publicKey
            ).toString();
        },

        async fetchHeroes() {                               //fetch MarvelData
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
                    this.$refs.toastify.toastError('An error occured!')
                }
            }).catch(err =>  this.$refs.toastify.toastError('An error occured!'))
            .finally(() => this.loading= false)
        }
    },

    created(){                                              //delete store data to get updated data
        store.commit('deleteDetailData')
    },

    mounted(){                                              //calls fetchHeroes 
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
