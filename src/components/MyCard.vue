<template>
  <div class="card-link" @click="redirectToDetail">
    <my-popup title="Creators" :content="creators" class="card-link-popup"></my-popup>
    <img class="post-image" :src="image" />
    <article class="blog-card">
      <div class="article-details">
        <div class="creators">
          <h1 class="post-category post-title">{{ title }}</h1>
        </div>
        <p class="post-description" v-if="desc">
          <span class="post-description-title">Description:</span> {{ desc }}
        </p>
        <p class="post-description" v-else>
          <span class="post-description-title">Description:</span> No description
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import imgNotFound from '../assets/imgNotFound.png';
import MyPopup from '../components/MyPopup.vue';

export default {
  components: {
    MyPopup,
  },
  props: {
    title: {
      type: String,
      default: 'Title not Found!',
    },
    creators: {
      type: Array,
      default: () => [],
    },
    desc: {
      type: String,
      default: 'Description not Found!',
    },
    image: {
      type: String,
      default: imgNotFound,
    },
  },
  methods:{
    redirectToDetail(e){
        console.log("sa", e.target);
        this.$router.push('/detail')
    }
  }
};
</script>
<style lang="scss" scoped>

$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62; 
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
    transition: $args;
}


body {
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: $text;
    background: $bg;
    font-size: 0.9375rem;
    min-height: 100vh;
    margin: 0;
    line-height: 1.6;
    align-items: center;
    justify-content: center;
    text-rendering: optimizeLegibility;
    border: 1px red solid;
}

#root {
    width: 30rem;
    height: 11rem;
}

.blog-card {
    // position: relative;
    display: flex;
    flex-direction: row;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem $shadow;
    border-end-end-radius: 0.375rem;
    border-end-start-radius: 0.375rem;
    overflow: hidden;
    height: 500px;
    width: 400px;
}

.card-link {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;

    &:hover .post-title {
        @include transition(color 0.3s ease);
        color: $red;
        cursor: pointer;
    }
    &-popup{
        position: absolute;
        right: 10px;
        top: 10px;
    }
}

.article-details {
    flex: 1;
    padding: 1.5rem;
}

.post{
    &-category {
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 0.0625rem;
        margin: 0 0 12px 0;
        padding: 0 0 2px 0;
        border-bottom: 0.125rem solid $border;
        line-height: 1.3;
    }
    &-description{
        &-title{
            font-weight: bold
        }
    }
    &-image {
        @include transition(opacity 0.3s ease);
        display: block;
        max-width: 400px;
        width: 100%;
        height: 400px;
        object-fit: fill ;
    }
}

.creators{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: bold;
    &-title{
        border-bottom: 0.125rem solid $border;
        display: inline-block;
        text-transform: uppercase;
        line-height: 1;
        letter-spacing: 0.0625rem;
        margin: 0 0 0.75rem 0;
        padding: 0 0 0.25rem 0;
    }

}

    .blog-card:hover{
        @include transition(color 0.3s ease);
        min-height: 500px;
        height: auto;
    }

@media (max-width: 40rem) {
  #root {
    width: 18rem;
    height: 27.25rem;
  }
  
  .blog-card {
    flex-wrap: wrap;
  }
}


</style>