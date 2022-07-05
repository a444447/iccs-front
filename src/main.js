import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
import store from './index'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line no-unused-vars
import Axios from 'axios'
import VueAxios from "vue-axios";
import axios from "axios";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(elementPlus).use(VueAxios, axios).mount('#app')
