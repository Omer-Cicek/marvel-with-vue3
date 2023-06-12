<template>
  <a class="card-link" href="#">
    <img class="post-image" :src="image" />
    <article class="blog-card">
      <div class="article-details">
        <h1 class="post-category">{{ title }}</h1>
        <div></div>
        <h6 class="creators">Creators</h6>
        <span v-if="creators.length != 0">
          <!-- <p class="post-title" v-for="(creator, index) in creators.items" :key="index">{{ creator.name }}</p> -->
          <button @click="$emit('open-popup')">trigger button</button>
        </span>
        <span v-if="creators.length === 0">
          <h3 class="post-title">Creator info not found</h3>
        </span>
        <h6 class="creators">Description</h6>
        <p class="post-description">{{ desc }}</p>
      </div>
    </article>
  </a>
</template>

<script>
import imgNotFound from '../assets/imgNotFound.png'
    export default {
        props: {
            title: {
                type: String,
                default: 'Title not Found!'
            },
            creators: {
                type: Array,
                default: () => [] 
            },
            desc: {
                type: String,
                default: 'Description not Found!'
            },
            image: {
                type: String,
                default: imgNotFound
            },
            width: {
                type: String,
                default: '700px'
            },
            height: {
                type: String,
                default: '300px'
            },
        },
        data() {
            return {
            };
        }
    }
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
    display: flex;
    flex-direction: row;
    background: $white;
    box-shadow: 0 0.1875rem 1.5rem $shadow;
    border-end-end-radius: 0.375rem;
    border-end-start-radius: 0.375rem;
    overflow: hidden;
    min-height: 400px;
    width: 400px;

}

.card-link {
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
  }
  &:hover .post-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.post-image {
    @include transition(opacity 0.3s ease);
    display: block;
    max-width: 400px;
    width: 100%;
    height: 400px;
    object-fit: fill ;
}

.article-details {
    flex: 1;
    padding: 1.5rem;
}

.post-category {
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
  border-bottom: 0.125rem solid $border;
}

.creators{
    border-bottom: 0.125rem solid $border;
     display: inline-block;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.0625rem;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.25rem 0;
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