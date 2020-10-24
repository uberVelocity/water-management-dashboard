import axios from 'axios';

const url = 'http://localhost:5000/';

const state = {
    ps_sensors_data: [],
    lk_sensors_data: [],
    ql_sensors_data: [],
    status: null
};

const getters = {
    PS_SENSORS : state => {
        // eslint-disable-next-line no-console
        console.log('Getting pressure sensor data from store');
        // eslint-disable-next-line no-console
        console.log(state.ps_sensors_data);
        return state.ps_sensors_data;
    },
    LK_SENSORS : state => {
        // eslint-disable-next-line no-console
        console.log('Getting leakage sensor data from store');
        // eslint-disable-next-line no-console
        console.log(state.lk_sensors_data);
        return state.lk_sensors_data;
    },
    QL_SENSORS : state => {
        // eslint-disable-next-line no-console
        console.log('Getting quality sensor data from store');
        // eslint-disable-next-line no-console
        console.log(state.ql_sensors_data);
        return state.ql_sensors_data;
    },
    STATUS : state => {
        return state.status;
    }
};

const mutations = {
    PUSH_PS_DATA: (state, payload) => (state.ps_sensors_data.push(payload)),
    PUSH_LK_DATA: (state, payload) => (state.lk_sensors_data.push(payload)),
    PUSH_QL_DATA: (state, payload) => (state.ql_sensors_data.push(payload)),
    SET_PS_DATA: (state, payload) => (state.ps_sensors_data = payload),
    SET_LK_DATA: (state, payload) => (state.lk_sensors_data = payload),
    SET_QL_DATA: (state, payload) => (state.ql_sensors_data = payload),
};

const actions = {
    PUSH_PS_DATA: (context, payload) => {
        context.commit('PUSH_PS_DATA', payload);
        // eslint-disable-next-line no-console
        console.log('Store: Stored pressure data');
    },
    PUSH_LK_DATA: (context, payload) => {
        context.commit("PUSH_LK_DATA", payload);
        // eslint-disable-next-line no-console
        console.log('Store: Stored leakage data');
    },
    PUSH_QL_DATA: (context, payload) => {
        context.commit("PUSH_QL_DATA", payload);
        // eslint-disable-next-line no-console
        console.log('Store: Stored quality data');
    },
    SET_PS_DATA: (context, payload) => {
        context.commit("SET_PS_DATA", payload);
        // eslint-disable-next-line no-console
        console.log('Store: Set pressure data');
    },
    SET_LK_DATA: (context, payload) => {
        context.commit("SET_LK_DATA", payload);
        // eslint-disable-next-line no-console
        console.log('Store: Set leakage data');
    },
    SET_QL_DATA: (context, payload) => {
        context.commit("SET_QL_DATA", payload);
        // eslint-disable-next-line no-console
        console.log('Store: Set quality data');
    },
    FETCH_STATUS : async (context) => {
        // eslint-disable-next-line no-console
        console.log('FETCHING STATUS')
        const response = await axios.get(url)
        context.commit("SET_STATUS", response)
    },
    SET_STATUS: (state, payload) => (state.status = payload),
};

export default {
    state,
    getters,
    actions,
    mutations
};