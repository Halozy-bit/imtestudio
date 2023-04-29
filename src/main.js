import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'remixicon/fonts/remixicon.css'
import 'simple-datatables/dist/css/style.css'

import './assets/css/style.css'

import 'apexcharts/dist/apexcharts.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'chart.js/dist/chart.umd.js'
import 'echarts/dist/echarts.min.js'
import 'quill/dist/quill.min.js'
import 'simple-datatables/dist/umd/simple-datatables.js'
import 'tinymce/tinymce.min.js'
import './assets/js/php-email-form/validate'
import './assets/js/main.js'


const app = createApp(App)

app.use(router)

app.mount('#app')
