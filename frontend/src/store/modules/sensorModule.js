// import axios from 'axios';

// const url = 'http://localhost:5000/api/status';

const state = {
    ps_sensors_data: [],
    // lk_sensors_data: [],
    // ql_sensors_data: []
};

const getters = {
    PS_SENSORS : state => {
        // eslint-disable-next-line no-console
        console.log('Getting sensors data from store');
        // eslint-disable-next-line no-console
        console.log(state.ps_sensors_data);
        return state.ps_sensors_data;
    },
    // LK_SENSORS : state => {
    //     return state.lk_sensors_data;
    // },
    // QL_SENSORS : state => {
    //     return state.ql_sensors_data;
    // }
};

const mutations = {
    PUSH_PS_DATA: (state, payload) => (state.ps_sensors_data.push(payload)),
    // PUSH_LK_DATA: (state, payload) => (state.lk_sensors_data.push(payload)),
    // PUSH_QL_DATA: (state, payload) => (state.ql_sensors_data.push(payload)),
};

const actions = {
    PUSH_PS_DATA: (context, payload) => {
        const unix_dt = new Date(payload['timestamp'] * 1000);
        const time = unix_dt.toLocaleTimeString("en-GB");
        const date = unix_dt.toLocaleDateString("en-GB");
        let processed_payload = {'x': date + '\n' + time, 'y': payload['variables']['temperature']};
        context.commit("PUSH_PS_DATA", processed_payload);
        // eslint-disable-next-line no-console
        console.log('Store: Stored pressure data');
    },
    // PUSH_LK_DATA: (context, payload) => {
    //     context.commit("PUSH_LK_DATA", payload);
    // },
    // PUSH_QL_DATA: (context, payload) => {
    //     context.commit("PUSH_QL_DATA", payload);
    // },
};



export default {
    state,
    getters,
    actions,
    mutations
};