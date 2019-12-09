import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import jing from './module/jing/jing'
const store  = new Vuex.Store({
modules:{
    jing
}
})
export default  store