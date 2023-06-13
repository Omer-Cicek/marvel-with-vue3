<template>
  <div @click.stop="" class="popupContainer">
    <my-button @click.stop="openPopup">
      <i class="fa-solid fa-circle-info icon"></i>
    </my-button>
    <div v-if="isOpen" class="popup">
      <div class="popup-content">
        <h2>{{ title }}</h2>
        <p v-for="content in content" :key="content">{{ content.name }} ({{content.role}})</p>
        <p v-if="content.length === 0">There is no creator info</p>
        <my-button @click.stop="closePopup">Close</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import MyButton from '../components/MyButton.vue';

export default {
  components: {
    MyButton,
  },
  props: {
    title: String,
    content: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const isOpen = ref(false);

    function openPopup() {
      isOpen.value = true;
    }

    function closePopup() {
      isOpen.value = false;
    }

    // Close popup when Esc key is pressed
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        closePopup();
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyPress);
    });

    return {
      isOpen,
      openPopup,
      closePopup,
    };
  },
};
</script>

<style scoped lang="scss" >

    // .popupContainer{
    //     min-width: 400px;
    // }
    
    .popup {
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        &-content {
            background-color: #fff;
            padding: 2rem;
            border-radius: 0.5rem;
            text-align: center;
        }
    }

    h2{
        font-weight: bold;
        font-size: 1.3rem;
        text-decoration: underline;
    }

    .icon{
        &:hover {
            color: red !important;
        }
    }

    button {
        margin-top: 1rem;
    }
</style>
