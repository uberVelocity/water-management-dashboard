const state = {
    username : null,
    logged_in: false
};

const getters = {
    USERNAME : state => {
        // eslint-disable-next-line no-console
        console.log('Getting username from store: ' + state.username);
        return state.username;
    },
    LOGGED_IN : state => {
        // eslint-disable-next-line no-console
        console.log('Getting username from store: ' + state.logged_in);
        return state.logged_in;
    },
};

const mutations = {
    SET_USERNAME : (state, payload) => {
        state.username = payload;
    },
    SET_LOGGED_IN : (state, payload) => {
        state.logged_in = payload;
    },
};

const actions = {
    SET_USERNAME : (context, payload) => {
        context.commit("SET_USERNAME", payload);
        // eslint-disable-next-line no-console
        console.log('Store: SET username: ' + payload);
    },
    SET_LOGGED_IN : (context, payload) => {
        context.commit("SET_LOGGED_IN", payload);
        // eslint-disable-next-line no-console
        console.log('Store: SET logged_in: ' + payload);
    },
};


export default {
    state,
    getters,
    actions,
    mutations
};
