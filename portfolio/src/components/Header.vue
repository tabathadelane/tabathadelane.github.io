<template>
    <b-container>
        <b-row align-h="around">
            <b-col cols="4"><b-img fluid rounded="circle" alt="Headshot of Tabatha" src="../assets/img/headshot-crop.jpg"></b-img></b-col>

            <b-col cols="8">
                <h1>Tabatha Delane Young</h1>
                <h2>Full Stack Developer</h2>
                <h3> Portland Metro, Oregon</h3> <font-awesome-icon :icon="myIcon" />
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faSpinner
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>