import Vuex from 'vuex';
import Vue from 'vue';

import sensorModule from './modules/sensorModule';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        sensorModule
    }
});