import axios from 'axios';

const url = 'http://localhost:5000/';

const state = {
    pt_sensors: null,
    leak_sensors: null,
    status: null
};

const getters = {
    PT_SENSORS : state => {
        return state.pt_sensors;
    },
    LEAK_SENSORS : state => {
        return state.leak_sensors;
    },
    STATUS : state => {
        return state.status;
    }
};

const mutations = {
    SET_STATUS: (state, payload) => (state.status = payload),
    SET_PT_SENSORS: (state, payload) => (state.pt_sensors = payload),
    SET_LEAK_SENSORS: (state, payload) => (state.leak_sensors = payload)
};

const actions = {
    FETCH_STATUS : async (context) => {
        const response = await axios.get(url)
        context.commit("SET_STATUS", response)
    },

    STORE_PT_SENSORS : (context, payload) => {
        // process sensor data
        // store sensor data
        context.commit("SET_PT_SENSORS", payload);
    },
    STORE_LEAK_SENSORS : (context, payload) => {
        // process sensor data
        // store sensor data
        context.commit("SET_LEAK_SENSORS", payload);
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};