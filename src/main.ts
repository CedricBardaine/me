import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCat, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faJava, faAngular, faGitAlt, faLinkedin, faJsSquare, faAndroid, faBootstrap, faGithub, faNodeJs, faGitlab, faReact, faSymfony, faVuejs, faLinux, faSourcetree } from '@fortawesome/free-brands-svg-icons'
import {   }                          from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCat, faHome, faJava, faAngular, faGitAlt, faLinkedin, faEnvelope, faJsSquare, faAndroid, faBootstrap, faGithub, faNodeJs, faGitlab, faReact, faSymfony, faVuejs, faLinux, faSourcetree);

Vue.component('font-awesome-icon', FontAwesomeIcon)

// was in Fontawesome main.js example
Vue.config.productionTip = false





import './custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
