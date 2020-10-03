const state = {
    username : null,
    password : null,
    level : null
};

const getters = {
    USERNAME : state => {
        return state.username;
    },
    PASSWORD : state => {
        return state.password;
    },
    LEVEL : state => {
        return state.level;
    }
};

const mutations = {
    SET_USERNAME : (state, payload) => {
        state.username = payload;
    },
    SET_PASSWORD : (state, payload) => {
        state.password = payload;
    },
    SET_LEVEL : (state, payload) => {
        state.level = payload;
    }
};

const actions = {
    GET_USERNAME : (context, payload) => {
        let data = payload // axios call here
        context.commit('SET_USERNAME', data);
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
