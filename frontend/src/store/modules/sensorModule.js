import axios from 'axios';

const url = 'http://backend:5000/api/status';

const state = {
    status: undefined,
    sensors: []
};

const getters = {
    getSensors: state => {
        return state.sensors
    },
    getStatus: state => {
        return state.status
    }
};

const actions = {
    async fetchStatus({ commit }) {
        const response = await axios.get(url);
        commit('setStatus', response);
    },

    // Retrieve all sensors from the database
    async fetchSensors({ commit }) {
        // TODO: Insert API call to backend to retrieve sensors (make function async)
        // const response = await axios.get(url)
        const dummyData = [{
            id: '1',
            state: 'Online',
            values: [10, 20, 30, 40, 50, 60]
          },
          {
            id: '2',
            state: 'Online',
            values: [10, 20, 30, 40, 50, 60]
          },
          {
            id: '3',
            state: 'Offline',
            values: [10, 60, 30, 40, 50, 60]
          },
        ]
        commit('setSensors', dummyData);
    },
};

const mutations = {
    setSensors: (state, sensors) => (state.sensors = sensors),
    setStatus: (state, status) => (state.status = status)
};

export default {
    state,
    getters,
    actions,
    mutations
};