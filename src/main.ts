import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // element-plus

import App from './App.vue'
import router from './router/index.ts'
import store from './store/index.ts'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale })

app.mount('#app')
