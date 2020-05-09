<template>
    <b-container fluid="md" class="center-header">
        <b-row align-h="around" align-v="center">
            <b-col sm="4"><b-img class="headshot center" fluid rounded="circle" alt="Headshot of Tabatha" src="../assets/img/headshot-crop.jpg"></b-img></b-col>

            <b-col sm="8" >
                <h1>Tabatha Delane Young</h1>
                <h2>Full Stack Developer</h2>
                <h4>Portland Metro, Oregon</h4>
                <h1> <font-awesome-icon :icon="icoffee" /><font-awesome-icon :icon="itree" /><font-awesome-icon :icon="idice" /><font-awesome-icon :icon="icat" /><font-awesome-icon :icon="ilaptop" /></h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee, faTree, faDiceD20, faCat, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      icoffee: faCoffee, 
      itree: faTree,
      idice: faDiceD20,
      icat: faCat,
      ilaptop: faLaptopCode,
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.headshot {
  height: 80%;
  width: 80%;
  border: 6px solid rgba(128, 0, 128, 0.637);
}
.center-header {
  text-align: center;
}
.center {
  margin: auto;
}
h1, h2, h4 {
  font-weight: 700;
}
svg {
  margin: 10px;
}
</style>