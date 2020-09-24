import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/css.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            // primary: '#1976D2',
            // secondary: '#424242',
            // accent: '#82B1FF',
            // info: '#2196F3',
            // success: '#4CAF50',
            // warning: '#FFC107',
            light: {
                primary: '#669C5E',
                secondary: '#e8A90C',
                secondaryLight: "#f6c957",
                customBackground: '#f2f3f4',

                error: '#FF5252',
            },
            dark: {
                primary: '#669C5E',
                secondary: '#e8A90C',
                secondaryLight: "#f6c957",
                customBackground: '#2C3E50',

                error: '#FF5252',
            }
        },
    },
});