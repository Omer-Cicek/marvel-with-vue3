<template>
  <div class="detail">
    <h1 class="detail-title">{{title}}</h1>
    <div  v-if="!!characters" class="detail-container">
        <p class="detail-title" v-for="(character, index) in characters.items" :key="index">{{character.name}}</p>
    </div>
    <p class="detail-title" v-else> DEASDASDASD</p>

  </div>
</template>

<script>

import store from '../store'

export default{
    
    data(){
        return{
            title: store.state.detailData.title,
            characters: store.state.detailData.characters
        }
    },

    created(){
        console.log(store.state.detailData, " getting from detail page")
    }
}
</script>


<style lang="scss">
    .detail{
        min-height: 50vh;
        margin-top: -7px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &-container{
            width: 80%;
            min-height: 80%;
            border: 2px white solid;
            // display: flex;
            // align-items: center;
            // justify-content: center;
        }

        &-title{
            color: #fff;
            text-align: center;
            font-size: 2rem;
        }
    }
</style>
