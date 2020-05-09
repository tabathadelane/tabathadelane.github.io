<template>
  <div id="app">
    <!-- <font-awesome-icon icon="dice-d20" /> -->
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
$primary: rgba(128, 0, 128, 0.637);

body {
  background-color:rgb(255, 241, 234) !important;
}


// $font-family-base: 'Lato', sans-serif;
// $font-family-base: 'Neuton', serif;
h1, h2, h3, h4, nav {
  color: $primary;
  font-family: 'Neuton', serif !important;
};

svg {
  color: $primary;
}

.navbar-dark .nav-link {
  & a{
    color: rgba(255, 255, 255, 0.5);
  }
  & a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
};
.navbar-light .nav-link {
  & a{
    color: rgba(0, 0, 0, 0.6);
  }
  & a:hover {
    color: rgba(0, 0, 0, 0.9);
  }
};
.navbar-brand {
  color:rgb(255, 241, 234) !important;
}
#app {
  padding: 20px;
  margin: 20px;
}

// @import 'assets/style.css';

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';


</style>
