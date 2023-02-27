import { LANGUAGES } from '@/constants/languages.js';

export default {
    state() {
        return {
            currentLanguage: LANGUAGES.portuguese,
        };
    },
    getters: {
        getCurrentLanguage: (state) => state.currentLanguage,
    },
    mutations: {
        setLanguage (state, value) {
            state.currentLanguage = value;
        },
    },
}