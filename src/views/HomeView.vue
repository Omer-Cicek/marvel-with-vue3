<template>
  <main class="home">
    <div class="home-imageContainer">
        <img src="@/assets/characters.jpg" alt="" class="image" />
        <div class="onImage">

            <p>
                "It's not about how much we lost, <br> it's about how much we have left."
                <br />
                - Tony Stark (Avengers: Endgame)
            </p>
            <MyButton width="200px" @customClick="redirectToMarvel"> 
                Marvel's Page
            </MyButton>
        </div>
    </div>
  </main>
</template>




<script>
import MyButton from '@/components/MyButton.vue';
import { MD5 } from 'crypto-js';

export default {
  components: {
    MyButton
  },
  data(){
    return{
        baseUrl     : import.meta.env.VITE_BASE_URL,
        publicKey   : import.meta.env.VITE_PUBLIC_KEY,
        privateKey  : import.meta.env.VITE_PRIVATE_KEY,
        timestamp   : Date.now().toString(),
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
  fetchHeroes() {
    const url = `${this.baseUrl}?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.getHash()}`;
    console.log(url);
    let response = await fetch()
  },
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
        top: 50%;
        left: 25%;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
  }
}
</style>
