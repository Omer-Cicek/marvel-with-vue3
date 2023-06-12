<template>
  <div>
    <!-- ToastifySuccess content -->
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';

export default {
  methods: {
    toastSuccess(text) {
      toast(text, {
        type: 'success'
      });
    },
    toastWarning(text) {
      toast(text, {
        type: 'warning'
      });
    },
    toastError(text) {
      toast(text, {
        type: 'error'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  /* Styles for ToastifySuccess */
</style>