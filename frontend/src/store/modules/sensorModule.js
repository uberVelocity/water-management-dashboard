import axios from 'axios';

const url = '/api/';

const state = {
    ps_sensors_data: [],
    lk_sensors_data: [],
    ql_sensors_data: [],
    status: null
};

const getters = {
    PS_SENSORS : state => {
        // eslint-disable-next-line no-console
        console.log('Getting sensors data from store');
        // eslint-disable-next-line no-console
        console.log(state.ps_sensors_data);
        return state.ps_sensors_data;
    },
    LK_SENSORS : state => {
        return state.lk_sensors_data;
    },
    QL_SENSORS : state => {
        return state.ql_sensors_data;
    },
    LEAK_SENSORS : state => {
        return state.leak_sensors;
    },
    STATUS : state => {
        return state.status;
    }
};

const mutations = {
    PUSH_PS_DATA: (state, payload) => (state.ps_sensors_data.push(payload)),
    PUSH_LK_DATA: (state, payload) => (state.lk_sensors_data.push(payload)),
    PUSH_QL_DATA: (state, payload) => (state.ql_sensors_data.push(payload)),
    SET_STATUS: (state, payload) => (state.status = payload)
};

const actions = {
    PUSH_PS_DATA: (context, payload) => {
        context.commit('PUSH_PS_DATA', payload);
        // eslint-disable-next-line no-console
        console.log('Store: Stored pressure data');
    },
    PUSH_LK_DATA: (context, payload) => {
        context.commit("PUSH_LK_DATA", payload);
    },
    PUSH_QL_DATA: (context, payload) => {
        context.commit("PUSH_QL_DATA", payload);
    },
    FETCH_STATUS : async (context) => {
        const response = await axios.get(url)
        context.commit("SET_STATUS", response.data.message)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};