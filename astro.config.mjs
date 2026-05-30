import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://mutiny.cat',
  integrations: [icon({
    include: {
      'simple-icons': ['creativecommons'],
    },
  })],
  devToolbar: {
    enabled: false,
  },
});
