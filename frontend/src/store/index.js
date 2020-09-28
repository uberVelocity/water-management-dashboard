import Vuex from 'vuex';
import Vue from 'vue';

import sensorModule from './modules/sensorModule';
import authModule from './modules/authModule';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        sensor : sensorModule,
        auth : authModule
    }
});