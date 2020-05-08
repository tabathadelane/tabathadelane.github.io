<template>
  <div id="app">
    <font-awesome-icon icon="coffee" />
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
  }
}
</script>

<style lang="scss">

.nav-link{
  font-size: 30px;
}
.dropdown-item {
  font-size: 24px;
};

// @import 'assets/style.css';

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';


</style>
