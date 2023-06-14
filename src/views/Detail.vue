<template>
    <div class="detail">
        
        <MyButton width="200px" @customClick="redirectToHome" class="button"> 
            <i class="fa-solid fa-circle-left"></i>
             Homepage
        </MyButton>
        <div  v-if="!!characters" class="detail-container">
            <!-- Detail Image -->
            <div class="detail-container-image image">
                <img class="image" :src="imageSource" alt="marvel" >
            </div>
            <!-- Info Container -->
            <div class="detail-container-infos">
                <!-- title -->
                <h1 class="detail-title title">{{title}}</h1>
                <!-- Creators Container -->
                <div class="detail-container-creators">
                    <!-- penciller -->
                    <div class="creator">
                        <h6 class="underline">Penciller</h6>
                        <span class="detail-title penciller" v-for="(item, index) in penciller" :key="index">{{item.name}} <br></span>
                        <p v-if="penciller.length == 0" > No penciller data</p>
                    </div>
                    <!-- writer -->
                    <div class="creator right">
                        <h6 class="underline">Writer</h6>
                        <span class="detail-title" v-for="(item, index) in writer" :key="index">{{item.name}}<br></span>
                        <p v-if="writer.length == 0" > No writer data</p>
                    </div>
                </div>
                <!-- description -->
                <p v-if="!!description.length" class="detail-container-desc " v-html="description">
                </p>
                <!-- if there is no desc -->
                <p v-else class="detail-container-desc  noData">
                    There is no description for this content.
                </p>
            </div>
        </div>
        <p class="detail-title" v-else > There is no data to show!</p>

    </div>
    <p class="footer" style="color: white"> &#169; All rights reserved. </p>
</template>

<script>

import store from '../store'
import MyButton from '@/components/MyButton.vue'

export default{
    components:{
        MyButton
    },
    
    data(){
        return{
            title           : store.state.detailData.title ,                                                             //title data from store
            characters      : store.state.detailData.characters,                                                        //characters data from store
            imageSource     : store.state.detailData.thumbnail.path+'.'+store.state.detailData.thumbnail.extension,     //image data from store
            description     : store.state.detailData.description ?  store.state.detailData.description : "",            //description data from store
            penciller       : [],                                                                                       //penciller data
            writer          : [],                                                                                       //writer data 
            data            : {},                                                                          
            localstorageData: {}
        }
    },
    methods:{
        redirectToHome(){
             this.$router.push('/')
        }
    },

    created(){
        this.localstorageData = JSON.parse( localStorage.getItem('marvelData') )
        this.data = !!store.state.detailData ? store.state.detailData :  localstorageData
        const creators = store.state.detailData.creators.items  // gets the data from store and push writer and penciller data to display at UI
        creators.map(creator => {
            creator.role.includes("penciller") ? this.penciller.push(creator) : 
                creator.role.includes("writer") ? this.writer.push(creator) : null
        })
    }
}
</script>


<style lang="scss">
body{
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    .footer{
        text-align: center;
    }
    .button{
        position: absolute;
        top: 30px;
        left:50px;
    }
    .detail {
        position: relative;
        min-height: 50vh;
        margin-top: -7px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &-container {
            // width: 60%;
            border: 2px white solid;
            min-height: 605px;
            height: auto;
            display: flex;
            justify-content: space-between;
            margin: 30px;

            &-image {
                height: 100%;
                width: 40%;

                .image {
                width: 100%;
                min-height: 650px;
                // height: 100%;
                object-fit: fill;
                }
            }

            &-infos{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                margin: 20px;
                width: 60%;
            }

            &-desc{

                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                text-align: justify;
                width: 80%;
            }
            &-creators{
                display: flex;
                align-items: flex-start;
                width: 80%;
                margin-bottom: 10px;
            }
            
        }

        &-title {
        color: #fff;
        text-align: center;
        font-size: 1rem;
        }

        .creator{
            width: 50%;
            color: white;
        }

        .right{
            text-align: right;
        }

        .noData{
            text-align: center;
            font-size: 1.5rem;
        }

        .underline{
            text-decoration: underline;
            font-size: 1.4rem;
        }

        .title{
            font-size: 1.6rem;
        }

       @media (max-width: 1800px) {
            .button{
                top: -10px;
            }
        }

        @media (max-width: 1300px) {
            .detail-container{
                width: 100%;
                border: none;

                &-image{
                    padding: 10px;
                }
            }
        }
        @media (max-width: 750px) {
            .detail-container{
                flex-direction: column;

                &-image{
                    width: 100%
                }

                &-infos{
                    width: 100%;
                    margin: 0px;
                }
            }
        }
  }

</style>
