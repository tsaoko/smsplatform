require('es6-promise').polyfill();


import Vue from 'vue'
import Vuex from 'vuex'
import { cafes } from './modules/cafes.js';


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cafes
    }
})