// src/plugins/vuetify.js
import 'vuetify/styles'; // Global CSS has to be imported
import { createVuetify } from 'vuetify';
import { mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'mdi',
    sets: { mdi },
  },
});

export default vuetify;
