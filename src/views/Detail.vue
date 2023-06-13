<template>
  <div class="detail">
    <div  v-if="!!characters" class="detail-container">
        <div class="detail-container-image image">
            <img class="image" :src="imageSource" alt="marvel" >
        </div>
        <div class="detail-container-infos">
            <h1 class="detail-title title">{{title}}</h1>
            <div class="detail-container-creators">
                <div class="creator">
                    <h6 class="underline">Penciller</h6>
                    <span class="detail-title penciller" v-for="(item, index) in penciller" :key="index">{{item.name}} <br></span>
                    <p v-if="penciller.length == 0" > No penciller data</p>
                </div>
                <div class="creator right">
                    <h6 class="underline">Writer</h6>
                    <span class="detail-title" v-for="(item, index) in writer" :key="index">{{item.name}}<br></span>
                    <p v-if="writer.length == 0" > No writer data</p>
                </div>
            </div>
            <p v-if="!!description.length" class="detail-container-desc " v-html="description">
            </p>
            <p v-else class="detail-container-desc  noData">
                There is no description for this content.
            </p>
        </div>
    </div>
    <p class="detail-title" v-else > There is no data to show!</p>

  <p class="detail-footer"> &#169; All rights reserved. </p>
  </div>
</template>

<script>

import store from '../store'

export default{
    
    data(){
        return{
            title       : store.state.detailData.title,
            characters  : store.state.detailData.characters,
            imageSource : store.state.detailData.thumbnail.path+'.'+store.state.detailData.thumbnail.extension,
            description : store.state.detailData.description ?  store.state.detailData.description : "",
            penciller   : [],
            writer      : [],
        }
    },

    created(){
        const creators = store.state.detailData.creators.items
        creators.map(creator => {
            creator.role.includes("penciller") ? this.penciller.push(creator) : 
                creator.role.includes("writer") ? this.writer.push(creator) : null
        })
        console.log(this.penciller);
    }
}
</script>


<style lang="scss">

    .detail {
        min-height: 50vh;
        margin-top: -7px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &-container {
            width: 60%;
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
