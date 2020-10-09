<template>
    <div>
        <div><h1>Contact Me</h1></div>
              <h3><font-awesome-icon :icon="iresume" />
              <a href="https://drive.google.com/file/d/1WzmZMEYfXqJ7Xa3p-K1PyB3fYZ5iGVxl/view?usp=sharing" target="_blank"><i class="fas fa-sticky-note"></i>RESUME</a></h3>
              <h3><font-awesome-icon :icon="ilinkedin" />
              <a href="https://linkedin.com/in/tabathadelaneyoung" target="_blank">LINKEDIN</a></h3>
              <h3><font-awesome-icon :icon="igithub" />
              <a href="https://github.com/tabathadelane/code-compendium" target="_blank">GITHUB</a></h3>
              <h3><font-awesome-icon :icon="iemail" />
              <a href="mailto:tabathadelane@gmail.com" target="_blank">EMAIL</a></h3>
              <h3><font-awesome-icon :icon="itwitter" />
              <a href="https://twitter.com/tabathadelane" target="_blank">TWITTER</a></h3>
    
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'MyComponent',
  title: "Contact Tabatha",

  data () {
    return {
      iresume: faFileAlt, 
      iemail: faEnvelopeOpenText,
      ilinkedin: faLinkedin,
      igithub: faGithubSquare,
      itwitter: faTwitterSquare,
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
<style lang="scss" scoped>
svg {
  margin-right: 10px;
}
$primary: rgba(128, 0, 128, 0.637);

h3 {
  margin: 15px;
  font-size: 24px;
  font-family: 'Lato', sans-serif !important;
  & a{
    color: $primary !important;

  }
}
</style>