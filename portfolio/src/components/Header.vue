<template>
    <b-container fluid="md" class="center-header">
        <b-row align-h="around" align-v="center">
            <b-col sm="4"><b-img class="headshot center" fluid rounded="circle" alt="Headshot of Tabatha" src="../assets/img/headshot-crop.jpg"></b-img></b-col>

            <b-col sm="8" >
                <h1>Tabatha Delane Young</h1>
                <h2>Full Stack Developer</h2>
                <h3> Portland Metro, Oregon</h3> <font-awesome-icon :icon="myIcon" />
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faCoffee
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
}
.center-header {
  text-align: center;
}
.center {
  margin: auto;
}
</style>