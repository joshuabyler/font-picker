<template>
  <div id="app">
    <picker></picker>
  </div>
</template>

<script>
import picker from './views/Picker.vue';

export default {
  name: 'app',
  components: {
    picker,
  },
};
</script>

<style lang="scss">
  @import '~@/assets/scss/main';
</style>
