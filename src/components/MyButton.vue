<template>
    <button class="custom-button" :class="buttonClass" :style="{ width: width }" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonClass: {
          type: String,
          default: '',
        },
        width: {
          type: String,
          default: '',
        },
    },
    methods: {
        handleClick() { // Emit a custom event when the button is clicked
        
            this.$emit('customClick');
        },
    },
};
</script>

<style scoped lang="scss">
.custom-button {
    background-color: #EE4B2B;
    color: #ffffff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #800020;
    }
}

</style>
