import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import ECharts from 'vue-echarts' 
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
