import { createStore } from 'vuex'

import language from './language';

export default createStore({
    namespaced: true,
    modules: {
        language,
    },
})
