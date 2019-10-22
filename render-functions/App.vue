<template>
  <div id="app">
    <button @click.prevent="toggleHandler">Toggle Modal</button>
    <!-- <modal-create-element message="Hello World"></modal-create-element> -->
    <modal-jsx message="Hello"></modal-jsx>
  </div>
</template>

<script>
// import ModalCreateElement from './ModalCreateElement.vue'
import ModalJsx from './ModalJsx.vue';

export default {
  name: 'App',
  data() {
      return {
          show: false,
      };
  },
  components: {
      ModalJsx
  },
  methods: {
      toggleHandler() {
          this.show = !this.show;
      }
  }
};
</script>

<style>
body {
  background: #cecece;
}
.modal {
  position: absolute;
  top: 50%;
  left:50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 250px;
  background: #fff;
  padding: 15px;
}
.modal > .message {
  margin: 0;
  margin-bottom: 10px;
}
</style>
