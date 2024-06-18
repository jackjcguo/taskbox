import '../src/style.css';
import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';


//👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
setup((app) => {
  app.use(createPinia());
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
